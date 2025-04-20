import BooksCatalog from "../components/Books/BooksCatalog"
import Hero from "../components/HeroIndex/Hero"
import Layout from "../components/Layout/Layout"
import Parragraps from "../components/Paragraphs/Paragraphs"


const Index  = () => {
  return(
    <Layout>
      <Hero/>
      <Parragraps />
      <BooksCatalog />
    </Layout>
  )
}

export default Index  