import { useReducer } from "react"
import BooksContext from "./BooksContext"
import BooksReducer from "./BooksReducer"
import { GET_BOOKS, SET_SELECTED_BOOK, SET_BOOK_AVALITY , UPDATE_BOOK_AVALITY , SET_RESERVATION , GET_LOANS , UPDATE_LOAN , UPDATE_RESERVATION , GET_ALL_LOANS , CREATE_COPY} from "./types"
import { getAllBooks, getCopyByIdResource, getReservation } from "../../axios/books"
import { getAllLoansRequest, getLoans } from "../../axios/Loans"


const BooksState = ({children}) => {
  const initialState = {
    books : [],
    allLoans : [],
    selectedBook: null,
    bookAvality : [],
    loans : null,
    reservation : [],
  }

  const [state , dispatch ] = useReducer( BooksReducer , initialState)

  const getBooks = async () => {
    const booksData = await getAllBooks()
    dispatch({
    type: GET_BOOKS,
    payload : booksData
    })
  }

  const getAllLoans = async () => {
    const getLoans = await getAllLoansRequest()
    dispatch({
      type : GET_ALL_LOANS,
      payload : getLoans
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

  const setReservation = async (id) => {
    const books = await getReservation(id)
    dispatch({
      type : SET_RESERVATION,
      payload : books
    })
  }

  const updateBookAvality = (id) => {
    dispatch({
      type:UPDATE_BOOK_AVALITY,
      payload:id
    })
  }

  const setLoans = async (id) => {
    const loans = await getLoans(id)
    dispatch({
      type: GET_LOANS,
      payload:loans
    })
  } 


  const updateLoans = (loanId) => {
    dispatch({
      type: UPDATE_LOAN,
      payload: loanId
    })
  }

  const updateReservation = (reservationId) => {
    dispatch({
      type: UPDATE_RESERVATION,
      payload: reservationId
    })
  }

  const createCopyState = (copy) => {
    dispatch({
      type: CREATE_COPY,
      payload: copy
    })
  } 


  return (
    <BooksContext.Provider value={{
      books : state.books,
      selectedBook: state.selectedBook,
      bookAvality: state.bookAvality,
      reservation: state.reservation,
      loans : state.loans,
      allLoans : state.allLoans,
      getBooks,
      setSelectedBook,
      setBookAvality, 
      updateBookAvality,
      setReservation,
      setLoans,
      updateLoans, 
      updateReservation,
      getAllLoans,
      createCopyState

    }}>
        {children}
    </BooksContext.Provider>
  )
}

export default BooksState