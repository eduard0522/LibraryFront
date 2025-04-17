import { useContext } from "react"
import BooksContext from "../../context/Books/BooksContext"
import BookCard from "./BookCard"

const BooksCatalog = () => {
  const { books } = useContext(BooksContext)
  if(!books || books.length === 0 ){
    return <h2> No se han cargado los datos </h2>
  }
  return(
    <section className="mt-12">
      <h2 className="text-3xl text-indigo-400 font-semibold"> Algunos de nuestros ejemplares </h2>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-3 xl:grid-cols-5 p-4 my-12">
        {books.map((book, index) => (
          <BookCard  book={book} index={index}/>
          ))
        }
      </div>
    </section>
  )
}

export default BooksCatalog
