import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchTerm } from '../redux/SearchSlice'

export const SearchInput = () => {

    const {term,triggred} = useSelector((state)=>state.search)
    const dispatch = useDispatch()
  return (
    <div style={{textAlign:"center"}}>
        <h1>Search INput</h1>
        <input type='text' value={term} onChange={(event)=>{dispatch(searchTerm(event.target.value))}}></input>
        {triggred}
    </div>
  )
}
