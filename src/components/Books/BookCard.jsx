import { useContext } from "react"
import BooksContext from "../../context/Books/BooksContext"
import ModalContext from "../../context/Modals/ModalContext"

export default function BookCard ({book, index}) {
  const { setSelectedBook , setBookAvality } = useContext(BooksContext)
  const { setDetailsBook } = useContext(ModalContext)

  const handleClick = () => {
    setSelectedBook(book)
    setDetailsBook()
    setBookAvality(book.id)
  }
  
return(
  <article key={index} className="bg-white p-4 rounded-xl shadow-2xl hover:cursor-pointer border-2 hover:scale-105 transition-all duration-300 hover:border-indigo-600 flex flex-col gap-1 relative group" onClick={handleClick}>
    <img src={ book.imagen ? book.imagen : `https://picsum.photos/seed/${book.id}/200/300`} alt={book.titulo} className="h-64 rounded-md mx-auto" />
    <h3 className="font-bold text-lg mt-2">{book.titulo}</h3>
    <p className="text-sm text-gray-800">{book.autor}</p>
    <p className="text-xs text-gray-600 mt-1">{book.genero || 'Sin genero'} - {book.fecha_publicacion}</p>
    <p className="text-xs text-gray-800 capitalize font-medium"> { book.tipo_recurso}</p>
    <p className="text-sm text-indigo-600 self-end absolute bottom-2 group-hover:text-green-600"> Ver mas detalles </p>
  </article>
)
}