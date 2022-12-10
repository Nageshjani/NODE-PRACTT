var express = require('express')
var multer  = require('multer')


var app = express()

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
})
var upload = multer({ storage: storage })


const fs = require('fs')


app.use(express.static(__dirname + '/public'));
app.use('/uploads', express.static('uploads'));


async function uploadToCloudinary(locaFilePath) {
  var mainFolderName = "main"
  var filePathOnCloudinary = mainFolderName + "/" + locaFilePath
  return cloudinary.uploader.upload(locaFilePath,{"public_id":filePathOnCloudinary})
  .then((result) => {
    fs.unlinkSync(locaFilePath)
    
    return {
      message: "Success",
      url:result.url
    };
  }).catch((error) => {
    // Remove file from local uploads folder 
    fs.unlinkSync(locaFilePath)
    return {message: "Fail",};
  });
}

function buildSuccessMsg(urlList){
  // Building success msg
  var response = '<h1><a href="/">Click to go to Home page</a><br></h1><hr>'
  
  for(var i=0;i<urlList.length;i++){
    response += "File uploaded successfully.<br><br>"
    response += `FILE URL: <a href="${urlList[i]}">${urlList[i]}</a>.<br><br>`
    response += `<img src="${urlList[i]}" /><br><hr>`
  }

  response += `<br><p>Now you can store this url in database or do anything with it  based on use case.</p>`
  return response  
}

app.post('/profile-upload-single', upload.single('profile-file'), async (req, res, next) => {
  // req.file is the `profile-file` file
  // req.body will hold the text fields, if there were any
  var locaFilePath = req.file.path
  var result = await uploadToCloudinary(locaFilePath)
  var response = buildSuccessMsg([result.url])

  return res.send(response)
})

app.post('/profile-upload-multiple', upload.array('profile-files', 12), async (req, res, next) => {
    // req.files is array of `profile-files` files
    // req.body will contain the text fields, if there were any
    var imageUrlList = []
    
    for(var i=0;i<req.files.length;i++){
      var locaFilePath = req.files[i].path
      var result = await uploadToCloudinary(locaFilePath)
      imageUrlList.push(result.url)
    }
    var response = buildSuccessMsg(imageUrlList)
    
    return res.send(response)
})
   

app.listen(port,() => console.log(`Server running on port ${port}!\nClick http://localhost:3000/`))