import ModalContext from "../../context/Modals/ModalContext"
import UserContext from "../../context/User/UserContext"
import { useContext } from "react"
import { IoCloseCircle } from "react-icons/io5"
import { FaRegUserCircle } from "react-icons/fa"
import { BiSolidEdit } from "react-icons/bi"
import { useNavigate } from "react-router-dom"

const AdminPanel = () => {
  const {user } = useContext(UserContext)
  const { adminPanel , setAdminPanel    } = useContext(ModalContext)

  const navigate = useNavigate()

  const handleClickLink = () => {
    console.log("click")
  }


  const handleClickButton = () => {
    console.log("click")
  }
  return (
    <>
    <aside className={` w-[500px] shadow-top-sides bg-indigo-950 fixed z-50 right-4 bottom-0 rounded-t-xl transition-all duration-500 ease-in-out${  adminPanel ? 'translate-x-0 opacity-100' : '-right-4 translate-x-full translate-y-full opacity-50' }`}>
      <> 
        <div onClick={setAdminPanel}> 
          <IoCloseCircle className="text-3xl text-zinc-300 absolute top-2 right-2 hover:text-indigo-400 cursor-pointer" /> 
        </div>
        <article className="flex flex-col items-center justify-between p-8">
            <div className="flex justify-center w-full gap-4 border-b-2 border-gray-100 pb-4 text-zinc-300">
               <div className="relative cursor-pointe group cursor-pointer" onClick={setAdminPanel}>
                  <FaRegUserCircle  className="text-6xl "/>
                  <BiSolidEdit  className="text-xl font-bold absolute -bottom-2 -right-2 z-10 group-hover:text-indigo-400 cursor-pointer"/>
               </div>
                <div className="text-zinc-300">
                  <p className="text-2xl font-bold"> Hola Admin  </p>
                  <p className="text-lg"> {user ? user.email : 'invitado@email.com' }  </p>
                </div>
            </div>

            <div className="flex text-zinc-200 justify-between w-full py-8 border-b-2 border-zinc-300 pb-4">
              <span className="text-xl font-medium"> Prestamos  </span>
              <span className="bg-indigo-600 text-zinc-200 py-2 px-8 rounded-md cursor-pointer" onClick={ () => { navigate("/admin/prestamos")}}> ver </span>
            </div>
            <div className="flex text-zinc-200 justify-between w-full py-8 border-b-2 border-zinc-300 pb-4">
              <span className="text-xl font-medium"> Ejemplares  </span>
              <span className="bg-indigo-600 text-zinc-200 py-2 px-8 rounded-md cursor-pointer"> ver </span>
            </div>
            <div className="flex text-zinc-200 justify-between w-full py-8 border-b-2 border-zinc-300 pb-4">
              <span className="text-xl font-medium"> Reservas  </span>
              <span className="bg-indigo-600 text-zinc-200 py-2 px-8 rounded-md cursor-pointer"> ver </span>
            </div>
            <div className="flex text-zinc-200 justify-between w-full py-8 border-b-2 border-zinc-300 pb-4">
              <span className="text-xl font-medium"> Tu perfil </span>
              <span>
                {user?.rol ? user.rol : 'invitado'}
              </span>
            </div>

            <div className="w-full flex items-center justify-center pt-8">
              <button className="text-xl bg-indigo-500 rounded-md text-white px-8 py-2 hover:bg-indigo-800" onClick={handleClickButton}>  { !user ? 'Iniciar sesión' : 'Cerrar Sesión'} </button>
            </div>
            <span className="text-indigo-500 underline font-semibold cursor-pointer hover:text-zinc-200" onClick={handleClickLink}> { !user ? 'Crear cuenta' : 'Eliminar cuenta'} </span>

        </article>
        
        </>
    </aside>
    </>
  
  )
}

export  default AdminPanel