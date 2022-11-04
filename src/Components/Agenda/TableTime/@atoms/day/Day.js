import Appointment from "../Appointement/Appointement";
import DisabledSlot from "../DisabledSot/DisabledSlot";
import EmptySlot from "../EmptySlot/EmptySlot";
import style from "./Day.module.css";
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
