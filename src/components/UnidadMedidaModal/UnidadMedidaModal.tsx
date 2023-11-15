import { UnidadMedida } from "../../types/UnidadMedida";

import { Button, Form, Modal } from "react-bootstrap";
import { ModalType } from "../../types/ModalType";

//Dependencias para validar los formularios
import * as Yup from "yup";
import { useFormik } from "formik";

import { UnidadMedidaService } from "../../services/UnidadMedidaService";

//Notificaciones al usuario
import { toast } from 'react-toastify';




//Recibe parametros como props para que se renderice, su titulo y según qué operación queremos realizar.
type UnidadMedidaModalProps = {
    show: boolean;
    onHide: () => void;
    title: string;
    modalType: ModalType;
    umed: UnidadMedida;
    refreshData: React.Dispatch<React.SetStateAction<boolean>>;
    
};





const UnidadMedidaModal = ({show, onHide, title, umed, modalType, refreshData}:UnidadMedidaModalProps) => {

    //CREATE-UPDATE función handleSaveUpdate 
    const handleSaveUpdate = async (um: UnidadMedida) => {
    try {
        const isNew = um.id === 0;
        if (isNew) {
            await UnidadMedidaService.createProduct(um);
        } else {
            await UnidadMedidaService.updateProduct(um.id, um);
        }
        toast.success(isNew ? "UnidadMedida Creada" : "UnidadMedida Actualizada", {
            position: "top-center",
        });
        onHide();
        refreshData(prevState => !prevState);
    } catch (error) {
        console.error(error);
        toast.error('Ha ocurrido un error');
    }
    
};


//Función handleDelete (DELETE)
const handleDelete = async () => {
    try {
        await UnidadMedidaService.deleteProduct(umed.id);
        toast.success("UnidadMedida borrada", {
            position: "top-center",
        });
        onHide();
        refreshData(prevState => !prevState);
    } catch (error) {
        console.error(error);
        toast.error("Ha ocurrido un error");
    }
    
}
        //YUP - Esquema de validación
    const validationSchema = () => {
        return Yup.object().shape({
        id: Yup.number().integer().min(0),
        denominacion: Yup.string().required('La denominacion es requerido'),
        abreviatura: Yup.string().required('La abreviatura es requerido'),
        });
    };
    

//Formik -  Utiliza el esquema de validación de YUP y obtiene un formulario dinámico que
// bloquea el formulario en caso de haber errores.
    const formik = useFormik({
        initialValues: umed,
        validationSchema: validationSchema(),
        validateOnChange: true,
        validateOnBlur: true,
        onSubmit: (obj: UnidadMedida) => handleSaveUpdate(obj),
     });



        return(
            <>

            {modalType === ModalType.DELETE ? (
                <>

                <Modal show={show} onHide={onHide} centered backdrop="static">

                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p> ¿Está seguro que desea eliminar la UnidadMedida  
                        <br /> <strong> {umed.denominacion} </strong> ?
                    </p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={onHide}>
                        Cancelar
                    </Button>

                    <Button variant="danger" onClick={handleDelete}>
                        Borrar
                    </Button>
                </Modal.Footer>

                </Modal>
                </>
            ) : (

                <>
                <Modal show={show} onHide={onHide} centered backdrop="static" className="modal-xl">
                    
                    <Modal.Header closeButton>
                        <Modal.Title>Nueva Unidad Medida</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>

                    
                    <Form onSubmit={formik.handleSubmit}>
                        
                    {"Denominacion"}
                        <Form.Group controlId="formDenominacion">
                            <Form.Control
                                name="denominacion"
                                type="text"
                                value={formik.values.denominacion || ''}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                isInvalid={Boolean(formik.errors.denominacion &&
                                formik.touched.denominacion)}
                            />
                            <Form.Control.Feedback type="invalid">
                                {formik.errors.denominacion}
                             </Form.Control.Feedback>
                        </Form.Group>

                    {"Abreviatura"}                
                        <Form.Group controlId="formAbreviatura">
                            <Form.Control
                                name="abreviatura"
                                type="text"
                                value={formik.values.abreviatura || ''}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                isInvalid={Boolean(formik.errors.abreviatura &&
                                formik.touched.abreviatura)}
                            />
                            <Form.Control.Feedback type="invalid">
                                {formik.errors.abreviatura}
                             </Form.Control.Feedback>
                        </Form.Group>

                            <Modal.Footer className="mt-4">
                                
                                <Button variant="secondary" onClick={onHide}>
                                    Cancelar
                                </Button>
                                <Button variant="primary" type="submit" disabled={!formik.isValid}>
                                    Guardar
                                </Button>

                            </Modal.Footer>
                            </Form>
                               

                    </Modal.Body>

                </Modal>

            </>
        )}
        </>
    )

}

export default UnidadMedidaModal;