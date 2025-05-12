import React, { useEffect, useState } from 'react'

export const UseEffectDemo2 = () => {
    const [isLoading, setisLoading] = useState(false)
    useEffect(() => {
        setisLoading(true)
        setTimeout(() => {
            setisLoading(false)
        }, 5000);
    }, [])
    
  return (
    <div>
            {
            isLoading ? <h1>Loading...</h1> : <h1>Data Loaded</h1>
            }
    </div>
  )
}
