export const setUserLocalStored = (user) => {
  const setUser = 
    {
      name : user.nombre || "user",
      phone : user.telefono || "no phone",
      email : user.email || "noemail@mail.com",
      rol : user.rol || "",
      id : user.id || ""
   }
  if(user) {
    localStorage.setItem('user', JSON.stringify({
      user : setUser
    }))

    return setUser
  }

  return false
}

