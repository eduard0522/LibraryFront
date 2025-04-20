import { useEffect, useReducer } from "react";
import UserContext from "./UserContext";
import UserReducer from "./UserReducer";
import { getUserHelp } from "../../components/Layout/getUser";
import { UPDATE_USER, SET_IS_LOADING } from "./types";

const UserState = ({children}) => {

  const initialState  ={
    user : null,
    isLoading : true
  }
  const [ state , dispatch ]  = useReducer( UserReducer , initialState)

  const setUser = (user) => {
    if(!user) return false
    dispatch({
      type : UPDATE_USER,
      payload: user
    })
  }

  const setIsLoading = () => {
    dispatch({
      type: SET_IS_LOADING,
      payload : !state.isLoading
    })  
  }

  useEffect(() => {
    const storedUser = getUserHelp()
    if (storedUser) {
      setUser(storedUser);
    }
    setIsLoading(false);
  }, []);

 
  return(
    <UserContext.Provider value={{
      user: state.user,
      isLoading : state.isLoading,
      setUser
    }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserState