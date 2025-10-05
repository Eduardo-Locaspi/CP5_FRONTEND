import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter ,RouterProvider } from 'react-router-dom'
import PaginaInicial from './pages/PaginaInicial/index.tsx'
import Formulario from './pages/Formulario/index.tsx'
import ListaFuncionarios from './pages/ListaFuncionarios/index.tsx'


const router = createBrowserRouter([{
  path:'/',
  element:<App/>,
  children:[
    {path:'/',element:<PaginaInicial/>},
    {path:'/inserirfuncionario',element:<Formulario/>},
    {path:'/listafuncionario', element:<ListaFuncionarios/>}
  ]
}])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
