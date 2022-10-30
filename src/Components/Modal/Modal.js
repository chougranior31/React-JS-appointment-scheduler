import React from 'react'


import style from './Modal.module.css'

export default function Modal({ selected }) {

    console.log(selected);
  return (
    <div>
      <div className={style.overlay}>
          <div className={style.text}>
              {selected && selected}
          </div>
      </div>
    </div>
  )
}
