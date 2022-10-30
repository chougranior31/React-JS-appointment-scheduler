import React from 'react'


import style from './BlockMinutes.module.css'

export default function BlockMinutes({ min }) {

    const handleClick = () => {
        console.log(min);
    }


  return (
    <div onClick={handleClick}>
      {min}
    </div>
  )
}
