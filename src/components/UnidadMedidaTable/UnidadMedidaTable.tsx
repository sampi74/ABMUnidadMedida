import { useEffect, useState } from "react"
import { UnidadMedida } from "../../types/UnidadMedida"
import { UnidadMedidaService } from "../../services/UnidadMedidaService";

import { Button, Table } from "react-bootstrap";
import Loader from "../Loader/Loader";


import { ModalType } from "../../types/ModalType";

import UnidadMedidaModal from "../UnidadMedidaModal/UnidadMedidaModal";
import { EditButton } from "../EditButton/EditButton";
import { DeleteButton } from "../DeleteButton/DeleteButton";


const UnidadMedidaTable = () => {

    //Variable que va a contener los datos recibidos por la API
    const [products, setProducts] = useState<UnidadMedida[]>([]);

    //Variable que muestra el componente Loader hasta que se reciban los datos de la API
    const [isLoading, setIsLoading] = useState(true);

    //Variable que va actualizar los datos de la tabla luego de cada operacion exitosa
    const [refreshData, setRefreshData] = useState(false);

    //Este hook se va a ejecutar cada vez que se renderice el componente o refreshData cambie de estado
    useEffect(() => {

        //Llamamos a la función para obtener todos los productos declarado en el service
        const fetchProducts = async () => {
            const products = await UnidadMedidaService.getProducts();
            setProducts(products);
            console.log(products);
            setIsLoading(false);
        };

        fetchProducts();
    }, [refreshData]);

    //Test, este log está modificado para que muestre los datos de una manera más legible
    console.log(JSON.stringify(products, null, 2));


    //Se inicializa un producto vacio cuando vayamos a crear uno nuevo, para evitar "undefined"
        const initializeNewProduct = (): UnidadMedida => {
        return {
            id: 0,
            denominacion: "",
            abreviatura: "",
            };
    };

    //Producto seleccionado que se va a pasar como prop al Modal
        const [product, setProduct] = useState<UnidadMedida>(initializeNewProduct);
    
    //Manejo de Modal
        const [showModal, setShowModal] = useState(false);
        const [modalType, setModalType] = useState<ModalType>(ModalType.NONE);
        const [title, setTitle] = useState("");

    //Logica de Modal
        const handleClick = (newTitle: string, prod: UnidadMedida, modal: ModalType) => {
        setTitle(newTitle);
        setModalType(modal)
        setProduct(prod);
        setShowModal(true);
    };


  return (
    <div style={{paddingTop: '143px'}} className="m-3">

        {/* Botón para que cuando el usuario haga click llame a la función que declaramos */}
            <Button style={{backgroundColor: 'orange', borderColor: 'white'}} onClick={() => handleClick("Nuevo Producto",
                initializeNewProduct(), ModalType.CREATE)}>
                Nueva Unidad Medida
            </Button>

    {isLoading ? <Loader/>: (
           
        <Table style={{marginTop: '20px'}}>
            <thead>
                <tr>
                    <th> # </th>
                    <th> DENOMINACION </th>
                    <th> ABREVIATURA </th>
                    <th> EDITAR</th>
                    <th> BORRAR </th>
                </tr>
            </thead>
            <tbody>
                {products.map(product => (
                    <tr key={product.id}>
                        
                        <td> {product.id} </td>
                        <td> {product.denominacion} </td>
                        <td> {product.abreviatura} </td>
                        <td> <EditButton onClick={() => handleClick("Editar producto", product, ModalType.UPDATE)}/> </td>
                        <td> <DeleteButton onClick={() => handleClick("Borrar producto", product, ModalType.DELETE)} /> </td>

                    </tr>
                ))}
            </tbody>

        </Table>

    )}

    {showModal && (
        <UnidadMedidaModal 
        show = {showModal}
        onHide={() => setShowModal(false)}
        title={title}
        modalType={modalType}
        umed={product}
        refreshData={setRefreshData}
        />
        
        
        
        
    )}

    
    </div>
  )
}

export default UnidadMedidaTable