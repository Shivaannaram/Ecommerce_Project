import axios from 'axios';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
function UpdateProducts(props){
    const location = useLocation();
    const [products,setproducts]=useState({
        name:'',
        price:0,
        description:'',
        imageUrl:'',
        quantity:0,
        seller:''
    })
    const Updatedata=(event)=>{
        var name=event.target.name
        var value=event.target.value
        setproducts({...products,[name]:value})
    }
    const Update=(event)=>{
        event.preventDefault()
        console.log(products)
        console.log(location.state.id)
        // console.log(`http://localhost:8000/ecommerce/UpdateProductSer/${location.state.id}`)
        axios.put(`http://localhost:8000/ecommerce/UpdateProductSer/${location.state.id}`,products).then(
            (response)=>{
                console.log(response)
            },
            (error)=>{
                console.log(error)
            }
        )
    }
    return(
        <div>
            <h1>Update Products</h1>
            <div class="container mt-3">
                <form>
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
                    <button className="btn btn-primary" onClick={Update}>Update Product</button>
                </form>
            </div>

            <div>{location.state.id}</div>
        </div>
    )
}
export default UpdateProducts;