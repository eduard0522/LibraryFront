import { deleteReservation } from "../../axios/books"

export const cancelReservation = async (reservationId) => {
  try {
    const response  = await deleteReservation(reservationId)
    if(response){
      return true
    }
    return false
  } catch (error) {
    console.debug(error)
    return false
  }
}