import Axios from "./Axios";

const getAllCategories  = async () => {
  const dataCategories = await Axios("/categories/all")
  return dataCategories.data
}

export {getAllCategories}