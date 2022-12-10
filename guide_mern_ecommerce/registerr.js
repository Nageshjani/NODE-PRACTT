
//5050 ---server port
//3307 ---client port


/* CLIENT --------->>>>>>>>>>     APP.JS


   
import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import MainPages from './components/mainpages/Pages'


function App() {
  return (
      <Router>
        <div className="App">
          <MainPages />
        </div>
      </Router>
  );
}

export default App; 
 */


/* PAGES.JS
import Register from './auth/Register'

<Route path="/register" exact component={Register} />   ------------>>  ' http://localhost:3007/register' << ----------------------
 */

/* auth -> Register.js

import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'


// create user state -> make axios post by adding user state in it -> set localstorge firstLogin  as 'true' -> go to window location '/' HOME PAGE

function Register() {

    const [user, setUser] = useState({name:'', email:'', password: ''})

    const onChangeInput = e =>{
        const {name, value} = e.target;
        setUser({...user, [name]:value})
    }

    const registerSubmit = async e =>{
        e.preventDefault()
        try {
            await axios.post('/user/register', {...user})

            localStorage.setItem('firstLogin', true)

            
            window.location.href = "/";
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    return (
        <div className="login-page">
            <form onSubmit={registerSubmit}>
                <h2>Register</h2>
                <input type="text" name="name" required
                placeholder="Name" value={user.name} onChange={onChangeInput} />

                <input type="email" name="email" required
                placeholder="Email" value={user.email} onChange={onChangeInput} />

                <input type="password" name="password" required autoComplete="on"
                placeholder="Password" value={user.password} onChange={onChangeInput} />

                <div className="row">
                    <button type="submit">Register</button>
                    <Link to="/login">Login</Link>
                </div>
            </form>
        </div>
    )
}

export default Register


*/




/* GO TO models->userModel.js

const Users = require('../models/userModel')

const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: Number,
        default: 0
    },
    cart: {
        type: Array,
        default: []
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Users', userSchema) 
*/



// Routes  -------------         axios.post('http://localhost:5050/user/register', {...user})
app.use('/user', require('./routes/userRouter'))

/*  routes->userRouter.js
const router = require('express').Router()
const userCtrl = require('../controllers/userCtrl')
const auth = require('../middleware/auth')
router.post('/register', userCtrl.register)

*/

/* controllers->userCtrl.js

const Users = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userCtrl = {
    register: async (req, res) =>{
        try {
            const {name, email, password} = req.body; //req.body={...user}        //await axios.post('/user/register', {...user})

            const user = await Users.findOne({email})
            if(user) return res.status(400).json({msg: "The email already exists."})

            if(password.length < 6) 
                return res.status(400).json({msg: "Password is at least 6 characters long."})
            const passwordHash = await bcrypt.hash(password, 10)
            const newUser = new Users({
                name, email, password: passwordHash
            })
            await newUser.save()
            const accesstoken = createAccessToken({id: newUser._id}) 

                                        
                                            const createAccessToken = (user) =>{
                                                    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '11m'})
                                                } 
            
            const refreshtoken = createRefreshToken({id: newUser._id})

            
                                            const createRefreshToken = (user) =>{
                                                    return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, {expiresIn: '7d'})
                                                }
             

            res.cookie('refreshtoken', refreshtoken, {
                httpOnly: true,
                path: '/user/refresh_token',
                maxAge: 7*24*60*60*1000 // 7d
            })
            res.json({accesstoken})

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },

*/


//user saved in Database
// -> Generate acccesstoken & refreshtoken  
//-> set refresh token into cookie with name 'refresh_token' 
//-> finally return accesstoken in json formate
// after completing whole post request







