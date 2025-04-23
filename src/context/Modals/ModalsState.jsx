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
  DETAILS_BOOK,
  SET_CONFIRM_LOAN,
  SET_MODAL_DATE,
  CLOSE_MODAL,
  ADMIN_PANEL,
  CREATE_COPY
  
} from "./types";


const ModalsState = (props) => {
  const initialState = {
    modalShoppingCart : false,
    registrationForm: false,
    loginForm : false,
    userPanel : false,
    updateUser : false,
    confirmUpdateUser : false,
    detailsBook  : false,
    confirmLoan : false,
    createCopy: false,
    adminPanel:false,
    modalDate : {
      text: '',
      textButton: '',
      handleClick: () => {},
      isOpen: false,
      onClose: () => {},
    }
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

  const setModalDate = (date) => {
    dispatch({
      type : SET_MODAL_DATE,
      payload: date
    })
  }

  
  const setDetailsBook = () => {
    dispatch({
      type:DETAILS_BOOK,
      payload: !state.detailsBook
    })
  }

    
  const setConfirmLoan = () => {
    dispatch({
      type: SET_CONFIRM_LOAN,
      payload: !state.confirmLoan
    })
  }

  const closeModal = () => {
    dispatch({
      type : CLOSE_MODAL,
      payload : false
    })
  }

  const setAdminPanel = () => {
    dispatch({
      type : ADMIN_PANEL,
      payload : !state.adminPanel
    })
  }

  const setCreateCopy = () => {
    dispatch({
      type : CREATE_COPY,
      payload : !state.createCopy
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
      confirmLoan : state.confirmLoan,
      modalDate : state.modalDate,
      adminPanel: state.adminPanel,
      createCopyModal : state.createCopy,
      changeStateShoppinCart,
      changeStateRegistrationForm,
      changeStateLoginForm,
      changeStateUserPanel,
      changeStateUpdateUser,
      changeStateConfirmUpdateUser,
      setDetailsBook,
      setConfirmLoan,
      setModalDate,
      closeModal,
      setAdminPanel, 
      setCreateCopy
    }}>
        {props.children}
    </ModalContext.Provider>
  )
}

export default ModalsState