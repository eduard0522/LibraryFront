import { useContext, useEffect } from "react"
import UserContext from "../../context/User/UserContext"
import BooksContext from "../../context/Books/BooksContext"
import { returnLoad } from "./loanHerper"
import ModalContext from "../../context/Modals/ModalContext"

const Loans = () => {
  const {loans , setLoans,updateLoans  } = useContext(BooksContext)
  const { closeModal , setModalDate } = useContext( ModalContext )
  const {user , isLoading} = useContext(UserContext)

  useEffect(() => {
    if(!isLoading && user){
     setLoans(user.id)
  }
  },[isLoading])
  let count = 0

  const compareDates = (date, status) => {
    const currentDate = new Date();
    const maxDate = new Date(date);
  
    if (status === "devuelto") {
      return "Devuelto";
    }
  
    return currentDate >= maxDate ? "Retrasado" : "Activo";
  };
  
  const assignColor = (status) => {
    switch (status) {
      case "Activo":
        return "bg-green-600";
      case "Devuelto":
        return "bg-indigo-600";
      case "Retrasado":
        return "bg-red-500";
      default:
        return "bg-indigo-300";
    }
  };

  const handleClickReturn = async (loanId) =>{
    console.log("click" , loanId)
    try {
      const response = await returnLoad(loanId)
      if(response){
        const handleCickModal = () => {
          closeModal()
        }
        setModalDate({
          text: "Prestamo devuelto éxitosamente..",
          textButton:"Ver prestamos" ,
          handleClick: handleCickModal,
          isOpen:true,
          onClose: closeModal
        })
        updateLoans(loanId)
      }
    } catch (error) {
      alert("se genero un error" , error)
    }

  }

  if(!loans || !loans.length){
    return(
      <div className="flex flex-col items-center justify-center mt-24 gap-4">
        <h2 className="text-zinc-200 text-2xl mt-24"> Aún no tienes prestamos </h2>
        <button className="text-zinc-200  bg-indigo-600 rounded-md py-1 px-2"> Solicitar un prestamo </button>
      </div>
    )
  }
  return(
 <section className="mt-24">
  <h1 className="text-zinc-200 text-2xl my-12 font-bold">Mis préstamos</h1>
  {loans.length > 0 ? (
    <table className="mx-auto text-center rounded-xl overflow-hidden ">
      <thead className="bg-indigo-800 text-zinc-200">
        <tr>
          <th> # </th>
          <th className="px-4 py-2 pl-2"># Ejemplar</th>
          <th className="px-4 py-2">Título</th>
          <th className="px-4 py-2">Autor</th>
          <th className="px-4 py-2">Fecha prestamo</th>
          <th className="px-4 py-2">Fecha max devolución</th>
          <th className="px-4 py-2">Estado</th>
          <th className="px-4 py-2"> Recurso </th>
          <th className="px-4 py-2"> Acciones</th>
        </tr>
      </thead>
      <tbody className="text-zinc-200">
        {loans.map((res, index) => {
            count = count + 1 
            const estadoPrestamo = compareDates(res.fecha_devolucion, res.estado);
            const color = assignColor(estadoPrestamo);
          return ( 
            <tr key={index} className="border-b border-zinc-600 my-2">
            <td className="py-2 px-2"> { count} </td>
            <td className="py-2 px-2">{res.ejemplar.codigo_ejemplar}</td>
            <td className="py-2 px-2">{res.ejemplar.recurso.titulo}</td>
            <td className="py-2 px-2">{res.ejemplar.recurso.autor}</td>
            <td className="py-2 px-2">{res.fecha_prestamo}</td>
            <td className="py-2 px-2"> {res.fecha_devolucion} </td>
            <td className="py-2 px-2">
              <button className={`${color} px-4 py-1 rounded-md`}>  {estadoPrestamo} </button>
            </td>
            <td 
              className="py-2 px-2 underline text-indigo-300 cursor-pointer hover:text-indigo-600" onClick={ () => alert("Función en desarrollo")}
            > PDF
            </td>
            <td>
              <button className="py-1 px-2 bg-indigo-600 text-zinc-200 rounded-md hover:bg-indigo-800 cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed transition" 
                disabled = {estadoPrestamo === "Devuelto"}
                onClick = { () => handleClickReturn(res.id)}
              > Devolver </button>
            </td>
          </tr>
        )})}
      </tbody>
    </table>
  ) : (
    <h2 className="text-center text-zinc-400">Aún no tienes prestamos</h2>
  )}
</section>
  )
}

export default Loans