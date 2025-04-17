import { Link } from "react-router"
import LogoImage from "../../assets/Logo.png"

const Logo = () => {
  return(
    <Link to="/"> 
      <div className="w-12 cursor-pointer">
        <img src={LogoImage} alt="Imagen de un libro con un lapiz en el centro" />
      </div>
      <h1 className="text-xl font-bold ">Libre<span className="text-indigo-600">X</span> </h1>
    </Link>
  )
}

export default Logo 