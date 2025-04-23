import NavHeader from "../Nav/NavHeader"
import Footer from "../Footer/Footer"
import { useContext, useEffect } from "react"
import Modal from "../Modals/Modal"
import BooksContext from "../../context/Books/BooksContext"
import BookDetails from "../Books/BookDetails"
import UserPanel from "../UserPanel/UserPanel"
import ModalContext from "../../context/Modals/ModalContext"
import { useNavigate } from "react-router-dom"
import UserContext from "../../context/User/UserContext"
import AdminPanel from "../admin/AdminPanel"

const Layout = ({children}) => {
  const {user} =useContext(UserContext)
  const { getBooks} = useContext(BooksContext)
  const { modalDate  } =useContext(ModalContext)
  const navigate = useNavigate()
  
  const { isLoading } = useContext(UserContext)
  useEffect(() => {
    getBooks()
  },[])

  if(isLoading){
    return( <h2> Cargando datos..... </h2>)
  }
  if(!user || !user.rol){
    navigate("/login")
  }
  return(
    <div className="flex flex-col min-h-[100vh] w-[100%] justify-between"> 
      <NavHeader />
      <main className="w-full max-w-[1280px]  m-auto min-h-[60vh]">
          <UserPanel/>
          <AdminPanel />
          {children}
      </main>
      <Footer />
      <BookDetails />
       <Modal date={modalDate}/> 
    </div>
  )
}

export default Layout