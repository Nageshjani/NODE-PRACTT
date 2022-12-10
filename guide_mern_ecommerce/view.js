/*1. FROM BTNRENDER 

///localhost:3007/detail/${product._id}

<Link id="btn_view" to={`/detail/${product._id}`}>View </Link>

*/


//2. PAGES.JS   >>>>>>>   <Route path="/detail/:id" exact component={DetailProduct} />

// 3. DetailProduct 

/* 
function DetailProduct() {
    const params = useParams()
    const [detailProduct, setDetailProduct] = useState([])
    const [products] = state.productsAPI.products
    const addCart = state.userAPI.addCart

    useEffect(() =>{
        if(params.id){

            products.forEach(product => {
                if(product._id === params.id) setDetailProduct(product)
            })
        }
    },[params.id])
    return (
        <>
            <div className="detail">
                <img src={detailProduct.images.url} alt="" />
                <div className="box-detail">
                    <div className="row">
                        <h2>{detailProduct.title}</h2>
                        <h6>#id: {detailProduct.product_id}</h6>
                    </div>
                    <span>$ {detailProduct.price}</span>
                    <p>{detailProduct.description}</p>
                    <p>{detailProduct.content}</p>
                    <p>Sold: {detailProduct.sold}</p>


                    <Link to="/cart" onClick={() => addCart(detailProduct)}>
                        Buy Now
                    </Link>



                </div>
            </div>
        <>    

    )

*/