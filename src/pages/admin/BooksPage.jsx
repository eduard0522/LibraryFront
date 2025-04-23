import AllBooks from "../../components/admin/AllBooks"
import FormCreateCopy from "../../components/admin/FormCreateCopy"
import Layout from "../../components/Layout/Layout"

const BooksPage = () => {
  return(
    <Layout>
      <AllBooks />
      <FormCreateCopy />
    </Layout>
  )
}

export default BooksPage