import Hero from "../HeroIndex/Hero"
import NavHeader from "../Nav/NavHeader"
import Footer from "../Footer/Footer"
import Paragraphs from "../Paragraphs/Paragraphs"
import { useContext, useEffect } from "react"

import BooksContext from "../../context/Books/BooksContext"
import BooksCatalog from "../Books/BooksCatalog"
import BookDetails from "../Books/BookDetails"
const Layout = () => {
  const { books , getBooks} = useContext(BooksContext)

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
      </main>
      <Footer />
      <BookDetails />
    </>
  )
}

export default Layout