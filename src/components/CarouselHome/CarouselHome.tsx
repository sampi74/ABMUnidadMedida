import Carousel from 'react-bootstrap/Carousel';
import hamburguesa from '../../assets/images/Hamburguesa.jpg'
import pizza from '../../assets/images/muzzafoto.jpg'
import lomo from '../../assets/images/lomofoto.webp'


const CarouselHome = () => {
  return (
    <Carousel style={{paddingTop: '123px'}}>
    <Carousel.Item interval={1000}>
      <img 
      className='d block w-100'
      style={{maxHeight: "500px", objectFit: 'cover'}}
      src={hamburguesa} 
      alt="slide 1" 
      
      />
      <Carousel.Caption>
        <h3 style={{fontSize: '45px'}}>Hamburguesa con Cheddar</h3>
        <p style={{fontSize: '25px'}}>Hamburguesa con tres medallones de carne y 4 fetas de cheddar</p>
      </Carousel.Caption>

    </Carousel.Item>
    <Carousel.Item interval={500}>
      <img 
      className='d block w-100'
      style={{maxHeight: "500px", objectFit: 'cover'}}
      src={pizza} alt="slide2" />

      <Carousel.Caption>
        <h3 style={{fontSize: '45px'}}>Pizza Muzzarella</h3>
        <p style={{fontSize: '25px'}}>Pizza de 8 porciones con queso muzzarella y oregano</p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      
      <img 
      className='d block w-100'
      style={{maxHeight: "500px", objectFit: 'cover'}}
      src={lomo} alt="slide3" />
      <Carousel.Caption>
        <h3 style={{fontSize: '45px'}}>Lomo Completo</h3>
        <p style={{fontSize: '25px'}}>
          Lomo con carne, tomate, lechuga, jamon, queso y huevo
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  )
}

export default CarouselHome