const express=require("express")
const app=express();
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.set("view engine","hbs")
const crypto = require("crypto-js");
const dotenv = require("dotenv");
dotenv.config();
const cookieParser = require('cookie-parser')
app.use(cookieParser())
const cors=require('cors')


app.use(function(req, res, next) {  
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});  

app.use(cors({

    origin:"http://localhost:3007",
    credentials: true,
})
)




app.get('/ref',(req,res)=>{

    res.cookie('refreshtoken3',  'mmm',{
        httpOnly: true,
        path: 'http://localhost:9000/mm',
        maxAge: 7*24*60*60*1000 // 7d
    }).send('Cookie is set');  
    
})

app.get('/mm', function(req, res) {  
    console.log("Cookies :  ", req.cookies);  
  }); 

app.get('/cookie',function(req, res){  
    res.cookie('cookie_name' , 'cookie_value').send('Cookie is set');  
});   
 

app.listen(9000,()=>{
    console.log("app running at port 9000")

})


app.get("/register",(req,res)=>{
    res.render("register")
})

app.get("/login",(req,res)=>{
    res.render("login")
})
app.post("/login",(req,res)=>{
    var email=req.body.email
    console.log(email)


})

var fileupload = require("express-fileupload");
app.use(fileupload());
app.post('/product',(req,res)=>{
    
    console.log(req.files)

res.status(200).json("hello");})
//Connect  to database

const mongoose =require("mongoose")

mongoose.connect('mongodb://localhost:27017/employeeRegistration').then(()=>{
    console.log("conn done")
})

//Create Schema
const employeeSchema= new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    }
})
 

//Insert into model
const User=new mongoose.model("User",employeeSchema)

//model name  -->  User

//Inserting Data Into Database

app.post('/submit',(req,res)=>{
    console.log(req.body)
    //New model object
    //Getting data from html body
    //Saving Into model object
    const registerEmployee=new User({
        name:req.body.name,
        email:req.body.email,
        password:crypto.AES.encrypt(req.body.password, process.env.SEC_KEY).toString()
          
    });
   
    //Saving Model object
    registerEmployee.save()
    res.render("login")
    
})

app.get("/findone",(req,res)=>{
    
    User.findOne({email:"nageshjani4@gmail.com"},
    (err,data)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(data)
        }
    })
})
app.get("/remove",(req,res)=>{
    
    User.remove({email:"nageshjani4@gmail.com"},
    (err,data)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(data)
        }
    })
})

app.get("/update",(req,res)=>{
    
    User.update({email:"nageshjani4@gmail.com"},
    (err,data)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(data)
        }
    })
})

//Suppose I want to fetch the record of the student who has most recently taken admission to the College
//data in descending (-1) or ascending(1) order.
//limit() – It decides the number of documents needed to be retrieved.

app.get('/latest',(req,res)=>{
    User.find({}).sort({passowrd:-1}).limit(2).exec((err,data)=>{
        if(err){
            console.log(err)
        }
        else{
            res.send(data)
        }
    })
})



//CRYPTO JS
//NEED THREE THINGS
//SEC_KEY
//data->which is needed to be encrypted
//call encryptdunction ->
//function takes two arguments -> encrypt(data,SEC_KEY)
//call decrypt function to get data back in origanl form

var data = "This is the data that need to be encrypted"
  
// Defining the secret key
var sec_key = "pwd@1234"
  
// Encrypting the data using the password key
var encrypted_data = crypto.AES.encrypt(data, sec_key).toString();
console.log("Encrypted data -- ",encrypted_data)
var decrypted_data = crypto.AES.decrypt(encrypted_data, sec_key).toString(crypto.enc.Utf8)
console.log("Decrypted data -- ",decrypted_data)

  
// U2FsdGVkX1/20LxBlk5wWrW6zTTa4cRs3N3VdYmzeKC/naR8wzyDOyOYlfzYsZpasmdxNzaaDk1C9DOa+w1s/A==








/* req.query

type

http://localhost:9000/profile?name=Gourav 
app.get('/profile', function (req, res) {
    console.log(req.query.name);
    res.send();
  });
*/  












const prSchema=new mongoose.Schema({
    img:{
        type:String,
    }
});
const Photos=new mongoose.model('Photos',prSchema)

app.post('/pra',(req,res)=>{
    const sample=new Photos({
        img:req.body.link,
        
    })
    sample.save()
    res.json('done')

})

app.get('/pra', async (req, res) => {
    const data = await Photos.find()
    res.send(data);
   
   })

app.delete('/pra_remove/:id', async (req, res) => {
   
    
    await Photos.findByIdAndDelete(req.params.id)
    res.send('done');
   
   })   




















const cloudinary = require('cloudinary')
app.use(fileupload({
    useTempFiles:true
}))

 //Model  

const imageSchema=new mongoose.Schema({
    img:{
        type:Object,
    }
});

const Objects=new mongoose.model('Objects',prSchema)



// we will upload image on cloudinary
cloudinary.config({
    cloud_name: 'dhruvforall',
    api_key: 958545389913395,
    api_secret:'6rVoZa8qV9iR3LNbsclurpzmkrU'
})

app.post('/up', (req,res)=>{
    const file = req.files.file;
    
    console.log(file)

    
    

})






















