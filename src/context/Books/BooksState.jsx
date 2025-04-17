import { useReducer } from "react"
import BooksContext from "./BooksContext"
import BooksReducer from "./BooksReducer"
import { GET_BOOKS, SET_SELECTED_BOOK } from "./types"
import { getAllBooks } from "../../axios/books"

const BooksState = ({children}) => {
  const initialState = {
    books : [],
    selectedBook: null
  }
  const [state , dispatch ] = useReducer( BooksReducer , initialState)

  const getBooks = async () => {
    const booksData = await getAllBooks()
    console.log( "PIRNT FROM STATE " ,booksData)
    dispatch({
    type: GET_BOOKS,
    payload : booksData
    })
  }

  const setSelectedBook = (book) => {
    console.debug(book, "lobro")
    dispatch({
      type: SET_SELECTED_BOOK,
      payload: book
    })
  }

  return (
    <BooksContext.Provider value={{
      books : state.books,
      selectedBook: state.selectedBook,
      getBooks,
      setSelectedBook
    }}>
        {children}
    </BooksContext.Provider>
  )
}

export default BooksState