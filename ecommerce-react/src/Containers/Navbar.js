import {Link, Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Home from '../Components/Home';
import Login from '../Components/Login';
import Register from '../Components/Register';
import "./Navbar.css"
import Products from '../Components/Products';
import Customer from '../Components/Customer';
import ProductView from '../Components/ProductView';
import Cart from '../Components/Cart';
import Logout from '../Components/Logout';
import UpdateProducts from '../Components/UpdateProducts';
function Navbar(){
    return(
        <div>
            <Router>

            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="Home">E-Commerce React</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="collapsibleNavbar">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link link" to="/Home">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link link" to="/Login">Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link link" to="/Register">Register</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link link" to="/Logout">Logout</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link link" to="/Cart">Cart</Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>

                <Routes>
                    <Route path="/Home" element={<Home/>}></Route>
                    <Route path="/Login" element={<Login/>}></Route>
                    <Route path="/Register" element={<Register/>}></Route>
                    <Route path="/Cart" element={<Cart/>}></Route>
                    <Route path="/Products" element={<Products/>}></Route>
                    <Route path="/Customer" element={<Customer/>}></Route>
                    <Route path="/ProductView" element={<ProductView/>}></Route>
                    <Route path="/Logout" element={<Logout/>}></Route>
                    <Route path="/UpdateProducts" element={<UpdateProducts/>}></Route>
                    
                </Routes>
            </Router>
        </div>
    )
}
export default Navbar;