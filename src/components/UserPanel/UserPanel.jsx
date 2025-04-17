import { FaRegUserCircle } from "react-icons/fa";
import { IoCloseCircle } from "react-icons/io5";
import { BiSolidEdit } from "react-icons/bi";
import { useContext, useEffect } from "react";
import ModalContext from "../Context/Modals/ModalContext";
import {useNavigate } from "react-router";
import DataUpdateForm from "./DataUpdateForm";
import {ConfirmModal} from "../Modals/ConfirmModal"
import UserContext from "../Context/User/UserContext";


const UserPanel = () => {
  const { userPanel, changeStateUserPanel, updateUser, confirmUpdateUser , changeStateConfirmUpdateUser , changeStateUpdateUser } = useContext(ModalContext)
  const navigate = useNavigate()
  const { user , setUser} = useContext(UserContext)

  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser).user
      setUser({
        email: parsedUser.email || '',
        name: parsedUser.name || '',
        phone: parsedUser.phone || '',
        address: parsedUser.address || '',
        id : parsedUser.id || ""
      })
    }
  }, [])

  useEffect(() => {
    console.log("user:" , user)
  },[user])

  const handleClickButton = () => {
    if(user){
      localStorage.removeItem("user")
      setUser(null)
    }else{
      navigate("/login")
    }
    }
    
    const handleClickLink = () => {
      if(user){
        alert("Esta función aún no se ha implementado.")
      }else{
        navigate("/register")
      }
    }
    
  return (
    <>
    
    <aside className={` w-[500px] shadow-top-sides bg-white fixed z-50 right-4 bottom-0 rounded-t-xl transition-all duration-500 ease-in-out${  userPanel ? 'translate-x-0 opacity-100' : '-right-4 translate-x-full translate-y-full opacity-50' }`}>

    { updateUser ? (<DataUpdateForm />) : 
      ( <> 
        <div onClick={changeStateUserPanel}> 
          <IoCloseCircle className="text-3xl text-Primary-600 absolute top-2 right-2 hover:text-Primary-800 cursor-pointer" /> 
        </div>
        <article className="flex flex-col items-center justify-between p-8">
            <div className="flex justify-center w-full gap-4 border-b-2 border-gray-100 pb-4">
               <div className="relative cursor-pointe group cursor-pointer" onClick={changeStateUpdateUser}>
                  <FaRegUserCircle  className="text-6xl "/>
                  <BiSolidEdit  className="text-xl font-bold absolute -bottom-2 -right-2 z-10 group-hover:text-Primary-800 cursor-pointer"/>
               </div>
                <div>
                  <p className="text-2xl font-bold"> { user ? user.name : 'Usuario invitado'} </p>
                  <p className="text-lg"> {user ? user.email : 'invitado@email.com' }  </p>
                </div>
            </div>

            <div className="flex justify-between w-full py-8 border-b-2 border-gray-100 pb-4">
              <span className="text-xl font-medium"> Nombre </span>
              <span className=""> {user ? user.name : 'Usuario invitado'} </span>
            </div>
            <div className="flex justify-between w-full py-8 border-b-2 border-gray-100 pb-4">
              <span className="text-xl font-medium"> Correo </span>
              <span className=""> {user ? user.email : 'invitado@email.com'}</span>
            </div>
            <div className="flex justify-between w-full py-8 border-b-2 border-gray-100 pb-4">
              <span className="text-xl font-medium"> Télefono </span>
              <span className=""> {user ? user.phone : 'sin datos'}</span>
            </div>
            <div className="flex justify-between w-full py-8 border-b-2 border-gray-100 pb-4">
              <span className="text-xl font-medium"> Dirección </span>
              <span>
                {user?.address ? user.address : 'Sin dirección'}
              </span>
            </div>

            <div className="w-full flex items-center justify-center pt-8">
              <button className="text-xl bg-Primary-600 rounded-md text-white px-8 py-2 hover:bg-Primary-800" onClick={handleClickButton}>  { !user ? 'Iniciar sesión' : 'Cerrar Sesión'} </button>
            </div>
            <span className="text-Primary-700 underline font-semibold cursor-pointer hover:text-Primary-800" onClick={handleClickLink}> { !user ? 'Crear cuenta' : 'Eliminar cuenta'} </span>

        </article>
        
        </>)} 
    </aside>

    <ConfirmModal modal={confirmUpdateUser} setModal={changeStateConfirmUpdateUser} text="Usuario actualizado correctamente" textButton="Ok" />
    </>
  )
}

export default UserPanel