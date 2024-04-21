import { createBrowserRouter } from "react-router-dom"
import Login from "../pages/auth/login/Login"
import Register from '../pages/auth/register/Register'
import ServiceTypes from "../pages/pages/ServiceTypes/ServiceTypes"
import AddServiceTypes from "../pages/pages/ServiceTypes/add"

export const router = createBrowserRouter([
  {
    path:"/login",
    element: <Login/>
  },
  {
    path:"/cadastro",
    element: <Register/>
  },
  {
    path: "/tipo-de-servicos",
    element: <ServiceTypes />
  },
  {
    path: "/tipo-de-servicos",
    element: <ServiceTypes />
  },
  {
    path: "/tipo-de-servicos/add",
    element: <AddServiceTypes />
  },
])