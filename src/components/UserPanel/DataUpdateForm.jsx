import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router'

import InputForm from "../Forms/Login/InputForm"
import { updateUserRequest } from '../../axios/User.js'
import { IoArrowBack } from 'react-icons/io5'
import ModalContext from '../../context/Modals/ModalContext'
import UserContext from '../../context/User/UserContext'

const DataUpdateForm = () => {
  const { changeStateUpdateUser ,changeStateConfirmUpdateUser } = useContext(ModalContext)
  const { setUser , user } = useContext(UserContext)

  const [formData, setFormData] = useState({
    email: '',
    nombre: '',
    telefono: '',
  })
  
  useEffect(() => {
    if (user) {
      setFormData({
        email: user.email || '',
        nombre: user.name || '',
        telefono: user.phone || ''
      })

    }
  }, [user])


  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()

  const handleChange = (e) => {
    setError('')
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const hasChanges = user && (
    formData.nombre !== user.name ||
    formData.email !== user.email ||
    formData.telefono !== user.phone 
  )

  const validate = () => {
    if (
      !formData.email ||
      !formData.nombre ||
      !formData.telefono
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
      const response = await updateUserRequest(formData, setError , setLoading , user.id)
      if (response) {
        const updatedUser = {
          name: response.data.nombre ,
          phone: response.data.telefono ,
          email: response.data.email ,
          rol: response.data.rol ,
          id: response.data.id
        }
      
        localStorage.setItem('user', JSON.stringify({ user: updatedUser }))
        setUser(updatedUser) 
        
        changeStateConfirmUpdateUser()
        changeStateUpdateUser()
      } else {
        setError('Ocurrió un error al actualizar los datos')
      }
      
    } catch (e) {
      console.debug(e)
      setError('Ocurrió un error al actualizar los datos')
    } finally{
      setLoading(false)
    }
  }
  return (
    <article className='py-8 px-12 rounded-md backdrop-blur-sm bg-indigo-950 shadow-2xl flex flex-col gap-4 transition-all duration-500 ease-in-out'>
      <div className='text-zinc-200 text-3xl cursor-pointer hover:text-indigo-400 absolute top-4 left-4' onClick={changeStateUpdateUser}>  
         <IoArrowBack/> 
      </div>
      <h2 className='flex text-5xl font-bold text-zinc-100 items-center text-center w-full justify-center'
       style={{ textShadow:"2px 2px 4px rgba(26, 24, 24, 0.3), 4px 4px 8px rgba(0,0,0,0.3) " }}
      >
        Librex
      </h2>
      <h3 className='text-xl font-bold text-zinc-200'>
        {' '}
        Actualiza tus datos{' '}
      </h3>
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col gap-2'>
      
          <InputForm
            type='text'
            name='nombre'
            value={formData.nombre}
            placeholder='Nombre'
            handleChange={handleChange}
          />
          <InputForm
            type='email'
            name='email'
            value={formData.email}
            placeholder='Correo'
            handleChange={handleChange}
          />
          <InputForm
            type='text'
            name='telefono'
            value={formData.telefono}
            placeholder='Teléfono'
            handleChange={handleChange}
          />
          
          <button
            className={`w-full rounded-md mt-8 py-2 px-4 text-white font-bold  ${!hasChanges ? 'bg-gray-400 cursor-pointer' : 'bg-indigo-600 hover:bg-indigo-800' }`}
            type='submit'
            disabled={loading || !hasChanges }
          >
            {' '}
            Actualizar mis datos{' '}
          </button>

          {error && <p className='text-red-600 font-semibold'>{error}</p>}
        </div>
      </form>
    </article>
  )
}

export default DataUpdateForm