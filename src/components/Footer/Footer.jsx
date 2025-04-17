import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

import Logo from "../Nav/Logo";

const Footer = () => {
  return (
    <footer className="bg-zinc-200 text-gray-700 py-4 border-t max-w-[1440px] rounded-t-2xl mx-auto mt-24" >
      <div className="container mx-auto px-4 flex flex-wrap justify-evenly gap-8 items-start">
        <div>
          <Logo/>
          <p className="mt-2 text-sm">Tu biblioteca, más cerca que nunca.</p>
          <div className="flex space-x-3 mt-4">
            <FaFacebookF className="text-indigo-600 hover:text-indigo-800 text-xl cursor-pointer" />
            <FaInstagram className="text-indigo-600 hover:text-indigo-800 text-xl cursor-pointer" />
            <FaTwitter className="text-indigo-600 hover:text-indigo-800 text-xl cursor-pointer" />
            <FaYoutube className="text-indigo-600 hover:text-indigo-800 text-xl cursor-pointer" />
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold"> Nosotros </h3>
          <ul className="mt-2 space-y-2 text-sm">
            <li><a href="#" className="hover:text-indigo-500 cursor-pointer ">Biblioteca </a></li>
            <li><a href="#" className="hover:text-indigo-500 cursor-pointer ">Blogs</a></li>
            <li><a href="#" className="hover:text-indigo-500 cursor-pointer">FAQ</a></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold"> Menu </h3>
          <ul className="mt-2 space-y-2 text-sm">
            <li><a href="#" className="hover:text-indigo-500 cursor-pointer">Inicio</a></li>
            <li><a href="#" className="hover:text-indigo-500  cursor-pointer">Prestamos</a></li>
            <li><a href="#" className="hover:text-indigo-500 cursor-pointer ">Devoluciones</a></li>
          </ul>
        </div>
        
 
        <div>
          <h3 className="text-lg font-semibold">Contactanos</h3>
          <ul className="mt-2 space-y-2 text-sm">
            <li className="text-indigo-600 underline cursor-pointer">librex@email.com</li>
            <li className="text-indigo-600 underline cursor-pointer">+57 320 569 72 43</li>
            <li><a href="#" className="hover:text-indigo-800 cursor-pointer">Social media</a></li>
          </ul>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-6 border-t pt-4">
        Copyright &copy; 2025  || Desarrollado por Eduard villamil
      </div>
    </footer>
  );
};

export default Footer;
