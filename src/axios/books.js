import Axios from "./Axios"

export const getAllCopy = async () => {
  try {
    const copy = await Axios('/ejemplares/getAll')
    if(copy.data){
      return copy.data
    }
    return false
  } catch (error) {
    console.debug(error)
    return false
  }
} 

export const getAllBooks = async () => {
  try {
    const books = await Axios('/recursos/getAll')
    if(books.data){
      return books.data
    }
    return false
  } catch (e) {
    console.debug(e)
    return false
  }

}

export const getCopyByIdResource = async (id) => {
  try {
    const book = await Axios(`/ejemplares/getByResourceId/${id}`)
    if(book.data){
      return book.data
    }
    return false
  } catch (e) {
    console.debug(e)
    return false
  }

}



