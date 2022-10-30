import moment from 'moment'
import React from 'react'
import { useState } from 'react'
import { Fragment } from 'react'


import { getMinute } from '../Agenda/TableTime/Utils'
import BlockMinutes from '../BlockMinutes/BlockMinutes'

import style from './Day.module.css'

export default function Day({ day }) {



  const handleClickTime = (min, day) => {
    // console.log(min);
    console.log(day);
  }

  const minutes = getMinute()


  return (
    <Fragment>
      <div className={style.days}>
        <div className={style.day}>
            {moment(day).format("dddd")}
        </div>

        <div className="hour">
          {minutes.map((min, i) => (
            <div onClick={() => handleClickTime(min, day)} key={i}>
              <BlockMinutes min={min} />
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  )
}
