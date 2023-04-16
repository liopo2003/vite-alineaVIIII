import { Outlet, RouterProvider, createHashRouter } from 'react-router-dom'
import ErrorPage from "../Page/error-page";
import Pagina2 from "../Page/Pagina2";
import Pagina1 from "../Page/Pagina1";
import Pagina3 from '../Page/Pagina3';
import "./Layout.css"
import Navbar from './Navbar';
import Sidebar from './SideBar';

export default function Layout() {

  return (
    <>
        
    <Navbar />
    <Sidebar />
    <div className='outlet'>
      <Outlet />
    </div>
  </>
  )

}
