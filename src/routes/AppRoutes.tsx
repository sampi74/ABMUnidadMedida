import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage"
import { ABMUnidadMedida } from "../pages/ABMUnidadMedida"
import Login from "../pages/Login"
import PrivateRoute from "../components/PrivateRoute/PrivateRoute"



const AppRoutes: React.FC = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>}> </Route>
        <Route path='/abmUnidadMedida' element={<PrivateRoute element={<ABMUnidadMedida/>}/>}> </Route>
        <Route path='/login' element={<Login/>}></Route>

    </Routes>
  )
}

export default AppRoutes