import React from 'react'
import { useSelector } from 'react-redux'

const Third = () => {
    const value1=useSelector((state)=>state.add.value1)
    const value2=useSelector((state)=>state.add.value2)
  return (
    <div>
      {parseInt(value1)+parseInt(value2)}
    </div>
  )
}

export default Third
