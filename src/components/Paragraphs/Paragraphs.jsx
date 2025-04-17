import ImageText from '../../assets/read_book.webp'

export default function Parragraps () {

  return(
    <section>
      <article className='flex justify-between mt-12'>
          <div>
              <h2 className='text-3xl font-bold text-indigo-400 pb-8'>
                  ¿Y si te dijera que el papel no es la única puerta al conocimiento?
              </h2>

              <p className='text-lg px-8 py-2 text-gray-200'>
                  Vivimos en una era donde las historias no se almacenan solo en estantes polvorientos. Están en la nube, listas para ser descubiertas en segundos. Los <span className='text-indigo-400 font-bold'>libros digitales</span> no solo son el futuro: son el presente que muchos aún no han querido ver.
              </p>

              <p className='text-lg px-8 py-2 text-gray-200'>
                  Imagina llevar contigo una biblioteca entera sin cargar ni un solo gramo de papel. Imagina que
                   <span className='text-indigo-400 font-bold'> tu próxima lectura está a solo un clic </span> , sin esperas, sin pérdidas, sin límites.
              </p>
              <p className='text-lg px-8 py-2 text-gray-200'>
                  Aquí no se trata de reemplazar el pasado, sino de potenciar el acceso al conocimiento. Porque lo que importa no es cómo lees, sino que leas. Y nosotros te damos el poder de hacerlo <span > desde donde quieras, cuando quieras. </span>
              </p>
          </div>
          <div>
            <img src={ImageText} alt="Imagen de unos libros con un texto en el centro que dice READ"  className='rounded-2xl'/>
          </div>

      </article>
       <article className="mx-auto space-y-4">
          <h2 className="text-3xl font-semibold text-indigo-400">Conocimiento sin fronteras</h2>
          <p className="text-gray-200">
            Antes, leer era un privilegio. Hoy, es un derecho que se digitaliza. Un libro digital no se pierde, no se rompe, no se olvida en una banca del parque.
            Cada préstamo virtual es un acto de libertad. Porque no dependes de un espacio físico ni de un sistema anticuado. Tú decides qué leer, cuándo leerlo, y por cuánto tiempo.
          </p>
      </article>

      <article className=" mx-auto space-y-4">
        <h2 className="text-3xl font-semibold text-indigo-400">La rebelión del lector moderno</h2>
        <p className="text-gray-200">
          La revolución no fue televisada. Fue digitalizada. En un mundo donde todo se transforma, el lector que se adapta sobrevive.
          Esta plataforma es más que un sistema de gestión de préstamos. Es tu entrada a una red de conocimiento, una conspiración silenciosa contra la ignorancia.
          Porque cuando lees, te liberas. Y cuando lo haces sin límites físicos, te transformas.
        </p>
      </article>


    </section>
  )
}