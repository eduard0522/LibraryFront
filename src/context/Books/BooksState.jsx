import { useReducer } from "react"
import BooksContext from "./BooksContext"
import BooksReducer from "./BooksReducer"
import { GET_BOOKS, SET_SELECTED_BOOK, SET_BOOK_AVALITY , UPDATE_BOOK_AVALITY} from "./types"
import { getAllBooks, getCopyByIdResource } from "../../axios/books"

const BooksState = ({children}) => {
  const initialState = {
    books : [],
    selectedBook: null,
    bookAvality : [],
    loans : null
  }

  const [state , dispatch ] = useReducer( BooksReducer , initialState)

  const getBooks = async () => {
    const booksData = await getAllBooks()
    dispatch({
    type: GET_BOOKS,
    payload : booksData
    })
  }

  const setSelectedBook = (book) => {
    dispatch({
      type: SET_SELECTED_BOOK,
      payload: book
    })
  }

  const setBookAvality = async (id) => {
    const books = await getCopyByIdResource(id)
    dispatch({
      type: SET_BOOK_AVALITY,
      payload: books
    })
  }

  const updateBookAvality = (id) => {
    dispatch({
      type:UPDATE_BOOK_AVALITY,
      payload:id
    })
  }

  return (
    <BooksContext.Provider value={{
      books : state.books,
      selectedBook: state.selectedBook,
      bookAvality: state.bookAvality,
      getBooks,
      setSelectedBook,
      setBookAvality, 
      updateBookAvality
    }}>
        {children}
    </BooksContext.Provider>
  )
}

export default BooksState