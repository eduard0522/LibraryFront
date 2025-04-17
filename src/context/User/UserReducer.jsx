import { UPDATE_USER } from "./types"


const UserReducer = (state, action) => {
  const {payload , type} = action

    switch (type) {
      case UPDATE_USER:
        return{
          ...state ,
          user: payload
        }
    
      default:
      return  state
    }
  
}

export default UserReducer