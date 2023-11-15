import hamburguesa from '../../assets/images/Hamburguesa.jpg'
import pizza from '../../assets/images/muzzafoto.jpg'
import lomo from '../../assets/images/lomofoto.webp'

const AboutUs = () => {
  return (
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-auto">
                <h2 style={{paddingTop: '30px'}}> Categorias</h2>
                
            </div>
        </div>
        <div style={{paddingTop: '30px', textAlign: 'center', paddingBottom: '30px'}} className="row">
            <div className="col-md-4 col-12">
                <div className="card">
                    <img 
                    className="card-img-top" 
                    src={hamburguesa}
                    alt="aboutUsCard1" 
                    />
                    <div className="card-body">
                        <div className="card-title h5"> Hamburguesas </div>
                    </div>  
                </div>
            </div>

            <div className="col-md-4 col-12">
                <div className="card">
                    <img 
                    className="card-img-top" 
                    src={pizza}
                    alt="aboutUsCard1" 
                    height={'195px'}
                    />
                    <div className="card-body">
                        <div className="card-title h5"> Pizzas </div>
                    </div>  
                </div>
            </div>

            <div className="col-md-4 col-12">
                <div className="card">
                    <img 
                    className="card-img-top" 
                    src={lomo}
                    alt="aboutUsCard1" 
                    />
                    <div className="card-body">
                        <div className="card-title h5"> Lomos </div>
                    </div>  
                </div>
            </div>

        </div>



    </div>
  );
};

export default AboutUs;
