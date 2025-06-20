import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Outlet } from "react-router-dom"
import { Login } from "../Login"

const useAuth = ()=>{

    const [auth, setauth] = useState({isLoggedin:false,role:""})
    const [loading, setloading] = useState(true)

    const authState = useSelector((state)=>state.auth)

    useEffect(() => {
      
        if(authState.id){
            setauth({isLoggedin:true,role:""})
        }
        setloading(false)
        
    }, [])
    
    return {...auth,loading} // {auth,loading}

}

const ProtectedRoutes = ()=>{


    const auth = useAuth() //{auth:{},loading...}
    if(auth.loading){
        return <h1>Loading....</h1>
    }

    return auth.isLoggedin? <Outlet></Outlet> : <Login/>

}

export default ProtectedRoutes