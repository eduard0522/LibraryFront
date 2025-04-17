import { useContext } from "react"
import ModalContext from "../../context/Modals/ModalContext"
import BooksContext from "../../context/Books/BooksContext"
import { FaInfoCircle } from "react-icons/fa"

export default function BookDetails () {

  const { detailsBook , setDetailsBook } = useContext(ModalContext)
  const {selectedBook , setSelectedBook } = useContext(BooksContext)

  const handleClick = () => {
   setDetailsBook()
   setSelectedBook(null)
  }

  const book = selectedBook

  if(!detailsBook || !book ) {
    return null
  }
  return(
    <dialog open className="fixed w-full h-full top-0 left-0 right-0 bottom-0 bg-[#00000060] z-50 flex items-center justify-center">
    
      <article className="w-[500px] bg-white p-4 rounded-xl shadow-2xl border-2 transition-all duration-300 relative">
      <div onClick={handleClick} className="text-2xl text-black absolute top-2 right-2"> <FaInfoCircle className="text-2xl text-black"/> </div>
        <img src={book.image} alt={book.title} className="rounded-md mx-auto" />
        <h3 className="font-bold text-lg mt-2">{book.title}</h3>
        <p> {book.description} </p>
        <p className="text-sm text-gray-800">{book.author}</p>
        <p> publicado por: { book.publisher}</p>
        <p className="text-xs text-gray-600 mt-1">{book.genre} - {book.year}</p>
        <p className={`text-xs ${ book.available ? 'text-indigo-600' : 'text-red-400' }  mt-2`}>{book.available ? 'Disponible' : 'No disponible'}</p>

        <button className="bg-indigo-600 px-6 py-2 rounded-xl text-lg text-white font-semibold hover:bg-indigo-800 transition">
          Solicitar prestamo
        </button>
      </article>
    </dialog>
  )
}