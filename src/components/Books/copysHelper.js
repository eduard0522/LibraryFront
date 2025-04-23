import { createCopyRequest } from "../../axios/books"

export const createCopy = async (book, copyCode) => {

  const data = {
    "recurso": {
      "id": book.id
    },
    "codigo_ejemplar": copyCode,
    "estado": "disponible"
  }

  try {
    const response = await createCopyRequest(data)
    if(!response) return false
    return response
  } catch (error) {
    console.debug(error)
    return false
  }
}