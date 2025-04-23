import { useContext, useEffect } from "react"
import BooksContext from "../../context/Books/BooksContext"
import BookCard from "../Books/BookCard"
const AllBooks = () => {

  const {books , getBooks} = useContext(BooksContext)

    useEffect(() => {
      if(!books){
       return getBooks()
      }
      return
    }, [])
  
    return(
    <section className="mt-24 w-full" >
        <h1 className="text-2xl font-semibold text-zinc-200 "> Ejemplares </h1>
        <div className="w-full grid gap-8 grid-cols-1 md:grid-cols-3 xl:grid-cols-5 p-4 my-12">
        {
          books && books.length > 0 ?
          books.map((book , index) => {
            return (
                  <BookCard book={book} index={index} />
                )
              } )
              : <h2>  Cargando datos ..... </h2>
            }
          </div>
    </section>
  )
}


export default AllBooks