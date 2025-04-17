import { GET_BOOKS, SET_SELECTED_BOOK } from "./types";

const BooksReducer = (state, action) => {
  const { payload , type } = action
  switch(type){
    case GET_BOOKS:
    return{
      ...state,
      books : payload
    }
    case SET_SELECTED_BOOK:
      console.log(payload , "REDUCER")
      return{
        ...state,
        selectedBook:payload

      }
    default:
      return state

  }

}

export default BooksReducer