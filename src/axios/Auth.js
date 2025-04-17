import Axios from "./Axios";

export const LoginRequest = async (data , setLoading , setError)  =>{
  try {

    const response = await Axios.post(
      "/usuarios/login",
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("Login exitoso:", response.data);
    localStorage.setItem("user", JSON.stringify(response.data));
    return response

  } catch (err) {
    console.log(err)
      setError("Error al iniciar sesión")
   return false
  
  } finally {
    setLoading(false);
  
  }
};

  export const RegisterRequest = async (data, setLoading ,  setError) => {
    try {
      const response = await Axios.post("/usuarios/create",
        data,
        {
          headers:{
            "Content-Type" : "application/json",
          },
        }
      )
      if(response){
        return response
      }

      return setError("Error al inicar la Sesión")
    } catch (error) {
      setError("Error al iniciar Sesión, intente de nuevo mas tarde")
      setLoading(false)
      if([409, 404 , 400].includes(error.status)){
        setError(error.response.data)
      }
      return false
    }

    finally{
      setLoading(false)
    }
  } 

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
