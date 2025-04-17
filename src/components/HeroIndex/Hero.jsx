import HeroImage from '../../assets/bg_home_1.png'

const Hero = () => {
  return(
    <section className='w-full mt-24 '>
      <div className='w-full flex items-center justify-center rounded-xl overflow-hidden relative'>
        <img src={HeroImage} alt="Foto de libros"  className='rounded-2xl'/>
        <div className='absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center gap-8'> 
          <h1  
           className='text-8xl font-extrabold text-white' 
           style={{ textShadow:"2px 2px 4px rgba(0,0,0,0.8), 4px 4px 8px rgba(0,0,0,0.6) " }} 
         > 
          LibreX
         </h1>

          <h2 className='text-2xl font-extrabold text-white text-center'
              style={{ textShadow:"2px 2px 4px rgba(0,0,0,0.8), 4px 4px 8px rgba(0,0,0,0.6) " }} 
          > Una experiencia de lectura moderna, ágil y a tu ritmo. </h2>

          <button className="bg-indigo-600 px-6 py-2 rounded-xl text-lg text-white font-semibold hover:bg-indigo-800 transition">
          Explorar libros
        </button>
        </div>
      </div>
    </section>
  )
}

export default Hero