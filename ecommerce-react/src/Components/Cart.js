 import React from 'react';
 function Cart(){

    const forceUpdate = React.useState({})[1].bind(null, {})

    var products=JSON.parse(localStorage.getItem('cart'))
    console.log(products)

    const renderItems=()=>{
        if (products.length == 0) {
            return <div>0 Items in the cart</div>
        }
        return products.map((product)=>{
                
                return  <tr>
                            <td className="col-md-6">
                                <div className="media">
                                    <img className="media-object" alt="" src={product.imageUrl} style={{ width: "72px", height: "72px" }} />
                                    <div className="media-body">
                                        <h4 className="media-heading">{product.name}</h4>
                                    </div>
                                </div>
                            </td>
                            <td className="col-md-1" style={{ textAlign: "center" }}>
                                <input type="email" className="form-control" id="exampleInputEmail1" value="1" />
                            </td>
                            <td className="col-md-1 text-center">
                                <strong>${product.price}</strong>
                            </td>
                            <td className="col-md-1 text-center">
                                <strong>${product.price}</strong>
                            </td>
                            <td className="col-md-1">
                                <button type="button" 
                                className="btn btn-danger"
                                onClick={()=>removeItem(product.id)}
                                > Remove</button>
                            </td>
                        </tr>
        })
    }
    const removeItem=(productId)=>{
        let cartItems = JSON.parse(localStorage.getItem('cart'));
        cartItems.forEach((item, i) => {
            if (item.id == productId) {
                cartItems.splice(i, 1);
                // alert("product removed successfully!");
                forceUpdate();
            }
        })
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }

    return(
        <div>
            <br/><br/>
            <div className="container">
                <table className="table table-bordered" border={1} style={{width:"100%"}}>
                    <thead>
                        <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Total</th>
                        <th> </th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderItems()}
                    </tbody>
                </table>
            </div>
        </div>
    )
 }
 export default Cart;