import { useContext, useState } from 'react'
import { Link } from 'react-router'

import InputForm from '../Login/InputForm'
import { RegisterRequest } from '../../../axios/Auth'
import ModalContext from '../../../context/Modals/ModalContext'


const RegistrationForm = () => {
  const { changeStateRegistrationForm } = useContext(ModalContext)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    phone: '',
  })

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
      !formData.email ||
      !formData.password ||
      !formData.name ||
      !formData.phone
    ) {
      setError('Todos los campos son requeridos')
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
        localStorage.setItem('user', JSON.stringify({
          user: {
            name : response.data.name || "user",
            phone : response.data.phone || "no phone",
            email : response.data.email || "noemail@mail.com",
            adrress : response.data.address || "",
            orders : response.data.orders || []
          }
        }) )
        changeStateRegistrationForm()
      } else{
        setError('Creadenciales invalidos')
      }
      
    } catch (e) {
      setError('Ocurrió un error al iniciar sesión')
    } finally{
      setLoading(false)
    }
  }
  return (
    <article className='py-8 px-12 rounded-md backdrop-blur-sm bg-[#5882c126] border-[1px] border-[#ffffff32] flex flex-col gap-4'>
       <h1 className='flex text-5xl font-bold text-white'>
        LibreX
      </h1>

      <h2 className='text-xl font-bold text-white'>
        {' '}
        Bienvenido a Librex{' '}
      </h2>
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col gap-2'>
          <InputForm
            type='email'
            name='email'
            value={formData.email}
            placeholder='Correo'
            handleChange={handleChange}
          />
          <InputForm
            type='text'
            name='name'
            value={formData.name}
            placeholder='Nombre'
            handleChange={handleChange}
          />
          <InputForm
            type='text'
            name='phone'
            value={formData.phone}
            placeholder='Teléfono'
            handleChange={handleChange}
          />
          <InputForm
            type='password'
            name='password'
            value={formData.password}
            placeholder='Contraseña'
            handleChange={handleChange}
          />
          <button
            className='w-full rounded-md bg-blue-900 py-2 px-4 text-white font-bold hover:bg-blue-950'
            type='submit'
            disabled={loading}
          >
            {' '}
            Crear cuenta{' '}
          </button>

          <h3 className='font-semibold text-white'>
            {' '}
            ¿ Ya tienes una cuenta ?{' '}
            <Link to="/login">
              <span className='text-white font-bold underline hover:text-blue-950 cursor-pointer'>
                {' '}
                Inicia Sesión{' '}
              </span>
            </Link>
          </h3>

          {error && <p className='text-red-600 font-semibold'>{error}</p>}
        </div>

       
      </form>
    </article>
  )
}

export default RegistrationForm
