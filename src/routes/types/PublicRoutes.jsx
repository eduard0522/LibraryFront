import {BrowserRouter , Routes, Route} from "react-router-dom"
import IndexPage from "../../pages/Index"
import RegisterPage from "../../pages/Register"
import LoginPage from "../../pages/Login"
import BookAvality from "../../components/Books/BookAvality"
import ReservationPage from "../../pages/Reservation"
import LoansPage from "../../pages/LoansPage"
import NotFoundPage from "../../pages/404"

import { AnimatePresence } from "framer-motion"
import LibraryPage from "../../pages/Library"
import LoansPageAdmin from "../../pages/admin/LoansPage"
import BooksPage from "../../pages/admin/BooksPage"

const AppRouter = () =>{ 
  return(

<BrowserRouter >
    <AnimatePresence mode="wait">
      <Routes>
          <Route  path="/"  element={ < IndexPage />}/>
          <Route path="/login" element={ <LoginPage />} />
          <Route path="/register" element={ <RegisterPage />} />
          <Route path="/disponibilidad" element={<BookAvality /> } />
          <Route  path="/reservas" element={<ReservationPage />}/>
          <Route  path="/prestamos" element={<LoansPage />}/>
          <Route path="/biblioteca" element={<LibraryPage />} />
          <Route path="/admin/prestamos" element={<LoansPageAdmin />} />
          <Route path="/admin/ejemplares" element={<BooksPage />} />
          <Route  path="*" element={<NotFoundPage />}/>
      </Routes>
    </AnimatePresence >
    </BrowserRouter>
  )
}

export default AppRouter