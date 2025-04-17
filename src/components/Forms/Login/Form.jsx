import { LoginRequest } from '../../../axios/Auth'
import { useContext, useState } from 'react'
import { Link } from 'react-router'
import InputForm from './InputForm'
import ModalContext from '../../Context/Modals/ModalContext'

const FormLogin = () => {
  const { changeStateLoginForm } = useContext(ModalContext)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
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
    if (!formData.email || !formData.password) {
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
      const response = await LoginRequest(formData, setLoading, setError)
      if (response) {
        localStorage.setItem('user', JSON.stringify({
          user: {
            name : response.data.name || "user",
            phone : response.data.phone || "no phone",
            email : response.data.email || "noemail@mail.com",
            address : response.data.address || "",
            orders : response.data.orders || [],
            id : response.data.idUsuario || ""
          }
        }))
        changeStateLoginForm()
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
    <article className='py-8 px-12 rounded-md backdrop-blur-sm bg-[#ffffff] shadow-md   flex flex-col gap-6'>
      <h1 className='flex text-5xl font-bold'>
        <span className='bg-Primary-600 rounded-sm px-1 text-center flex items-center justify-center  text-white'>
          {' '}
          V{' '}
        </span>{' '}
        ianda
      </h1>
      <h2 className='text-xl font-bold text-Primary-600'>
        {' '}
        Bienvenido de vuelta{' '}
      </h2>
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col gap-4'>
          <InputForm
            type='email'
            name='email'
            value={formData.email}
            placeholder='Correo'
            handleChange={handleChange}
          />
          <InputForm
            type='password'
            name='password'
            value={formData.password}
            placeholder='Contraseña'
            handleChange={handleChange}
          />
          <p className='text-Primary-600 font-semibold text-end hover:text-Primary-800 cursor-pointer'>
            {' '}
            Olvidé la contraseña{' '}
          </p>
          <button
            className='w-full rounded-md bg-Primary-600 py-2 px-4 text-white font-bold hover:bg-Primary-800'
            type='submit'
            disabled={loading}
          >
            {' '}
            Iniciar Sesión{' '}
          </button>

          <h3 className='font-semibold'>
            {' '}
            ¿ No tienes cuenta ?{' '}
            <Link to="/register">  
              <span className='text-Primary-600 font-bold underline hover:text-Primary-800 cursor-pointer'>
                crear una ahora{' '}
              </span>
            </Link> 
              
          </h3>

          {error && <p className='text-red-600 font-semibold'>{error}</p>}
        </div>
      </form>
    </article>
  )
}

export default FormLogin
