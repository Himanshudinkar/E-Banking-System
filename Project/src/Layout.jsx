import { Outlet } from "react-router-dom"
import TopNav from "./Component/TopNav"

const Layout = () =>{
    return(
        <>

        <TopNav />
        
        <Outlet />

        
        </>
    )
}

export default Layout