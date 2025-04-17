import { Link } from "react-router"


const ListItem = ({text, link}) => {
  return (
   <Link to={link}>
      <li className=" transition-all duration-200 text-lg  ease-in-out py-4 font-bold text-black cursor-pointer  hover:text-indigo-500 hover:underline" >{ text } </li>
   </Link>
  )
}

export default ListItem