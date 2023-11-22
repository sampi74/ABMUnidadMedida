import {MDBBtn, MDBContainer, MDBCard, MDBCardBody, MDBCardImage, MDBRow, MDBCol, MDBInput, MDBCheckbox}
from 'mdb-react-ui-kit';
import { useNavigate } from "react-router-dom";
import { LoginService } from "../../services/LoginService";
import { DtoLogin } from "../../types/DtoLogin";
import hamburguesa from '../../assets/images/muzzafoto.jpg'
import { useFormik } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";
import { toast } from 'react-toastify';
import { Form, Button, Modal } from "react-bootstrap";

function LoginForm() {

  const navigate = useNavigate();
  const [show, setShow] = useState(true);

    // YUP - Esquema de validación
    const validationSchema = Yup.object({
        username: Yup.string().required("El nombre de usuario es requerido"),
        password: Yup.string().required("La contraseña es requerida"),
    });

    const handleHide = () => {
        setShow(false);
    };

    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
        },

        validationSchema: validationSchema,

        onSubmit: async (values) => {
        try {
            const token = await LoginService.login(values);
            console.log("Inicio de sesión exitoso. Token:", token);
            handleHide();
            window.localStorage.setItem('isLoggedIn', 'true');
            navigate('/');
            toast.success('Inicio de sesión exitoso');
            } catch (error) {
            console.error("Error al iniciar sesión:");
            toast.error('Revisá los datos ingresados');
            // Puedes mostrar un mensaje de error al usuario o realizar otras acciones según tus necesidades.
            }
        },
    });

  return (
    <MDBContainer  className='my-5'>
      <MDBCard style={{padding: '183px'}}>

        <MDBRow className='g-0 d-flex align-items-center'>

            <MDBCol md='4'>
              <img src={hamburguesa} alt="" height={'400px'} width={'600px'}/>          
            </MDBCol>

          <MDBCol md='8'>

          <Form onSubmit={formik.handleSubmit} id="contenedorCamposFormulario">
                <Form.Group controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        name="username"  
                        type="text"
                        value={formik.values.username}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        isInvalid={Boolean(
                            formik.errors.username && formik.touched.username
                        )}
                    />
                    <Form.Control.Feedback type="invalid">
                        {formik.errors.username}
                    </Form.Control.Feedback>
                </Form.Group>
                    <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            name="password"
                            type="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            isInvalid={Boolean(
                                formik.errors.password && formik.touched.password
                            )} />
                        <Form.Control.Feedback type="invalid">
                            {formik.errors.password}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Modal.Footer className="mt-4" id="contenedorBotonRegistrarse">
                        <Button variant="primary" type="submit" disabled={!formik.isValid} id="botonRegistrarse" >
                            Iniciar sesion
                        </Button>
                    </Modal.Footer>
                </Form>
          </MDBCol>

        </MDBRow>

      </MDBCard>
    </MDBContainer>
  );
}

export default LoginForm;