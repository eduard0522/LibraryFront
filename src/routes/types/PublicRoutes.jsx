import {BrowserRouter , Routes, Route} from "react-router-dom"
import IndexPage from "../../pages/Index"
import RegisterPage from "../../pages/Register"
import LoginPage from "../../pages/Login"

const AppRouter = () =>{ 
  return(
    <BrowserRouter >
      <Routes>
          <Route  path="/"  element={ < IndexPage />}/>
          <Route path="/login" element={ <LoginPage />} />
          <Route path="/register" element={ <RegisterPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter