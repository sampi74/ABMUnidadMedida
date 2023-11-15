import './footer.css'
import facebook from '../../assets/images/Facebook.svg'
import twitter from '../../assets/images/Twitter.svg'
import instagram from '../../assets/images/Instagram.svg'
import logo from '../../assets/images/logofooter.svg'

const Footer = () => {
  return (
    
<footer>
  <div className="footer">
    <img src={logo} alt="logo"/>
    <div className="footer-contenedor">
      <div className="footer-contenedor-data">
        <h5 className="footer-contenedor-data-texto">Horarios</h5>            
        <h6 className="footer-contenedor-data-subtexto">10:00 am a 23:00 pm</h6>
      </div>
      <div className="footer-contenedor-data">
        <h5 className="footer-contenedor-data-texto">Direccion</h5>
        <h6 className="footer-contenedor-data-subtexto">Italia 1952 Ciudad</h6>
      </div>
      <div className="footer-contenedor-data">
        <h5 className="footer-contenedor-data-texto">Telefonos</h5>
        <h6 className="footer-contenedor-data-subtexto">+54 261 611 6345</h6>
        <h6 className="footer-contenedor-data-subtexto">+54 261 612 6678</h6>
      </div>
    </div>
    <div className="footer-contenedor-apps">
      <img src={facebook} className="footer-contenedor-apps-logo" alt="facebook"/>
      <img src={twitter} className="footer-contenedor-apps-logo" alt="twitter"/>
      <img src={instagram} className="footer-contenedor-apps-logo" alt="instagram"/>
    </div>
  </div>
</footer>
  
  )
}

export default Footer