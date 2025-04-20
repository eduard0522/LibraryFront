import { GET_BOOKS, SET_SELECTED_BOOK, SET_BOOK_AVALITY  , UPDATE_BOOK_AVALITY, SET_RESERVATION , GET_LOANS, UPDATE_LOAN ,UPDATE_RESERVATION} from "./types";

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
        return{
          ...state,
          bookAvality: booksAvalities
        }
      }
      case UPDATE_BOOK_AVALITY: {
        let booksState = [...state.bookAvality]
        const booksAvalities = booksState.filter( book => book.codigo_ejemplar !== payload)
        return{
          ...state,
          bookAvality: booksAvalities
        }
      }
      case SET_RESERVATION:
        return{
          ...state,
          reservation:payload
        }
      case GET_LOANS:
        return{
          ...state,
          loans : payload
        }
        case UPDATE_LOAN: {
          const newState = state.loans.map(loan => {
            if (loan.id === payload) {
              return {
                ...loan,
                estado: "devuelto"
              };
            }
            return loan;
          });
        
          return {
            ...state,
            loans: newState
          };
        }
        case UPDATE_RESERVATION: {
          return {
            ...state,
            reservation: state.reservation.filter(reservation => reservation.id !== payload)
          };
        }        
        
    default:
      return state
}
}
export default BooksReducer