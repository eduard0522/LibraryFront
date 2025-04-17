
import './App.css'
import Layout from './components/Layout/Layout'
import ModalsState from '../src/context/Modals/ModalsState'
import AppRouter from './routes/types/PublicRoutes'
import BooksState from './context/Books/BooksState'

function App() {
  return (
    <>  
        <ModalsState>
           <BooksState>
        <AppRouter >
            <Layout />
        </AppRouter>
      </BooksState>
     </ModalsState>
    </>
  )
}

export default App
