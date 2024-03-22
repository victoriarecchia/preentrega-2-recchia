import { Link } from "react-router-dom";
import "./Navbar.css"
import { CartWidget } from "../../common/productCard/CartWidget";
import { menuNavigation } from "../../../router/menuNavigation";

export const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <Link to="/" className="navbar-brand">PEPES</Link>
                    <div className="categories">
                    {
                        menuNavigation.map(({path, text, id})=>(
                            <Link key= {id} to = {path}>{text}</Link>
                        ))
                    }
                    </div>
                    <CartWidget />
                </div>
            </nav >
        </>
    )
}

