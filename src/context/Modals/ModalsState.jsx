import React,{ useReducer } from "react";

import ModalContext from "./ModalContext";

import { ModalReducer } from "./ModalsReducer";
import { 
  CHANGE_STATE_LOGIN_FORM, 
  CHANGE_STATE_SHOPPING_CART,
   CHANGE_STATE_REGISTRATION_FORM , 
   CHANGE_STATE_USER_PANEL, 
   CHANGE_STATE_UPDATE_USER,
  CHANGE_STATE_CONFIRM_UPDATE_USER,
  DETAILS_BOOK
} from "./types";

const ModalsState = (props) => {
  const initialState = {
    modalShoppingCart : false,
    registrationForm: false,
    loginForm : false,
    userPanel : true,
    updateUser : true,
    confirmUpdateUser : false,
    detailsBook  : false
  }

  const [state , dispatch ] = useReducer( ModalReducer , initialState )

  const changeStateShoppinCart = () => {
    dispatch({
      type:CHANGE_STATE_SHOPPING_CART,
      payload: !state.modalShoppingCart
    })
  }

  const changeStateRegistrationForm = () => {
    dispatch({
      type:CHANGE_STATE_REGISTRATION_FORM,
      payload: !state.registrationForm
    })
  }

  const changeStateLoginForm = () => {
    dispatch({
      type:CHANGE_STATE_LOGIN_FORM,
      payload: !state.loginForm
    })
  }

  const changeStateUserPanel = () => {
    dispatch({
      type:CHANGE_STATE_USER_PANEL,
      payload: !state.userPanel
    })
  }
  const changeStateUpdateUser = () => {
    dispatch({
      type:CHANGE_STATE_UPDATE_USER,
      payload: !state.updateUser
    })
  }

  const changeStateConfirmUpdateUser = () => {
    dispatch({
      type:CHANGE_STATE_CONFIRM_UPDATE_USER,
      payload: !state.confirmUpdateUser
    })
  }

  
  const setDetailsBook = () => {
    dispatch({
      type:DETAILS_BOOK,
      payload: !state.detailsBook
    })
  }

  return(
    <ModalContext.Provider value={{
      modalShoppingCart : state.modalShoppingCart,
      loginForm : state.loginForm,
      registrationForm : state.registrationForm,
      userPanel : state.userPanel,
      updateUser : state.updateUser,
      confirmUpdateUser : state.confirmUpdateUser,
      detailsBook : state.detailsBook,
      changeStateShoppinCart,
      changeStateRegistrationForm,
      changeStateLoginForm,
      changeStateUserPanel,
      changeStateUpdateUser,
      changeStateConfirmUpdateUser,
      setDetailsBook
    }}>
        {props.children}
    </ModalContext.Provider>
  )
}

export default ModalsState