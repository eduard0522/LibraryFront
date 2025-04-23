import Axios from "./Axios";

export const generateLoan = async (data)  =>{
  try {

    const response = await Axios.post(
      "/prestamos/create",
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("prestamo exitoso:", response.data);
    return response
  } catch (err) {
    console.log(err)
   return false
  
  } finally {
   console.log("final")
  
  }
};

export const updateCopy = async (id,data)  =>{
  try {
    const response = await Axios.patch(
      `/ejemplares/update/${id}`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("actualizado el ejemplar", response.data);
    return response

  } catch (err) {
    console.log(err)
    
   return false

  } finally {
   console.log("final")
  
  }
};


export const getLoans = async (id) => {
  try {
    const request = await Axios(`prestamos/getByUserId/${id}`)
    
    if(request.data ){
      return request.data
    }

  } catch (error) {
    console.debug( error.status || error.code, "DATA") 
    return error
  }
}

export const getAllLoansRequest = async () => {
  try {
    const request = await Axios('/prestamos/getAll')
    console.log(request , " get loans request")
    if(request.data ){
      return request.data
    }

  } catch (error) {
    console.debug( error.status || error.code, "DATA") 
    return error
  }
}



export const returnLoanRequest = async (loanId)  =>{
  try {

    const response = await Axios.patch(
      `/prestamos/update/${loanId}`,
      { "estado" : "devuelto"},
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("devolución éxitosa:", response.data);
    return response
  } catch (err) {
    console.log(err)
   return false
  
  } finally {
   console.log("final")
  
  }
};