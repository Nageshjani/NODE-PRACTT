

/*1. ProductsAPI



function ProductsAPI() {
    const [products, setProducts] = useState([])
    const [callback, setCallback] = useState(false)
    


    useEffect(() =>{
        const getProducts = async () => {
            const res = await axios.get(`localhost:5050/api/products`)
            setProducts(res.data.products)
            setResult(res.data.result)
        }
        getProducts()
    },[callback])

    
    return {
        products: [products, setProducts],
        callback: [callback, setCallback],
       
    }
}



*/





/*  axios.get(`localhost:5050/api/products`)

getProducts: async(req, res) =>{
        try {
            const products =Products.find()
            res.json({
                status: 'success',
                result: products.length,
                products: products
            })
            
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },



*/










//2.GLOBALSTATE

/*
import ProductsAPI from './api/ProductsAPI'
 
    const state = {
        productsAPI: ProductsAPI(),
    }
*/


// 3.PRODUCT.JS

/* 
const [products, setProducts] = state.productsAPI.products

 return (

        <div>
        
        
        {
                products.map(product => {
                    return <ProductItem key={product._id} product={product} />
                    
                })
            } 
        </div>

       
        {products.length === 0 && <Loading />}
        </>
    )
}

*/



/*4  PRODUCTITEM

import BtnRender from './BtnRender'

ProductItem({product}){

return (
        <div className="product_card">
            
            <img src={product.images.url} alt="" />

            <div className="product_box">
                <h2>{product.title}</h2>
                <span>${product.price}</span>
                <p>{product.description}</p>
            </div>

            
            <BtnRender product={product}  />
        </div>
    )

*/


/*5 BTNRENDER


function BtnRender({product, deleteProduct}) {
    
    const addCart = state.userAPI.addCart

    
    return (
        <div className="row_btn">
            {
               <>
                    <Link id="btn_buy" to="#!" onClick={() => addCart(product)}>
                        Buy
                    </Link>
                    <Link id="btn_view" to={`/detail/${product._id}`}>
                        View
                    </Link>
                </>
            }
                
        </div>
    )
}



*/



//GLOBALSTATE



const [token, setToken] = useState(false)


useEffect(() =>{
    const firstLogin = localStorage.getItem('firstLogin')
    if(firstLogin){
        const refreshToken = async () =>{
            const res = await axios.get('localhost:5050/user/refresh_token')
    
            setToken(res.data.accesstoken)

            setTimeout(() => {
                refreshToken()
            }, 10 * 60 * 1000)
        }
        refreshToken()
    }
},[])



const state = {
    token: [token, setToken],
    userAPI: UserAPI(token),
    

/*   axios.get('localhost:5050/user/refresh_token')

refreshToken: (req, res) =>{
        try {
            const rf_token = req.cookies.refreshtoken;
            if(!rf_token) return res.status(400).json({msg: "Please Login or Register"})

            jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET, (err, user) =>{
                if(err) return res.status(400).json({msg: "Please Login or Register"})

                const accesstoken = createAccessToken({id: user.id})

                res.json({accesstoken})
            })

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
        
    },


*/




//userAPI: UserAPI(token)

/*
const [isLogged, setIsLogged] = useState(false)
const [cart, setCart] = useState([])

    useEffect(() =>{
        if(token){
            const getUser = async () =>{
                try {
                    const res = await axios.get('localhost:5050/user/infor', {
                        headers: {Authorization: token}
                    })

                    setIsLogged(true)
                    setCart(res.data.cart)

                } catch (err) {
                    alert(err.response.data.msg)
                }
            }

            getUser()
            
        }
    },[token])

    return {
        isLogged: [isLogged, setIsLogged],
        isAdmin: [isAdmin, setIsAdmin],
        cart: [cart, setCart],
       
        
    }
*/

/*'localhost:5050/user/infor'*/

/*'app.get('/user/infor',getUser)

getUser: async (req, res) =>{
    const Users = require('../models/userModel')
        try {
            const user = await Users.findById(req.user.id).select('-password')
            if(!user) return res.status(400).json({msg: "User does not exist."})
            res.json(user)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },

*/    


/* module.exports = mongoose.model('Users', userSchema) 
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
*/







