import React, { useMemo } from 'react'
import { useState } from 'react';
//useMemo

export const FindBomb = () => {

    var gridSize = 5;
    var tiles = gridSize * gridSize; //25 36
    const [selectedTile, setselectedTile] = useState([])
    const [gameOver, setgameOver] = useState(false)
    console.log("selected tile...",selectedTile)

    // var bombPosition  = Math.floor(Math.random()*tiles)
    // console.log("bpos",bombPosition)

    var bombPosition = useMemo(()=>{return Math.floor(Math.random()*tiles)},[gridSize])
    var bombPosition2 = useMemo(()=>{return Math.floor(Math.random()*tiles)},[gridSize])
    var bombPosition3 = useMemo(()=>{return Math.floor(Math.random()*tiles)},[gridSize])
     console.log("bpos",bombPosition)
     console.log("bpos",bombPosition2)
     console.log("bpos",bombPosition3)
    const handleClick = (index)=>{
        //selectedTile array --> index -->push
        setselectedTile([...selectedTile,index])   
        if(index == bombPosition){
            setgameOver(true)
            setTimeout(()=>{
                window.location.reload()
            },2000)
        }
    }


  return (
    <div>
    <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${gridSize}, 60px)`,
            gap: "10px",
            justifyContent: "center",
            margin: "20px 0",
          }}
        >
            {
                Array.from({length:tiles}).map((_,index)=>{
                      return <div 
                      onClick={()=>{handleClick(index)}}
                      style={{
                        width: "60px",
                        height: "60px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: "2px solid #ccc",
                        //backgroundColor: clickedTiles.includes(index) ? "#e0e0e0" : "#fff",
                        backgroundColor:selectedTile.includes(index) && "#e0e0e0",
                        cursor: "pointer",
                        fontSize: "18px",
                        borderRadius: "4px",
                        transition: "background-color 0.3s, border-color 0.3s",
                      }}>
                        {
                            gameOver && bombPosition == index  ? "💣" :index+1
                        }
                      </div>  
                })
            }

        </div>
        { gameOver &&
        <button onClick={()=>{window.location.reload()}} className='btn btn-info'>RELOAD</button>
}
    
    </div>
  )
}
