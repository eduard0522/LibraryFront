import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router'

import InputForm from "../Forms/Login/InputForm"
import ModalContext from '../Context/Modals/ModalContext'
import { updateUserRequest } from '../../axios/Auth'
import UserContext from '../Context/User/UserContext'
import { IoArrowBack } from 'react-icons/io5'

const DataUpdateForm = () => {
  const { changeStateUpdateUser ,changeStateConfirmUpdateUser } = useContext(ModalContext)
  const { setUser , user } = useContext(UserContext)

  const [formData, setFormData] = useState({
    email: '',
    name: '',
    phone: '',
    address : '',
  })

  const[userId , setUserId]  = useState('')
  
  useEffect(() => {
    if (user) {
      setFormData({
        email: user.email || '',
        name: user.name || '',
        phone: user.phone || '',
        address: user.address || ''
      })
      setUserId(user.id)
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
    formData.name !== user.name ||
    formData.email !== user.email ||
    formData.phone !== user.phone ||
    formData.address !== user.address
  )

  const validate = () => {
    if (
      !formData.email ||
      !formData.address ||
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
      const response = await updateUserRequest(formData, setError , setLoading , userId)
      if (response) {
        const updatedUser = {
          name: response.data.name || 'user',
          phone: response.data.phone || 'no phone',
          email: response.data.email || 'noemail@mail.com',
          address: response.data.address || '',
          orders: response.data.orders || [],
          id: response.data.idUsuario || ''
        }
      
        localStorage.setItem('user', JSON.stringify({ user: updatedUser }))
        setUser(updatedUser) 
        
        changeStateConfirmUpdateUser()
        changeStateUpdateUser()
      } else {
        setError('Ocurrió un error al actualizar los datos')
      }
      
    } catch (e) {
      setError('Ocurrió un error al actualizar los datos')
    } finally{
      setLoading(false)
    }
  }
  return (
    <article className='py-8 px-12 rounded-md backdrop-blur-sm bg-[#ffffff] shadow-md   flex flex-col gap-4 transition-all duration-500 ease-in-out'>
      <div className='text-Primary-600 text-3xl cursor-pointer hover:text-Primary-800 absolute top-4 left-4' onClick={changeStateUpdateUser}>  
         <IoArrowBack/> 
      </div>
      <h1 className='flex text-5xl font-bold items-center text-center w-full  justify-center'>
        <span className='bg-Primary-600 rounded-sm px-1 text-center flex items-center  justify-center  text-white'>
          {' '}
          V{' '}
        </span>{' '}
        ianda
      </h1>
      <h2 className='text-xl font-bold text-Primary-600'>
        {' '}
        Actualiza tus datos{' '}
      </h2>
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col gap-2'>
      
          <InputForm
            type='text'
            name='name'
            value={formData.name}
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
            name='phone'
            value={formData.phone}
            placeholder='Teléfono'
            handleChange={handleChange}
          />
          <InputForm
            type='text'
            name='address'
            value={formData.address}
            placeholder='Dirección'
            handleChange={handleChange}
          />
          <button
            className={`w-full rounded-md mt-8 py-2 px-4 text-white font-bold  ${!hasChanges ? 'bg-gray-400 cursor-pointer' : 'bg-Primary-600 hover:bg-Primary-800' }`}
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