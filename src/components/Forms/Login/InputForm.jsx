const InputForm = ({type , name, placeholder , value, handleChange }) => {
  return(
    <div 
    className="flex flex-col gap-2">
        <label htmlFor={name} className=" text-white"> {placeholder} </label>
         <input 
          type={type} 
          name={name}
          id={name}
          required 
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          className="p-1 rounded-md border-2 " />
    </div>
  )
} 


export default InputForm