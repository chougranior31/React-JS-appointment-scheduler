import React from 'react'
import { Fragment } from 'react'


import Day from '../../Day/Day'



import style from './TableTime.module.css'

export default function TableTime({ week }) {

  return (
    <Fragment>
      <div className={style.days}>
        {week.map((day ,i) => (
          <Day
          day={day} key={i} />
        ))}
      </div>
    </Fragment>
  )
}
