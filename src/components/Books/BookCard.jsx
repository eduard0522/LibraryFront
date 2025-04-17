import { useContext } from "react"
import BooksContext from "../../context/Books/BooksContext"
import ModalContext from "../../context/Modals/ModalContext"

export default function BookCard ({book, index}) {
  const { setSelectedBook } = useContext(BooksContext)
  const { setDetailsBook } = useContext(ModalContext)

  const handleClick = () => {
    setSelectedBook(book)
    setDetailsBook()
  }
  
return(
  <article key={index} className="bg-white p-4 rounded-xl shadow-2xl hover:cursor-pointer border-2 hover:scale-105 transition-all duration-300 hover:border-indigo-600" onClick={handleClick}>
    <img src={book.image} alt={book.title} className="rounded-md mx-auto" />
    <h3 className="font-bold text-lg mt-2">{book.title}</h3>
    <p className="text-sm text-gray-800">{book.author}</p>
    <p className="text-xs text-gray-600 mt-1">{book.genre} - {book.year}</p>
    <p className={`text-xs ${ book.available ? 'text-indigo-600' : 'text-red-400' }  mt-2`}>{book.available ? 'Disponible' : 'No disponible'}</p>
</article>
)
}