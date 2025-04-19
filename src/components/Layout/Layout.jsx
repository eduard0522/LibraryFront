import Hero from "../HeroIndex/Hero"
import NavHeader from "../Nav/NavHeader"
import Footer from "../Footer/Footer"
import Paragraphs from "../Paragraphs/Paragraphs"
import { useContext, useEffect } from "react"
import Modal from "../Modals/Modal"
import BooksContext from "../../context/Books/BooksContext"
import BooksCatalog from "../Books/BooksCatalog"
import BookDetails from "../Books/BookDetails"
import UserPanel from "../UserPanel/UserPanel"
import ModalContext from "../../context/Modals/ModalContext"

const Layout = () => {
  const { books , getBooks} = useContext(BooksContext)
  const {confirmLoan , setConfirmLoan} =useContext(ModalContext)
  useEffect(() => {
    getBooks()
  },[])

  useEffect(() => {
    console.debug(books)
  },[books])
  
  return(
    <>
      <NavHeader />
      <main className="max-w-[1280px] m-auto">
          <Hero />
          <Paragraphs/>
          <BooksCatalog />
          <UserPanel/>
      </main>
      <Footer />
      <BookDetails />
      <Modal text="Prestamo generado éxitosamente, puedes tus prestamos activos" textButton="Ver prestamos" handleClick={setConfirmLoan} isOpen={confirmLoan} />
    </>
  )
}

export default Layout