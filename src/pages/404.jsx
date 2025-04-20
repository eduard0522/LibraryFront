import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useMemo } from "react";

const phrases = [
  "Oops... esta página está más perdida que tus llaves 📚🔍",
  "Aquí no hay libros... solo confusión 🤯",
  "Parece que esta página tomó un descanso eterno 💤",
  "Estás tan perdido como un marcador sin tapa 😅",
  "Ni Google sabe dónde estás ahora 🌌",
  "404 razones para volver al inicio 🏃‍♂️",
  "¡Cuidado! Zona prohibida para lectores 👀",
  "Esto no es una biblioteca, es un agujero negro 🔭"
];

export default function NotFound() {
  const randomPhrase = useMemo(() => {
    const index = Math.floor(Math.random() * phrases.length);
    return phrases[index];
  }, []);

  const particles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    size: Math.random() * 10 + 1,
    top: `${Math.random() * 90}%`,
    left: `${Math.random() * 90}%`,
    duration: Math.random() * 8 + 10,
  }));
  

  return (
    <>
      <Helmet>
        <title>404 - Página no encontrada 📚</title>
      </Helmet>

      <motion.div
        className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-gray-900 to-black flex flex-col items-center justify-center text-white"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
          {particles.map(p => (
            <motion.div
              key={p.id}
              className="bg-white rounded-full absolute"
              style={{
                width: `${p.size}px`,
                height: `${p.size}px`,
                top: p.top,
                left: p.left,
              }}
              animate={{
                y: [0, -10, 10, 0],
                x: [0, 10, -10, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>



        <h1 className="text-4xl md:text-6xl font-bold mb-6 z-10">404</h1>
        
        <p className="text-lg md:text-xl mb-8 text-center px-4 z-10 italic">
          {randomPhrase}
        </p>

        <div className="mb-6 z-10">
          <img
            src="https://www.svgrepo.com/show/401214/books.svg"
            alt="Libros flotando"
            className="w-40 h-40 mx-auto animate-bounce"
          />
        </div>

        <Link to="/">
          <button className="z-10 bg-indigo-600 hover:bg-indigo-800 cursor-pointer text-white font-semibold py-2 px-4 rounded-md transition">
            Volver al Inicio
          </button>
        </Link>
      </motion.div>
    </>
  );
}