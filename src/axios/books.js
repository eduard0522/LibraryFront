import Axios from "./Axios";

export const getAllBooks = async () => {
  try {
    const books = await Axios.get('/books.json')
    if(books.data){
      return books.data
    }
    return false
  } catch (e) {
    console.debug(e)
    return false
  }

}



