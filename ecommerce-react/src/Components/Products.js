import axios from 'axios';
import {useState,useRef, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
function Products(){

    const navigate=useNavigate()
//------------------------------------------------------------------------------------------
    
//------------------------------------------------------------------------------------------

    const formref=useRef()
    const [products,setproducts]=useState({
        name:'',
        price:0,
        description:'',
        imageUrl:'',
        quantity:0,
        seller:''
    })
    const [allproducts,setallproducts]=useState([])
   const Updatedata=(event)=>{
        var name=event.target.name
        var value=event.target.value
        setproducts({...products,[name]:value})
   }
   const Productdetails=(event)=>{
        event.preventDefault()
        console.log("Products:",products)
        axios.post("http://127.0.0.1:8000/ecommerce/addProductSer/",products).then(
            (response)=>{
                console.log(response)
                formref.current.reset()
                getProductDetails()
            },
            (error)=>{
                console.log(error)
            }
        )
   }

   useEffect(()=>{
    getProductDetails()
   },[])

   const getProductDetails=()=>{
        axios.get("http://127.0.0.1:8000/ecommerce/getProductsSer/").then(
            (response)=>{
                console.log("Response of Products",response.data.Products)
                setallproducts(response.data.Products)
            },
            (error)=>{
                console.log(error)
            }
        )
   }
   
   const showProduct=()=>{
        return allproducts.map((product)=>{
            return <tr key={product.id}> <td>{product.id} </td>
                                        <td>{product.name}</td> 
                                        <td><img style={{ width: "100px", height: "100px" }} src={product.imageUrl} alt=""></img></td> 
                                        <td>{product.price}</td> 
                                        <td>{product.seller}</td> 
                                        <td><button className="btn btn-danger" onClick={() => deleteProduct(product.id)}>Delete</button></td>
                                        <td><button className="btn btn-warning"
                                        onClick={()=>editProduct(product.id)}
                                        >Edit</button></td> 
                    </tr>
          
        })
   }
   const editProduct=(productId)=>{
        navigate('/UpdateProducts',{state:{id:productId}})
        alert("Edit Button Clicked")
        // console.log(productId)
        // console.log(products)
        // axios.put(`http://localhost:8000/ecommerce/UpdateProductSer/${productId}`).then(
        //     (response)=>{
        //         console.log(response)
        //         getProductDetails()
        //     },
        //     (error)=>{
        //         console.log(error)
        //     }
        // )
   }

   const deleteProduct=(productId)=>{
    console.log(productId)
    axios.delete(`http://127.0.0.1:8000/ecommerce/DeleteProductSer/${productId}`).then(
        (response)=>{
           console.log(response);
           alert("product deleted")
           getProductDetails()
        },
        (error)=>{
            console.log(error)
        }
    )

   }

    return(
        <div>
            <h2>Add Products Here</h2>
            <br/>
            <div class="container mt-3">
                <form ref={formref}>
                    <div className="row">
                        <div className="col">
                            <input className="form-control" onChange={Updatedata} name='name' type='text' placeholder='Product Name'/>
                        </div>
                        <div className="col">
                            <input className="form-control" onChange={Updatedata} name='price' type='number' placeholder='Product Price'/>
                        </div>
                        <div className="col">
                            <input className="form-control" onChange={Updatedata} name='description' type='text' placeholder='Product Description'/>
                        </div>
                    </div>
                    <br></br>
                    <div className="row">
                        <div className="col">
                            <input className="form-control" onChange={Updatedata} name='imageUrl' type='text' placeholder='Product ImageUrl'/>
                        </div>
                        <div className="col">
                            <input className="form-control" onChange={Updatedata} name='quantity' type='number' placeholder='Product Quantity'/>
                        </div>
                        <div className="col">
                            <input className="form-control" onChange={Updatedata} name='seller' type='text' placeholder='Product Seller'/>
                        </div>
                    </div>
                    <br></br><br></br>
                    <button className="btn btn-primary" onClick={Productdetails}>Add Product</button>
                </form>
            </div>

            <div class="container mt-3">
                <table  className="table table-bordered table-hover" border={1} style={{width:"100%"}}>
                    <thead className='table table-bordered'>
                        <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>Seller</th>
                        <th colSpan={2}>Operation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {showProduct()}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Products;