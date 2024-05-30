import './App.css'
import HoteIdPage from './pages/HoteIdPage'
import HomePage from './pages/HomePage'
import { Route, Routes } from 'react-router-dom'
import RegisterPagen from './pages/RegisterPagen'
import LoginPage from './pages/LoginPage'
import GenteralHeader from './components/shared/GenteralHeader'
import ReservationsPage from './pages/ReservationsPage'
import ProtectedRoutes from './pages/ProtectedRoutes'

function App() {


  return (
    <div>
      <GenteralHeader/>
      <Routes> 
        <Route path = '/' element = {<HomePage/>}/>
        <Route path = '/hotel/:id' element = {<HoteIdPage/>}/>
        <Route path = '/register' element = {<RegisterPagen/>}/>
        <Route path = '/login' element = {<LoginPage/>}/>
        <Route element = {<ProtectedRoutes/>}>
          <Route path = '/reservations' element = {<ReservationsPage/>}/>
        </Route>
      </Routes>

    </div>
  )
}

export default App
