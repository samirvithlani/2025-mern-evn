import axios from "axios"
import { useEffect, useState } from "react"

export const useFetchApi1=(url)=>{

    const [data, setdata] = useState([])
    const [loading, setloading] = useState(false)

    useEffect(() => {
      
        callApi()
      
    }, [])

    const callApi = async()=>{
        setloading(true)
        const res  = await axios.get(url)
        setdata(res.data.data)
        setloading(false)

    }
    
    return {data,loading}

}