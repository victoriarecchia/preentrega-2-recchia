import { Link } from "react-router-dom"
import "./Footer.css"
export const Footer = () => {
  return (
    <>
    <div className='footer'>
      <Link className= 'links'to = "/todos">Pepes Botines</Link>
      <h6 className= 'links'> Todos los derechos reservados</h6>
      <Link className= 'links' to = "/">Ayuda</Link>
      <Link className= 'links'to = "/">Defensa del consumidor</Link>
    </div>
    </>
  )
}
