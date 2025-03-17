import { Route, Routes } from 'react-router-dom'
import './App.css'
import TopNav from './Component/TopNav'
import Layout from './Layout'
import Home from './Pages/Home'
import Registration from './Pages/Registration'
import Login from './Pages/Login'
function App() {
  

  return (
    <>
     <Routes>
       <Route path='/' element = {<Layout/>}>
        <Route index element = {<Home/>}/>
        <Route path='/home' element = {<Home/>}/>
        <Route path='/registar' element = {<Registration/>}/>
        <Route path='/login' element = {<Login/>}/>
       </Route>
     </Routes>
    </>
  )
}

export default App
