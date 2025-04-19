import { GET_BOOKS, SET_SELECTED_BOOK, SET_BOOK_AVALITY  , UPDATE_BOOK_AVALITY} from "./types";

const BooksReducer = (state, action) => {
  const { payload , type } = action
  switch(type){
    case GET_BOOKS:
    return{
      ...state,
      books : payload
    }
    case SET_SELECTED_BOOK:
      return{
        ...state,
        selectedBook:payload

      }

      case SET_BOOK_AVALITY: {
        let newBooks = payload || [];
        const booksAvalities = newBooks.filter( book => book.estado === "disponible")
        console.log(booksAvalities)
        return{
          ...state,
          bookAvality: booksAvalities
        }
      }
      case UPDATE_BOOK_AVALITY: {
        let booksState = [...state.bookAvality]
        const booksAvalities = booksState.filter( book => book.codigo_ejemplar !== payload)
        console.log(booksAvalities)
        return{
          ...state,
          bookAvality: booksAvalities
        }
      }
      
    default:
      return state
}
}
export default BooksReducer