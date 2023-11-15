import logo from '../../assets/images/logo.svg'
import lupa from '../../assets/images/lupa.svg'
import carrito from '../../assets/images/carrito.svg'
import casa from '../../assets/images/casa.svg'
import Nav from 'react-bootstrap/Nav';
import './navbar.css'



import { useNavigate } from 'react-router-dom'

function Header() {

const Navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
        <img src={logo} alt="logo" className="logo"/>
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse barra-opciones" id="navbarsExample04">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Nav.Link className="nav-link" onClick={() => Navigate('/')}>Home</Nav.Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Catalogo</a>
          </li>
          <li className="nav-item">
            <Nav.Link onClick={() => Navigate('/abmUnidadMedida')}>ABM Unidad Medida</Nav.Link>
          </li>
        </ul>
        <ul className="navbar-nav barra-iconos">
          <li>
            <div className="boton-busqueda">
              <input type="text" className="boton-busqueda-texto"/>
              <button className="boton-barra boton-barra-circular">
                <img src={lupa} alt="lupa" width="25.09"/>
              </button>
            </div>
          </li>
          <li>
            <button className="boton-barra boton-barra-circular">
              <img src={carrito} alt="carrito"/>
            </button>
          </li>
          <li>
            <button onClick={() => Navigate('/login')} className="boton-barra boton-barra-inicio"><img src={casa} className="boton-casa" alt="casa"/>Iniciar Sesion</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
}

export default Header;