import { createLoanRequest } from "../../axios/books";

export const generateReservationHelp =  async (bookId, userId) => {

  const currentDate = new Date();
  const formatDate = currentDate.toISOString().split('T')[0]; 

  const requestData = {
    "ejemplar": {
      "id": bookId
    },
    "usuario": {
      "id": userId
    },
    "fecha_reserva": formatDate,
    "estado" : "completada"
  }

  try {
    const response = await createLoanRequest(requestData)

    if(!response || response.error){
      return  false
    }
    return response 
  } catch (error) {
    console.debug(error)
    return false
    
  }

}

