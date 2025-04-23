import { useContext, useEffect } from "react"
import BooksContext from "../../context/Books/BooksContext"

const AllLoans = () => {
  const {getAllLoans , allLoans } = useContext(BooksContext)

  let count  = 0

  useEffect(() => {
    getAllLoans()
  },[])

  useEffect(() => {
    console.log(allLoans , "ALL LOANS REQUEST")
  },[allLoans])


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

  return(

    <section className="mt-24">
        <div> 
        { allLoans && allLoans.length > 0 ? (
    <section> 
       
      <div className="flex w-full justify-evenly my-8">
      <h1 className="text-2xl text-zinc-200"> Prestamos </h1>
        <button className="text-zinc-200 text-lg bg-indigo-600 py-1 px-2 rounded-md hover:bg-indigo-900"> Crear prestamo</button>
      </div>
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
        </tr>
      </thead>
      <tbody className="text-zinc-200">
        {allLoans.map((res, index) => {
            count = count + 1 
            const estadoPrestamo = compareDates(res.fecha_devolucion, res.estado);
            const color = assignColor(estadoPrestamo);
          return ( 
            <tr key={index} className="border-b border-zinc-600 my-2">
            <td className="py-2 px-2"> { count } </td>
            <td className="py-2 px-2">{res.ejemplar.codigo_ejemplar}</td>
            <td className="py-2 px-2">{res.ejemplar.recurso.titulo}</td>
            <td className="py-2 px-2">{res.ejemplar.recurso.autor}</td>
            <td className="py-2 px-2">{res.fecha_prestamo}</td>
            <td className="py-2 px-2"> {res.fecha_devolucion} </td>
            <td className="py-2 px-2">
              <button className={`${color} px-4 py-1 rounded-md`}>  {estadoPrestamo} </button>
            </td>
          </tr>
        )})}
      </tbody>
    </table>
    </section>
  ) : (
    <h2 className="text-center text-zinc-400">Aún no tienes prestamos</h2>
  )}
        </div>

    </section>
  )
}

export  default AllLoans