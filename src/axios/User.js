import Axios from "./Axios"

export const updateUserRequest = async (data , setError , setLoading, userId ) => {
  try {
    if(!userId){
      console.log(userId , "userId")
      return false
    }

    const response = await Axios.patch(`/usuarios/update/${userId}` , data ,
      {
        headers:{
          "Content-Type" : "application/json"
        },
      }
   )

   if(response){
    return response
   }
   return setError("Error al realizar la actualización de sus datos.")
  } catch (error) {
    if([409, 404 , 400].includes(error.status)){
      setError(error.response.data)
    }

    return false
  } finally {
    setLoading(false)
  }
}