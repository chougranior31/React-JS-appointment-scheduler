import Appointment from "../appointement";
import DisabledSlot from "../disabled-slot";
import EmptySlot from "../empty-slot";
import style from "./day.module.css";
import DayHeader from "./DayHeader";

export default function Day({ day, key }) {
  return (
    <div className={style.column}>
      <DayHeader day={day} />

      {day?.hours?.map((hour, index) => (
        <div className={style.slot} key={index}>
          {hour?.map((halfHour, index) =>
            halfHour?.time ? (
              halfHour?.patient ? (
                <Appointment appointment={halfHour} key={index} />
              ) : (
                <DisabledSlot slot={halfHour} key={index} />
              )
            ) : (
              <EmptySlot slot={halfHour} key={index} />
            )
          )}
        </div>
      ))}
    </div>
  );
}
