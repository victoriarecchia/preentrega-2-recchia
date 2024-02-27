import { Link } from "@mui/material"

import "./Navbar.css"
import { Cart } from "../../pages/cart/Cart"
export const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <a className="navbar-brand" href="/">PEPES</a>
                    <div className="navbar-nav">
                        <Link to="/category/Adidas" className="btn btn-outline-dark" href="/category/Adidas">Adidas</Link>
                        <Link to="/category/Nike" className="btn btn-outline-dark mx-2" href="/category/Nike" >Nike</Link>
                        <Link to="/category/Puma" className="btn btn-outline-dark mx-2" href="/category/Puma" >Puma</Link>
                    </div>
                    <Link to="/cart" className="btn btn-outline-dark mx-2" href="/cart"> <Cart/></Link>
                </div>
            </nav>
        </>
    )
}

{/* <nav className="navbar navbar-expand-lg bg-body-tertiary d-flex justify-content-center">
                <div className="containerNavbar">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <Link to="/"> <li className="nav-item">
                                <button className="btn btn-outline-dark mx-2">
                                    <a className="nav-link" href="/">Inicio</a>
                                </button>
                            </li>
                            </Link>
                            <Link to="/botines">
                                <li className="nav-item">
                                    <button className="btn btn-outline-dark mx-2"><a className="nav-link" href="/botines">Botines</a></button></li>
                            </Link>
                            <Link to="/category/Nike">
                                <li className="nav-item"><button className="btn btn-outline-dark mx-2">{" "}<a className="nav-link" href="/category/Nike">Nike</a></button>
                                </li>
                            </Link>
                            <Link to="/category/Adidas"><li className="nav-item"><button className="btn btn-outline-dark mx-2">{" "}
                                <a className="nav-link" href="/category/Adidas">Adidas</a></button></li>
                            </Link>
                            <Link to="/category/Puma">
                                <li className="nav-item"><button className="btn btn-outline-dark mx-2"> <a className="nav-link" href="/category/Puma">Puma</a></button>
                                </li>
                            </Link>
                        </ul>
                        <Link to="/cart">
                            <li className="nav-item"><button className="btn btn-outline-dark mx-2"> <a class="nav-link" href="/cart">
                            </a><Cart /></button>
                            </li>
                        </Link>
                    </div>
                </div> */}
{/* </nav> */ }
