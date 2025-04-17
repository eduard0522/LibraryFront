import { useReducer } from "react";
import UserContext from "./UserContext";
import UserReducer from "./UserReducer";

import { UPDATE_USER } from "./types";

const UserState = ({children}) => {
  const initialState  ={
    user : null
  }

  const [ state , dispatch ]  = useReducer( UserReducer , initialState)

  const setUser = (user) => {
    if(!user) return false
    dispatch({
      type : UPDATE_USER,
      payload: user
    })
  }

  return(
    <UserContext.Provider value={{
      user: state.user,
      setUser
    }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserState