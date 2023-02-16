import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Agenda from "../../Components/Agenda/Agenda";

import { useEffect } from "react";
import { getAppoitment } from "../../redux/features/Agenda/AgendaSlice";
import { Fragment } from "react";




export default function Home() {


  const dispatch = useDispatch()
  const { appoitment } = useSelector((state) => state.agenda)


  // useEffect(() => {
  //   dispatch(getAppoitment())
  // },  [dispatch]);





  return (
    <Fragment>
      <div className="items">
        {appoitment && appoitment.map((el, i) => 
          <div key={i} className="item">
            <p>{el.name}</p>
          </div>
        )}
      </div>
    </Fragment>
  
  
);
}
