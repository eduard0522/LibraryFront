import { useContext } from 'react'
import LayoutForms from '../Layout'
import RegistrationForm from './RegisterForm'
import ModalContext from '../../../context/Modals/ModalContext'
import ConfirmModal from "../../../context/Modals/ModalContext"

const Register = () => {
  const { registrationForm, changeStateRegistrationForm } =
    useContext(ModalContext)
  return (
    <>    
      <LayoutForms
        form='register'
      >
        <RegistrationForm />
      </LayoutForms>

      <ConfirmModal 
          modal={registrationForm} 
          setModal={changeStateRegistrationForm} 
          text="Felicidades, usuario registrado con éxito."
          textButton="Pedir"
          link="/"
        />
      </>
  )
}

export default Register
