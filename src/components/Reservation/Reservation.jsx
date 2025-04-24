import { useContext, useEffect } from "react"
import UserContext from "../../context/User/UserContext"
import BooksContext from "../../context/Books/BooksContext"
import { cancelReservation } from "./reservaionHelper"
import ModalContext from "../../context/Modals/ModalContext"


const Reservation = () => {
  const {reservation , setReservation, updateReservation } = useContext(BooksContext)
  const {user , isLoading} = useContext(UserContext)
  const { closeModal , setModalDate}  = useContext(ModalContext)
  let count = 0

  useEffect(() => {
    if(!isLoading && user){
      setReservation(user.id)
    }
  },[user, isLoading])


  const handleClickCancel = async (reservationId) => {
          try {
            const response = await cancelReservation(reservationId)
            if(response){
              const handleCickModal = () => {
                closeModal()
              }
              setModalDate({
                text: "Reserva cancelada éxitosamente..",
                textButton:"Ver reservas" ,
                handleClick: handleCickModal,
                isOpen:true,
                onClose: closeModal
              })
              updateReservation(reservationId)
            }
          } catch (error) {
            alert("se genero un error" , error)
          }
  }

  if(!reservation || reservation.length <= 0){
    return(
      <div className="flex flex-col items-center justify-center mt-24 gap-4">
      <h2 className="text-zinc-200 text-2xl mt-24"> Aún no tienes reservas </h2>
      <button className="text-zinc-200  bg-indigo-600 rounded-md py-1 px-2"> Realizar una reserva </button>
    </div>
    )
  }
  return(
    <section className="mt-24 w-[100%]">
      <h1 className="text-zinc-200 text-2xl my-12">
        Mis Reservas
      </h1>
      {
        reservation.length > 0 ?
              <table  className=" mx-auto text-center rounded-xl overflow-hidden">
                    <thead className="bg-indigo-800 text-zinc-200 px-4 py-2 rounded-md"> 
                      <tr>
                        <td className="py-2 px-4"> # </td>
                        <td className=" text-zinc-200 py-2 px-4"> # Ejemplar </td>
                        <td className=" text-zinc-200 py-2 "> Titulo </td>
                        <td className=" text-zinc-200 py-2 "> Autor </td>
                        <td className=" text-zinc-200 py-2 "> Fecha de reserva </td>
                        <td className=" text-zinc-200 py-2 "> Estado </td> 
                        <td className="text-zinc-200 py-2 px-4"> Acciones </td>
                      </tr>
                   </thead>
                   <tbody className="text-zinc-200 w-full"> 
            {
              reservation.map((res) => {
                count = count + 1
                return (
                    <tr className="my-2 w-full border-b border-zinc-600">
                      <td className="py-2 px-4"> { count } </td>
                      <td className="py-2 px-4"> { res.ejemplar.codigo_ejemplar} </td>
                      <td className="py-2 px-4"> {res.ejemplar.recurso.titulo} </td>
                      <td className="py-2 px-4"> {res.ejemplar.recurso.autor} </td>
                      <td className="py-2 px-4"> {res.fecha_reserva}</td>
                      <td className={"text-center py-2 px-4"}> 
                        <div className={`${ res.ejemplar.estado === "prestado" ? 'bg-red-600' : 'bg-green-600' } px-4 py-1 rounded-md`} > { res.ejemplar.estado} </div>   
                      </td>
                      <td className="px-4"> 
                        <button 
                          className="bg-indigo-800 text-zinc-200 py-1 rounded-md px-2 hover:bg-indigo-600 transition"
                          onClick={ () => handleClickCancel(res.id)}
                        >  Cancelar Reserva </button>  
                      </td>
                    </tr>
                )
              } )
            }      
            </tbody>

            </table>
        : <h2> Aún no has generado reservas </h2> 
        }
    </section>
  )
}
export default Reservation