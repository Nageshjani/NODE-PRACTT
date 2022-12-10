const express = require('express')
const app = express()

app.use(express.json())
app.use(cookieParser())

const mongoose = require('mongoose')

const cors = require('cors')
app.use(cors())

const fileUpload = require('express-fileupload')
app.use(fileUpload({
    useTempFiles: true
}))

const cookieParser = require('cookie-parser')
const path = require('path')
require('dotenv').config()

// Connect to mongodb
const URI = process.env.MONGODB_URL
mongoose.connect(URI, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err =>{
    if(err) throw err;
    console.log('Connected to MongoDB')
})


app.listen(5050, () =>{
    console.log('Server is running on port', 5050)
})
















































/* module.exports = mongoose.model("Products", productSchema)

const mongoose = require('mongoose')


const productSchema = new mongoose.Schema({
    product_id:{
        type: String,
        unique: true,
        trim: true,
        required: true
    },
    title:{
        type: String,
        trim: true,
        required: true
    },
    price:{
        type: Number,
        trim: true,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    },
    images:{
        type: Object,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    checked:{
        type: Boolean,
        default: false
    },
    sold:{
        type: Number,
        default: 0
    }
}, {
    timestamps: true //important
})

*/












































/* middleware -> module.exports = authAdmin

const jwt = require('jsonwebtoken')
const Users = require('../models/userModel')

const authAdmin = async (req, res, next) =>{
    try {
        const user = await Users.findOne({_id: req.user.id})
        if(user.role === 0)
            return res.status(400)
            .json({msg: "Admin resources access denied"})
        next()
        
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
}




*/





























