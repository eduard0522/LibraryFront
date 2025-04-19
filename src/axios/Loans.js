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
