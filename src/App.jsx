
import './App.css'
import Layout from './components/Layout/Layout'
import ModalsState from '../src/context/Modals/ModalsState'
import AppRouter from './routes/types/PublicRoutes'
import BooksState from './context/Books/BooksState'
import UserContext from './context/User/UserContext'
import UserState from './context/User/UserState'

function App() {
  return (
    <>  
        <ModalsState>
          <UserState>
            <BooksState>
                <AppRouter >
                  <Layout />
                </AppRouter>
            </BooksState>
          </UserState>
     </ModalsState>
    </>
  )
}

export default App
