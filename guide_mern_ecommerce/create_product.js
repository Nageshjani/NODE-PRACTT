



  
/* CLIENT CREATE PRODUCT



return (
        <div >
            <div >
                <input type="file" onChange={handleUpload}/>
                {  
                    <div >
                        <img src={images ? images.url : ''} alt=""/>
                        <span onClick={handleDestroy}>X</span>
                    </div>
                }
                
            </div>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Product ID</label>
                    <input type="text"  required
                    value={product.product_id}
                    onChange={handleChangeInput} 
                    disabled={onEdit} />
                </div>

                <div>
                    <label>Title</label>
                    <input type="text" required
                    value={product.title} 
                    onChange={handleChangeInput} />
                </div>

                <div>
                    <label>Price</label>
                    <input type="number"required
                    value={product.price} 
                    onChange={handleChangeInput} />
                </div>

                <div>
                    <label >Description</label>
                    <textarea type="text" required
                    value={product.description}
                    onChange={handleChangeInput} />
                </div>

                <div>
                    <label>Content</label>
                    <textarea type="text" required
                    value={product.content} 
                    onChange={handleChangeInput} />
                </div>

                <div >
                    <label>Categories: </label>
                    <select name="category" value={product.category} onChange={handleChangeInput} >
                        <option value="">Please select a category</option>
                        {
                            categories.map(category => (
                                <option value={category._id} key={category._id}>
                                                                                 {category.name}
                                </option>
                            ))
                        }
                    </select>
                </div>

                <button type="submit">{onEdit? "Update" : "Create"}</button>
            </form>
        </div>
    )



*/    

/*const [images, setImages] = useState(false)*/

/*const handleUpload = async e =>{              OUTPUT : setImages(res.data)  -->   res.json({public_id: result.public_id, url: result.secure_url})

            const file = e.target.files[0]
            let formData = new FormData()
            formData.append('file', file)
            const res = await axios.post('localhost:5050/api/upload', formData)
            })
            setImages(res.data)

        } catch (err) {
            alert(err.response.data.msg)
        }
    }
*/




/*'localhost:5050/api/upload'*/


/*router.post('/upload', (req, res) =>{       OUTPUT: res.json({public_id: result.public_id, url: result.secure_url})
    try { 
        const file = req.files.file;          
       
        cloudinary.v2.uploader.upload(file.tempFilePath, {folder: "test"}, async(err, result)=>{
            if(err) throw err;
            removeTmp(file.tempFilePath)
            res.json({public_id: result.public_id, url: result.secure_url})
        })


    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
})
*/


/*const handleDestroy = async () => {          OUTPUT:setImages(false)
        try {
            await axios.post('localhost:5050/api/destroy',
             {public_id: images.public_id},
             {headers: {Authorization: token}
            })
            setImages(false)
        } catch (err) {
            alert(err.response.data.msg)
        }
    
    }
    */



/*const initialState = {
    product_id: '',
    title: '',
    price: 0,
    description: 'How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.',
    content: 'Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.',
    category: '',
    _id: ''
}
*/

/*const [product, setProduct] = useState(initialState)*/

/*const handleChangeInput = e =>{
        const {name, value} = e.target
        setProduct({...product, [name]:value})
    }
*/


/*const handleSubmit = async e =>{
        e.preventDefault()
        try {
                await axios.post('localhost:5050/api/products', {...product, images}, {
                    headers: {Authorization: token}
                })
            }
            setCallback(!callback)
            
        } catch (err) {
            alert(err.response.data.msg)
        }
    }
*/







/*localhost:5050/api/products*/


/*
app.post('/products',createProduct)*/


/*
 createProduct: async(req, res) =>{
    try {
        const {product_id, title, price, description, content, images, category} = req.body;
        if(!images) return res.status(400).json({msg: "No image upload"})

        const product = await Products.findOne({product_id})
        if(product) return res.status(400).json({msg: "This product already exists."})

        const newProduct = new Products({
            product_id,
            title: title.toLowerCase(), 
            price, description, 
            content, 
            images, 
            category
        })

        await newProduct.save()
        res.json({msg: "Created a product"})

    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
},


*/




















