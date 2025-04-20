import { UPDATE_USER, SET_IS_LOADING } from "./types"


const UserReducer = (state, action) => {
  const {payload , type} = action

    switch (type) {
      case UPDATE_USER:
        return{
          ...state ,
          user: payload
        }
      case SET_IS_LOADING:
        return{
          ...state,
          isLoading : payload
        }
    
      default:
      return  state
    }
  
}

export default UserReducer