import FormLogin from './Form'
import LayoutForms from '../Layout'
import { useContext } from 'react'
import {ConfirmModal} from "../../Modals/ConfirmModal"
import ModalContext from '../../../context/Modals/ModalContext'

const Login = () => {
  const{loginForm , changeStateLoginForm} = useContext(ModalContext)
  return (
    <>
      <LayoutForms form='login' modal={loginForm} setModal={changeStateLoginForm}>
        <FormLogin />
      </LayoutForms>

      <ConfirmModal
        modal={loginForm}
        setModal={changeStateLoginForm}
        text="Bienvenido de vuelta a Vianda, ¿ que vas a pedir hoy?"
        textButton="Antojarme"
        link="/"
      />
    </>
  )
}

export default Login
