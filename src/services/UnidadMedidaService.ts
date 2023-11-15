import { string } from "yup";
import { UnidadMedida } from "../types/UnidadMedida";

const BASE_URL = 'http://localhost:8080/api/v1';

export const UnidadMedidaService = {

    

    
    getProducts: async (): Promise<UnidadMedida[]> => {
       
        const token = localStorage.getItem('token');

        const response = await fetch(`${BASE_URL}/unidadMedidas/getAll`,{
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });
        const data = await response.json();
        return data;
    },

    
    getProduct: async (id:number): Promise<UnidadMedida> => {

        const response = await fetch (`${BASE_URL}/unidadMedidas/${id}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            },
        });
        const data = await response.json();
        return data;
        
    },

    createProduct:async (unidadMedida:UnidadMedida):Promise<UnidadMedida> => {

        const response = await fetch(`${BASE_URL}/unidadMedidas`, {
            method: "POST",
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(unidadMedida)
        });

        const data = await response.json();
        return data;
        
    },

    updateProduct: async (id: number, unidadMedida: UnidadMedida): Promise<UnidadMedida> => {
        
        const response = await fetch(`${BASE_URL}/unidadMedidas/${id}`, {
            method: "PUT",
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Content-Type':'application/json'
            },
            body: JSON.stringify(unidadMedida)
        });

        const data = await response.json();
        return data;
    },

    

    deleteProduct: async (id:number): Promise<void> => {
        await fetch(`${BASE_URL}/unidadMedidas/${id}`, {
            method: "DELETE",
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Content-Type':'application/json'
            },
        });
    }
    

  
}
