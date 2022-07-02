import React from 'react'
import {useState} from "react"
import {useEffect} from "react"

function CountText() {
    const [count , setCount] = useState("")
    const [countText , setCountText] = useState(0)
    const handleChange = (e) => {
        setCount(e.target.value)
    }

    useEffect(() => {
        setTimeout(() => {
            setCountText(count.length)
        }, 500)
    })
  return (
    <div>
        <input type="text" style={{margin: "100px" , width: "80%" , padding: "10px"}} onChange={handleChange}></input>
        <br></br>
        <span>Word(s)</span><span>{countText}</span>
    </div>
  )
}

export default CountText