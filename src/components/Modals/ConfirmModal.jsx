import { IoCloseCircle } from "react-icons/io5"
import { useNavigate } from "react-router"

export const ConfirmModal = ({text,modal,setModal,link, textButton}) => {
  const navigate = useNavigate()
  const handleClick = () => {
    setModal()
    if(!link ) return
    navigate(link)
  }

  if(!modal) return null
  return(
    <dialog className=" z-50 w-full h-full fixed top-0 bottom-0 right-0 bg-re left-0 flex  items-center justify-center rounded-md bg-[#0e0e0e3c] backdrop-blur-sm shadow-2xl">
      
        <div className="bg-white relative px-12 py-8 shadow-2xl flex flex-col gap-8 justify-between items-center rounded-xl cursor-pointer ">
            {/*
           <div className="absolute top-2 right-2" onClick={ setModal }>
            <IoCloseCircle className="text-3xl text-Primary-600 hover:text-Primary-800"/>
           </div>
            */}
          <p className="font-semibold text-wrap max-w-56 text-center"> { text} </p>
          <button className="text-base bg-Primary-600 hover:bg-Primary-800 rounded-md px-4 py-2 text-white font-semibold" onClick={handleClick}> {textButton} </button>
        </div>
    </dialog>
  )
}