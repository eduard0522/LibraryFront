import { useContext } from "react"
import BooksContext from "../../context/Books/BooksContext"

const BookAvality = () => {
  const {bookAvality} = useContext(BooksContext)

  if(!bookAvality || bookAvality.length < 0 ){
    return(
      <h2> Aún no éxisten ejemplares disponibles </h2>
    )
  }
  console.log(bookAvality , "libro diponibilidad")
  return(
    <section>
      {
          bookAvality.map(copy => {
          return(
            <article className="w-[500px] bg-slate-950 rounded-2">
              <h2 className="text-zinc-200"> Ejemplares disponibles de { copy.recurso.titulo } </h2>
              <p className="text-zinc-200"> {copy.estado} </p>

            </article>
          )
        })
      }
      
    
    </section>
  )
}

export default BookAvality