import { useContext, useState } from 'react'
import InputForm from '../Forms/Login/InputForm'
import { createCopy } from '../Books/copysHelper'
import BooksContext from '../../context/Books/BooksContext'
import ModalContext from '../../context/Modals/ModalContext'
import { IoCloseCircle } from 'react-icons/io5'

const FormCreateCopy = () => {
  const { setCreateCopy, createCopyModal } = useContext(ModalContext)
  const { selectedBook , createCopyState} = useContext(BooksContext)
 
  console.log(selectedBook)
  const [formData, setFormData] = useState({
    code: '',
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
    if (!formData.code) {
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
      const response = await createCopy( selectedBook,formData.code)
        if (response) {
          alert("copia creada")
          const data  = {
            codigo_ejemplar: formData.code,
            estado: "disponible",
            id: "",
            recurso : selectedBook,
          }
          createCopyState(data)
          setCreateCopy()
          setFormData({
           code: "",
          })
        } else{
          setError('Creadenciales invalidos')
        }
    } catch (e) {
      console.debug(e)
      setError('Ocurrió un error al iniciar sesión')
    } finally{
      setLoading(false)
    }
  }
  if(!createCopyModal) return null
  return (
    <article className='py-8 px-12 rounded-2xl backdrop-blur-md fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-200 z-50 bg-slate-900 border-[1px] border-[#ffffff32]   flex flex-col gap-6'>
      <div className='absolute top-2 right-2 text-indigo-400 hover:text-indigo-700 cursor-pointer font-bold text-2xl '  onClick={() => {setCreateCopy()} }> <IoCloseCircle /> </div>
      <h1 className='flex text-5xl font-bold text-white'>
        LibreX
      </h1>
      <h2 className='text-xl font text-white'>
        {' '}
        Crear nuevo ejemplar{' '}
      </h2>
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col gap-4'>
          <InputForm
            type='text'
            name='code'
            value={formData.code}
            placeholder='Codigo del ejemplar'
            handleChange={handleChange}
          />
          <button
            className='w-full rounded-md bg-[#003465]  py-2 px-4 text-white font-medium hover:bg-blue-900'
            type='submit'
            disabled={loading}
            onClick={handleSubmit}
          >
            {' '}
            Crear ejemplar{' '}
          </button>

          {error && <p className='text-red-600 font-semibold'>{error}</p>}
        </div>
      </form>
    </article>
  )
}

export default FormCreateCopy
