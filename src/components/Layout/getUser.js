export const getUserHelp = () => {
  const storedUser = localStorage.getItem('user')
  let user
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser).user
      user = {
        email: parsedUser.email || '',
        name: parsedUser.name || '',
        phone: parsedUser.phone || '',
        rol: parsedUser.rol || '',
        id : parsedUser.id || ""
      }
      return user
    }else{
      return null
    }
}

