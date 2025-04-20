import { 
  CHANGE_STATE_SHOPPING_CART, 
  CHANGE_STATE_LOGIN_FORM , 
  CHANGE_STATE_REGISTRATION_FORM, 
  CHANGE_STATE_USER_PANEL, 
  CHANGE_STATE_UPDATE_USER ,
  CHANGE_STATE_CONFIRM_UPDATE_USER,
  DETAILS_BOOK,
  SET_CONFIRM_LOAN,
  SET_MODAL_DATE,
  CLOSE_MODAL
} from "./types"


export const ModalReducer = ( state , action ) => {
  const {payload , type} = action
    switch(type){
      case CHANGE_STATE_SHOPPING_CART:
        return{
          ...state,
          modalShoppingCart: payload
        }
      case CHANGE_STATE_REGISTRATION_FORM:
        console.log("data" , payload)
        return{
          ...state,
          registrationForm: payload
        }
      case CHANGE_STATE_LOGIN_FORM:
        return{
          ...state,
          loginForm: payload
        }
      case CHANGE_STATE_USER_PANEL:
        return{
          ...state,
          userPanel: payload
        }
      case CHANGE_STATE_UPDATE_USER:
        return{
          ...state,
          updateUser: payload
      }
      case CHANGE_STATE_CONFIRM_UPDATE_USER:
        return{
          ...state,
          confirmUpdateUser: payload
      }
      case DETAILS_BOOK:
        return{
          ...state,
          detailsBook: payload
      }
      case SET_CONFIRM_LOAN:
        console.log("LOAN")
        return{
          ...state,
          confirmLoan: payload
      }
      case SET_MODAL_DATE:
        return{
          ...state,
          modalDate : payload
        }
      case CLOSE_MODAL:
        return{
          ...state,
          modalDate : { ...state, isOpen: payload}
        }
        
      default:
        return{
          state
      }
    }
  
} 