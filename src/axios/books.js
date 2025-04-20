import Axios from "./Axios"

export const getAllCopy = async () => {
  try {
    const copy = await Axios('/ejemplares/getAll')
    if(copy.data){
      return copy.data
    }
    return false
  } catch (error) {
    console.debug(error)
    return false
  }
} 

export const getAllBooks = async () => {
  try {
    const books = await Axios('/recursos/getAll')
    if(books.data){
      return books.data
    }
    return false
  } catch (e) {
    console.debug(e)
    return false
  }

}

export const getCopyByIdResource = async (id) => {
  try {
    const book = await Axios(`/ejemplares/getByResourceId/${id}`)
    if(book.data){
      return book.data
    }
    return false
  } catch (e) {
    console.debug(e)
    return false
  }
}


export const getReservation = async (id) => {
  try {
    const request = await Axios(`reservas/getByUserId/${id}`)
    
    if(request.data ){
      return request.data
    }

  } catch (error) {
    console.debug( error.status || error.code, "DATA") 
    return error
  }

}

export const createLoanRequest = async (loan) => {
  try {
    const response = await Axios.post(
      "reservas/create",
      loan,
      {
        headers: { 
           "Content-Type" : "application/json"
        } 
      }
    )
    if(response.data){
      return response.data
    }
  } catch (error) {
    console.debug(error)
    return error
  }
} 


export const deleteReservation = async (reservationId) => {
  try {
    const response = await Axios.delete(`reservas/delete/${reservationId}`)
    if(response){
      return true
    }
    return false
  } catch (error) {
    console.debug(error)
    return false
  }
}


