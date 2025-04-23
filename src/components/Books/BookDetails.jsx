import { useContext } from "react"
import ModalContext from "../../context/Modals/ModalContext"
import BooksContext from "../../context/Books/BooksContext"
import { IoMdCloseCircle } from "react-icons/io";
import UserContext from "../../context/User/UserContext";
import { generateLoanHelp } from "./generateLoan";
import { generateReservationHelp } from "./generateReservation";
import { useNavigate } from "react-router-dom";
export default function BookDetails () {

  const { detailsBook , setDetailsBook , setModalDate, closeModal, setCreateCopy } = useContext(ModalContext)
  const {selectedBook , setSelectedBook ,bookAvality, updateBookAvality } = useContext(BooksContext)
  const {user} = useContext (UserContext)

  console.log(bookAvality)
  const navigate = useNavigate()

  const handleClose = () => {
   setDetailsBook()
   setSelectedBook(null)
  }

  const handleClickAdmin = () => {
    setCreateCopy()
  }

  const handleButton = async () => {  
    try {
      if(bookAvality.length > 0 ) {
        const data = await generateLoanHelp(bookAvality , user)
        if(data.data){
          const handleCickModal = () => {
            setDetailsBook()
            navigate("/prestamos")
            closeModal()
          }
          setModalDate({
            text: "Prestamo generado éxitosamente, puedes ver tus prestamos activos.",
            textButton:"Ver prestamos" ,
            handleClick: handleCickModal,
            isOpen:true,
            onClose: closeModal
          })

          updateBookAvality(bookAvality[0].codigo_ejemplar)
        }
        else{
          alert("Ocurrio un error inesperado")
        }
       } else{
         const data = await generateReservationHelp(selectedBook.id , user.id)
        if(data){

          const handleCickModal = () => {
            setDetailsBook()
            navigate("/reservas")
            closeModal()
          }
      
          setModalDate({
            text: "Reserva generada éxitosamente, puedes ver tus reservas activas.",
            textButton:"Ver Reservas" ,
            handleClick: handleCickModal,
            isOpen:true,
            onClose: closeModal
          })
        }
       }
    } catch (error) {
      console.debug(error , "error")
    }
  }
  const book = selectedBook
  if(!detailsBook || !book ) {
    return null
  }

  return(
    <dialog open className="fixed w-full h-full top-0 left-0 right-0 bottom-0 bg-[#00000060] z-40 flex items-center justify-center">
    
      <article className="w-[700px] flex gap-8 bg-slate-900 backdrop-blur-md p-4 rounded-xl shadow-2xl transition-all duration-300 relative">
      <div onClick={handleClose} className="text-2xl absolute top-2 right-2 cursor-pointer"> <IoMdCloseCircle className="text-2xl text-indigo-400 hover:text-indigo-600"/> </div>
          <div className="w-2/5 text-zinc-200 text-xl">
            <img src={ book.imagen ? book.imagen : `https://picsum.photos/seed/${book.id}/200/300`} alt={book.titulo} className="rounded-md w-full  " />
          </div >

        <div className="w-3/5 flex flex-col justify-between">

        <h3 className="font-bold text-3xl  mt-2 text-indigo-300" 
         style={{ textShadow:"2px 2px 4px rgba(0,0,0,0.8), 4px 4px 8px rgba(0,0,0,0.6) " }} 
         >{book.titulo}</h3>
        <p className="text-gray-200 text-lg"> {book.descripcion} </p>
        <p className="text-md text-gray-200">{book.autor}</p>
        <p className="text-gray-100 text-xs" > Tipo de recurso: <span className="capitalize"> { book.tipo_recurso} </span> </p>
        <p className="text-xs text-gray-200 mt-1">{book.genero} - {book.fecha_publicacion}</p>
        <p className={`text-xs text-indigo-200 mt-2`}>Disponibles : { bookAvality.length <= 0 ? '0' : bookAvality.length} </p>
        
        {
            user.rol !== "administrativo" ? 
            <button className="bg-indigo-500 hover:bg-indigo-800  px-6 py-1   self-center rounded-xl text-lg text-white font-semibold transition"
                 onClick={handleButton}
              >
             { bookAvality.length <= 0 ? "Reservar libro" : "Solicitar prestamo"}
          
            </button>
             :
             <div className="flex gap-4 justify-center items-center">
                <button className="bg-indigo-500 hover:bg-indigo-800  px-4 py-1   self-center rounded-xl text-base text-white font-semibold transition" onClick={handleClickAdmin}>
                  Agregar ejemplar
                </button>  
                <button className="bg-indigo-500 hover:bg-indigo-800  px-4 py-1  self-center rounded-xl text-base text-white font-semibold transition">
                  Editar recurso
                </button>
            </div>
        }
        
         </div>
      </article>
    </dialog>
  )
}