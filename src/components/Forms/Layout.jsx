
const LayoutForms = ({ form, children, }) => {
  return (
    <section className='w-full flex items-center justify-center bg-[#ffffff] h-[100vh]'>
      <div
        className={`w-full flex-col-reverse  md:w-4/6 p-2 md:p-16  flex  justify-center items-center bg-Primary-600 backdrop-blur-sm gap-8 shadow-sm   md:rounded-2xl ${
          form == 'register' ? 'md:flex-row-reverse' : 'md:flex-row'
        } `}
      >
        {children}

      </div>
    </section>
  )
}

export default LayoutForms
