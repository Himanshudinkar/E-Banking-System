import { Route, Routes } from 'react-router-dom'
import './App.css'
import TopNav from './Component/TopNav'
import Layout from './Layout'
import Home from './Pages/Home'
import Registration from './Pages/Registration'
import Login from './Pages/Login'
import Dashboard from './Dashboard'
import YourProfile from './DashboardPages/YourProfile'
import SubmitCase from './DashboardPages/SubmitCase'
import WithdrawCase from './DashboardPages/WithdrwaCase'
import BalanceInqury from './DashboardPages/BalanceInquiry'
import AccountStatement from './DashboardPages/AccountBalance'
import MiniStatement from './DashboardPages/MiniStatement'
import ResetPassword from './DashboardPages/ResetPassword'
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

     <Routes>
      <Route path='/dashboard' element = {<Dashboard/>}>
      <Route index element = {<YourProfile/>}/>
      <Route path='/dashboard/yourprofile' element = {<YourProfile/>} />
      <Route path='/dashboard/submitcase' element = {<SubmitCase/>} />
      <Route path='/dashboard/withdrawcase' element = {<WithdrawCase/>} />
      <Route path='/dashboard/balanceinqury' element = {<BalanceInqury/>} />
      <Route path='/dashboard/accountstatement' element = {<AccountStatement/>} />
      <Route path='/dashboard/ministatement' element = {<MiniStatement/>} />
      <Route path='/dashboard/resetpassword' element = {<ResetPassword/>} />
      </Route>
     </Routes>
    </>
  )
}

export default App
