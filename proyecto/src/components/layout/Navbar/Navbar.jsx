import { Link } from "react-router-dom";
import "./Navbar.css"
// import { Cart } from "../../pages/cart/Cart";
import { CartWidget } from "../../common/productCard/CartWidget";

export const Navbar = () => {
    let user = { rol: "admin" }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <Link to="/" className="navbar-brand">PEPES</Link>
                    {/* <div className="navbar-nav"> */}
                    <div className="categories">
                        <Link to="/botines">Todos</Link>
                        <Link to="/category/nike">Nike</Link>
                        <Link to="/category/adidas">Adidas</Link>
                        <Link to="/category/puma">Puma</Link>
                        {/* </div> */}
                    </div>
                    <CartWidget />
                </div>
            </nav >
        </>
    )
}

