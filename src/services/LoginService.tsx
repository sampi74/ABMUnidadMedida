import { DtoLogin } from '../types/DtoLogin';

const BASE_URL = 'http://localhost:8080';

export const LoginService = {
    login: async (dtoLogin: DtoLogin): Promise<string> => {
        
        try{
            const response = await fetch(`${BASE_URL}/auth/login`,{
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dtoLogin),
            });

            if (!response.ok){
                throw new Error ('Inicio de sesion fallido');
            }

            if (response.ok){
                console.log("Inicio Sesion Correcto")
            }

            const {token} = await response.json();

            if(!token){
                throw new Error ('No se encontro el token');
            }

            localStorage.setItem('token', token);

            return token;

            }catch (error){
                console.error('Error al iniciar sesion');
                throw error;
            }
        },
    };