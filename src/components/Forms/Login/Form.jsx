import { LoginRequest } from '../../../axios/Auth'
import { useContext, useState } from 'react'
import { Link } from 'react-router'
import InputForm from './InputForm'
import ModalContext from '../../../context/Modals/ModalContext'

const FormLogin = () => {
  const { changeStateLoginForm } = useContext(ModalContext)
  const [formData, setFormData] = useState({
    email: '',
    contrasena: '',
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
    if (!formData.email || !formData.contrasena) {
      return false
    }
    return true
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    if (!validate()) return
    setLoading(true)
    console.log(formData)
    try {
      const response = await LoginRequest(formData, setLoading, setError)
      if (response) {
        localStorage.setItem('user', JSON.stringify({
          user: {
            name : response.data.nombre || "user",
            phone : response.data.telefono || "no phone",
            email : response.data.email || "noemail@mail.com",
            rol : response.data.rol || "",
            id : response.data.id || ""
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
    <article className='py-8 px-12 rounded-2xl backdrop-blur-md transition-all duration-200 z-20 bg-[#5882c126] border-[1px] border-[#ffffff32]   flex flex-col gap-6'>
      <h1 className='flex text-5xl font-bold text-white'>
        LibreX
      </h1>
      <h2 className='text-xl font text-white'>
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
            name='contrasena'
            value={formData.contrasena}
            placeholder='Contraseña'
            handleChange={handleChange}
          />
          <p className='text-white font-semibold text-end hover:text-blue-950 cursor-pointer'>
            {' '}
            Olvidé la contraseña{' '}
          </p>
          <button
            className='w-full rounded-md bg-[#003465]  py-2 px-4 text-white font-medium hover:bg-blue-900'
            type='submit'
            disabled={loading}
            onClick={handleSubmit}
          >
            {' '}
            Iniciar Sesión{' '}
          </button>

          <h3 className='font-medium text-white'>
            {' '}
            ¿ No tienes cuenta ?{' '}
            <Link to="/register">  
              <span className='text-white font-semibold underline  hover:text-blue-950  cursor-pointer'>
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
