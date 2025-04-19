import { generateLoan, updateCopy } from "../../axios/Loans"

export const generateLoanHelp =  async (bookAvality , user) => {

  const currentDate = new Date();

  const formatDate =currentDate.toISOString().split('T')[0]; 

  const limitDate = currentDate
  limitDate.setDate(currentDate.getDate() + 60)

  let bookId 

  if(bookAvality.length > 0) {
    bookId = bookAvality[0].id
  }
  const requestData = {
    
    "ejemplar" : {
      "id" : bookId
    },
    "usuario": {
      "id" : user.id
    },
    "fecha_prestamo": formatDate,
    "fecha_devolucion" : limitDate.toISOString().split('T')[0],
    "estado"  :"activo"
  } 


  const dateCopy = {
      "recurso": {
        "id": bookAvality[0].recurso.id
      },
      "codigo_ejemplar": bookAvality[0].codigo_ejemplar,
      "estado": "prestado"
    }

  try {
    const response = await generateLoan(requestData)
    updateCopy(bookAvality[0].id ,dateCopy)
    if(!response || response.error){
      return  false
    }
    return response 
  } catch (error) {
    console.debug(error)
  }

}