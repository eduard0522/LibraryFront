import { Link } from "react-router-dom"
import { useContext } from "react"
import { FiPhoneCall } from "react-icons/fi"

import ListItem from "./ListItem"
import Logo from "./Logo.jsx"
import ModalContext from "../../context/Modals/ModalContext.jsx"
import { FaUserCog } from "react-icons/fa";

const NavHeader = () => {
  const { changeStateUserPanel} = useContext(ModalContext)


  return(
    <nav className="fixed top-3 left-4 py-1  right-4 flex justify-between items-center shadow-2xl  border-[1px] border-[#b3afaf36]  rounded-full px-4 z-20 bg-zinc-200">
      <div className=" font-bold text-black cursor-pointer text-center">
        <Logo />
        </div>
        <ul className="flex w-2/5 justify-between items-center">
          <ListItem text="Inicio" link="/" />
          <ListItem text = "Biblioteca" link="/biblioteca"/>
         <ListItem text = "Prestamos" link="/prestamos" />
        </ul>

        <div className="flex gap-10">
          <div className="flex items-center justify-center " onClick={changeStateUserPanel}>
            <FaUserCog className="text-2xl hover:text-indigo-500 cursor-pointer"/>
          </div>

          <div className="bg-indigo-600 px-4 py-1 rounded-full flex items-center justify-center gap-2 cursor-pointer  hover:bg-indigo-800"> <     FiPhoneCall className="text-white text-center "/> 
             <Link to="https://web.whatsapp.com/">  <h2 className="font-semibold text-white cursor-pointer"> Contactar </h2>  </Link> 
          </div>
        </div>
    </nav>
  )
}


export default NavHeader