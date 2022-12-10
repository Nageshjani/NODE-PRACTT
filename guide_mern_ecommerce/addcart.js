

/* 3 USERAPI() --> addCart           -------- >>>>>          //updates cart in database &reset the cart

const [cart, setCart] = useState([])
const addCart = async (product) => {
    if(!isLogged) return alert("Please login to continue buying")
    const check = cart.every(item =>{return item._id !== product._id})
    if(check){
        setCart([...cart, {...product, quantity: 1}])
        await axios.patch('localhost:5050/user/addcart', {cart: [...cart, {...product, quantity: 1}]}, {headers: {Authorization: token}})        
    }else{
        alert("This product has been added to cart.")
    }
}

return {
   
    addCart: addCart,
   
}
}
*/


/*

/*localhost:5050/user/addcart*/

/* app.patch('/user/addcart', addCart)
 addCart: async (req, res) =>{
        try {
            await Users.findOneAndUpdate({_id: req.user.id},{cart: req.body.cart})
            return res.json({msg: "Added to cart"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
*/
