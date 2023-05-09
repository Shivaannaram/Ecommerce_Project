import './ProductView.css';
import { useNavigate } from 'react-router-dom';
function ProductView(){

    const navigate=useNavigate()

    var product=JSON.parse(localStorage.getItem("CurrentProduct"))
    console.log(product)

    const addToCart=()=>{
            // console.log(cart)
            if (localStorage.getItem('cart') == null) {
                localStorage.setItem("cart", JSON.stringify([]));
            }
            var cart=JSON.parse(localStorage.getItem('cart'))
            cart.push(product)
            localStorage.setItem("cart",JSON.stringify(cart))
            navigate('/Cart')
    }
    
    return(
        <div>
            <div className="container">
                <div className="card">
                    <div className="container-fliud">
                        <div className="wrapper row">
                            <div className="preview col-md-6">

                                <div className="preview-pic tab-content">
                                    <div className="tab-pane active" id="pic-1"><img src={product.imageUrl} alt="" /></div>
                                </div>
                            </div>
                            <div className="details col-md-6">
                                <h3 className="product-title">{product.name}</h3>
                                <div className="rating">
                                    <div className="stars">
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                    </div>
                                </div>
                                <p className="product-description">{product.description}</p>
                                <h4 className="price">Price: <span>{product.price} RS</span></h4>
                                <h5 className="text-dark">SELLER: <span>{product.seller}</span></h5>
                                <div className="action">
                                    <button 
                                    className="add-to-cart btn btn-success"
                                    onClick={addToCart}
                                    >add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductView;