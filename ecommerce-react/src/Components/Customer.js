import { useEffect, useState } from "react";
import axios from 'axios';
import './Customer.css';
import {useNavigate} from 'react-router-dom';
function Customer(){

    const navigate=useNavigate()
    const [products,setproducts]=useState([])
    useEffect(()=>{
        getProducts()
    },[])
    const getProducts=()=>{
        axios.get("http://localhost:8000/ecommerce/getProductsSer/").then(
            (response)=>{
                // console.log(response.data.Products)
                setproducts(response.data.Products)
            },
            (error)=>{
                console.log(error)
            }
        )
        
    }

    const displayProducts=()=>{
        return products.map((item)=>{
            return <div key={item.id} className="col-md-3 col-sm-6">
            <div className="product-grid">
                <div className="product-image">
                    <img className="pic-1" 
                            src={item.imageUrl} alt="" 
                            style={{ width: "210px", height: "200px" }} 
                            onClick={()=>{
                                console.log(item)
                                localStorage.setItem("CurrentProduct",JSON.stringify(item))
                                navigate('/ProductView')
                            }}
                    />
                </div>
                <ul className="rating">
                    <li className="fa fa-star"></li>
                    <li className="fa fa-star"></li>
                    <li className="fa fa-star"></li>
                    <li className="fa fa-star"></li>
                    <li className="fa fa-star"></li>
                </ul>
                <div className="product-content">
                    <h3 className="title">{item.name.substring(0, 50)}</h3>
                    <div className="price">Rs.{item.price}
                    </div>
                    <button className="add-to-cart btn btn-warning" 
                        onClick={()=>{
                            localStorage.setItem("CurrentProduct",JSON.stringify(item))
                            navigate('/ProductView')
                        }}
                    >View Details</button>
                </div>
            </div>
        </div>
        })
    }

    return(
        <div>
            <br/>
            <div className="container">
                <h2>All Products</h2>
                <br/><br/>
                <div className="row">
                    {displayProducts()}
                </div>
            </div>
        </div>
    )
}
export default Customer;