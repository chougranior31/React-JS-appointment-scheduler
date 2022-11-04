export const getWeek = (data, startDate) => {
  let week = [];
  for (let i = 0; i < 7; i++) {
    let tomorrow = !!startDate ? new Date(startDate) : new Date();
    tomorrow.setDate(tomorrow.getDate() + i);
    let day = appointments(
      tomorrow.getDate(),
      tomorrow.getMonth(),
      tomorrow.getFullYear(),
      data
    );
    day = completeDay(day);
    week = [...week, { date: tomorrow, hours: [...day] }];
  }
  return week;
};

export const getHours = (minutes = ["00", "30"], seconds = ":00") => {
  let times = [];
  for (var i = 0; i < 24; i++) {
    for (var j = 0; j < minutes.length; j++) {
      var time = i + ":" + minutes[j];
      if (i < 10) {
        time = "0" + time;
      }
      times.push(time + seconds);
    }
  }
  const move = times.splice(0, 7 * minutes.length);
  times = [...times, ...move];
  return times;
};

export const appointments = (oneday, month, year, days) => {
  let day = days.filter((item) => {
    return (
      new Date(item.date).getDate() === oneday &&
      new Date(item.date).getMonth() === month &&
      new Date(item.date).getFullYear() === year
    );
  });
  return day;
};

export const completeDay = (day) => {
  let appointments = [];
  let completeDay = [];
  let halfhours = getHours();
  for (let halfhour in halfhours) {
    let res = check(halfhour, day);
    appointments.push(res);
  }
  for (var i = 0; i < 48; i = i + 2) {
    completeDay.push([appointments[i], appointments[i + 1]]);
  }
  return completeDay;
};

export const check = (halfhour, day) => {
  let halfhours = getHours();
  for (let dayhour in day) {
    console.log(halfhours[halfhour] === day[dayhour].time.from_time);
    if (halfhours[halfhour] === day[dayhour].time.from_time) {
      return day[dayhour];
    }
  }
  return {
    start_time: halfhours[halfhour],
  };
};

export const normalize = (appointments, slots) => {
  let normalizedSlots = [];
  slots.forEach((slot) =>
    normalizedSlots.push({
      ...slot,
      date: slot.created_at,
      time: slot.time_slot,
    })
  );
  return [...appointments, ...normalizedSlots];
};
