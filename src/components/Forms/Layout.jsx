import ImageHome from "../../assets/book_home2.webp"

const LayoutForms = ({ form, children, }) => {
  return (
    <section className='w-full flex  items-center justify-center bg-gradient-radial  from-[#0085FF]  to-[#003465] h-[100vh] '>
      <div
        className={`w-full flex-col-reverse md:w-4/6 p-2 md:p-16  flex  justify-center items-center bg-gradient-radial  from-[#0085FF]  to-[#003465] backdrop-blur-md gap-8 shadow-sm   md:rounded-2xl  ${form === "register" ? "md:flex-row-reverse" : "md:flex-row"}` }
      >

      {children}
        <div>
        <img src={ImageHome} alt="" className="max-w-lg" />
        <p className="mt-2 text-xl text-white text-center">Descubre lo que aún no sabes que necesitas.</p>
        </div>
      </div>
    </section>
  )
}

export default LayoutForms
