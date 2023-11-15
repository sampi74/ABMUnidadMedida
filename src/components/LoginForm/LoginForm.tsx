import React from 'react';
import {MDBBtn, MDBContainer, MDBCard, MDBCardBody, MDBCardImage, MDBRow, MDBCol, MDBInput, MDBCheckbox}
from 'mdb-react-ui-kit';
import { useNavigate } from "react-router-dom";
import { LoginService } from "../../services/LoginService";
import { DtoLogin } from "../../types/DtoLogin";
import hamburguesa from '../../assets/images/muzzafoto.jpg'

function LoginForm() {

  const navigate = useNavigate();

    let dtoLogin = {
        username: "admin",
        password: "admin",
    } as DtoLogin;

    function onLogIn(){
        try{
        LoginService.login(dtoLogin);
        window.localStorage.setItem('isLoggedIn', 'true');
        navigate('/')
        } catch(Error){
            console.error("Hay un error");
        }
    }

  return (
    <MDBContainer  className='my-5'>
      <MDBCard style={{padding: '183px'}}>

        <MDBRow className='g-0 d-flex align-items-center'>

            <MDBCol md='4'>
              <img src={hamburguesa} alt="" height={'400px'} width={'600px'}/>          
            </MDBCol>

          <MDBCol md='8'>

            <MDBCardBody>

              <MDBInput wrapperClass='mb-4' label='Usuario' id='form1' type='string'/>
              <MDBInput wrapperClass='mb-4' label='Contraseña' id='form2' type='password'/>

              <div className="d-flex justify-content-between mx-4 mb-4">
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Recuerdame' />
                <a href="!#">Olvidaste tu contraseña?</a>
              </div>

              <MDBBtn style={{backgroundColor: 'orange', borderColor: 'white'}} onClick={onLogIn} className="mb-4 w-100">Login</MDBBtn>

            </MDBCardBody>

          </MDBCol>

        </MDBRow>

      </MDBCard>
    </MDBContainer>
  );
}

export default LoginForm;