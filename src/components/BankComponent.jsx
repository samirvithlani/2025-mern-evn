import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { depositAction } from '../redux/bankSlice'

export const BankComponent = () => {
    const [depositAmount, setdepositAmount] = useState(0)
    const dispatch = useDispatch()

    const handleDeposit = () => {

        dispatch(depositAction(parseInt(depositAmount)))
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>BankComponent</h1>
        <div>
            <label>DEPOSIT AMOUNT</label>
            <input type='text' onChange={(event)=>{setdepositAmount(event.target.value)}}></input>
            <button onClick={()=>{handleDeposit()}}>DEPOSIT</button>
        </div>
    </div>
  )
}
