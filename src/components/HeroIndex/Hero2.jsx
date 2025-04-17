import React from 'react';

export default function Home() {
  return (
    <div className="text-white bg-gray-900 min-h-screen p-6 space-y-20 mt-24">
      {/* Hero principal */}
      <section className="text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold">
          Tu biblioteca está despertando
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-300">
          No lo viste venir, pero ya ocurrió. Las bibliotecas dejaron de ser edificios silenciosos para convertirse en sistemas inteligentes. Y tú estás invitado a entrar.
        </p>
        <button className="bg-indigo-600 px-6 py-3 rounded-xl text-lg hover:bg-indigo-700 transition">
          Explorar libros
        </button>
      </section>

      {/* Sección: ¿Por qué libros digitales? */}
      <section className="max-w-4xl mx-auto space-y-4">
        <h2 className="text-3xl font-semibold text-indigo-400">¿Por qué elegir libros digitales?</h2>
        <p className="text-gray-300">
          ¿Y si te dijera que el papel no es la única puerta al conocimiento? Vivimos en una era donde las historias no se almacenan solo en estantes polvorientos. Están en la nube, listas para ser descubiertas en segundos.
          Imagina llevar contigo una biblioteca entera sin cargar ni un solo gramo de papel. Imagina que tu próxima lectura está a solo un clic, sin esperas, sin pérdidas, sin límites.
          Aquí no se trata de reemplazar el pasado, sino de potenciar el acceso al conocimiento. Porque lo que importa no es cómo lees, sino que leas.
        </p>
      </section>

      {/* Sección: Conocimiento sin fronteras */}
      <section className="max-w-4xl mx-auto space-y-4">
        <h2 className="text-3xl font-semibold text-indigo-400">Conocimiento sin fronteras</h2>
        <p className="text-gray-300">
          Antes, leer era un privilegio. Hoy, es un derecho que se digitaliza. Un libro digital no se pierde, no se rompe, no se olvida en una banca del parque.
          Cada préstamo virtual es un acto de libertad. Porque no dependes de un espacio físico ni de un sistema anticuado. Tú decides qué leer, cuándo leerlo, y por cuánto tiempo.
        </p>
      </section>

      {/* Sección: Rebelión del lector moderno */}
      <section className="max-w-4xl mx-auto space-y-4">
        <h2 className="text-3xl font-semibold text-indigo-400">La rebelión del lector moderno</h2>
        <p className="text-gray-300">
          La revolución no fue televisada. Fue digitalizada. En un mundo donde todo se transforma, el lector que se adapta sobrevive.
          Esta plataforma es más que un sistema de gestión de préstamos. Es tu entrada a una red de conocimiento, una conspiración silenciosa contra la ignorancia.
          Porque cuando lees, te liberas. Y cuando lo haces sin límites físicos, te transformas.
        </p>
      </section>
    </div>
  );
}