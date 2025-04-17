import FormLogin from './Form'
import LayoutForms from '../Layout'
import { useContext } from 'react'
import ModalContext from '../../Context/Modals/ModalContext'
import { ConfirmModal } from '../../Modals/ConfirmModal'

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
