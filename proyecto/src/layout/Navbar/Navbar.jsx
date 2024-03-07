import { Link } from "react-router-dom";
import "./Navbar.css"
import { Cart } from "../../pages/cart/Cart"
export const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to  ="/" className="navbar-brand">PEPES</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <ul className="categories">
                            <Link to="/botines">Todos</Link>
                            <Link to="/category/nike">Nike</Link>
                            <Link to="/category/adidas">Adidas</Link>
                            <Link to="/category/puma">Puma</Link>
                        </ul>
                    </ul>
                    <Link to  ="/cart" className="navbar-brand"><Cart/></Link>
                </div>
            </nav>
        </>
    )
}

