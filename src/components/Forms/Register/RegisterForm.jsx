import { useContext, useState } from 'react'
import { Link } from 'react-router'

import InputForm from '../Login/InputForm'
import { RegisterRequest } from '../../../axios/Auth'
import ModalContext from '../../../context/Modals/ModalContext'
import { IoCloseCircle } from 'react-icons/io5'

const RegistrationForm = () => {
  const { changeStateRegistrationForm , registrationForm , setModalDate , closeModal } = useContext(ModalContext)
  const initialState = {
    id: '',
    nombre: '',
    email: '',
    telefono: '',
    rol : '',
    contrasena : ''
  }
  const [formData, setFormData] = useState(initialState)

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()

  const handleChange = (e) => {
    setError('')
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }
  const validate = () => {
    if (
      !formData.id ||
      !formData.nombre ||
      !formData.email ||
      !formData.telefono ||
      !formData.rol ||
      !formData.contrasena
    ) {
      setError('Todos los campos son requeridos')
      return false
    }

    if (formData.telefono.length < 10) {
      setError('El teléfono debe tener al menos 10 dígitos')
      return false
    }

    if (formData.contrasena.length < 8) {
      setError('La contraseña debe tener al menos 8 caracteres')
      return false
    }
    return true
  }
const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    if (!validate()) return
    setLoading(true)
    try {
      const response = await RegisterRequest(formData, setLoading, setError)
      if (response) {
        const handleCLickModal = () => {
          closeModal()
        }
        setModalDate({
          text: "Usuario creado éxitosamente..",
          textButton:"Muy bien" ,
          handleClick: handleCLickModal,
          isOpen:true,
          onClose: closeModal
        })
        setFormData(initialState)
        changeStateRegistrationForm()
      } else{
        setError('Datos invalidos')
      }
      
    } catch (e) {
      setError('Ocurrió un error al iniciar sesión')
    } finally{
      setLoading(false)
    }
  }

  if(!registrationForm) return null
  

  return (
    <article className='py-8 px-12 fixed top-1/2 left-1/2  min-w-96 -translate-x-1/2 -translate-y-1/2 rounded-md backdrop-blur-sm z-50 bg-slate-900 flex flex-col gap-4'>
        <div className='text-2xl text-indigo-400 absolute top-2 right-2 hover:text-indigo-600 cursor-pointer' onClick={()=> { changeStateRegistrationForm()}}>
           <IoCloseCircle />
        </div>
      <h2 className='text-2xl font-bold text-white'>
        {' '}
        Crear nuevo usuario{' '}
      </h2>
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col gap-2'>
          <InputForm
            type='email'
            name='email'
            value={formData.email}
            placeholder='Correo'
            handleChange={handleChange}
            required
          />
             <InputForm
            type='text'
            name='id'
            value={formData.id}
            placeholder='Codigo indentificador'
            handleChange={handleChange}
            required
          />
          <InputForm
            type='text'
            name='nombre'
            value={formData.nombre}
            placeholder='Nombre'
            handleChange={handleChange}
            required
          />
          <InputForm
            type='text'
            name='telefono'
            value={formData.telefono}
            minLength={10} 
            placeholder='Teléfono'
            handleChange={handleChange}
            required
          />
       <label htmlFor="rol" className='text-white'>Rol</label>
          <select
            name="rol"
            id="rol"
            required
            className='rounded-md py-1'
            value={formData.rol}
            onChange={handleChange} 
          
            >
            <option value="" disabled>Seleccione un rol</option>
            <option value="estudiante">Estudiante</option>
            <option value="administrativo">Administrativo</option>
            <option value="profesor">Profesor</option>
          </select>
          <InputForm
            type='password'
            name='contrasena'
            minLength={8} 
            value={formData.contrasena}
            placeholder='Contraseña'
            handleChange={handleChange}
            required
          />
          <button
            className='w-full rounded-md bg-indigo-800 py-2  mt-2 px-4 text-white font-bold hover:bg-blue-800 transition-colors'
            type='submit'
            disabled={loading}
          >
            {' '}
            Crear cuenta{' '}
          </button>

          {error && <p className='text-red-600 font-semibold'>{error}</p>}
        </div>

       
      </form>
    </article>
  )
}

export default RegistrationForm
