import React from 'react'
import { Fragment } from 'react'
import { useState } from 'react'
import TableTime from '../../../Components/Agenda/TableTime/TableTime'

import moment from 'moment'

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import { getWeek } from '../../../Components/Agenda/TableTime/Utils'


import style from './Agenda.module.css'


export default function Agenda() {

  const [startDate, setStartDate] = useState(moment())
  const endDate = moment(startDate).add(6, 'day')

  const week = getWeek(startDate, endDate)

  const handleChangeDate = (value) => {
    setStartDate(moment(value))
  }




  return (
    <Fragment>
      <div className={style.container}>
        <div className={style.calendarContainer}>
          <Calendar
            className={style.calendar}
            onChange={handleChangeDate}
            />
        </div>
        <div className="tableTime">
          <TableTime week={week} />
        </div>
      </div>
    </Fragment>
  )
}
