import moment from 'moment'

import 'moment/locale/fr';
import 'moment/locale/nl';




export const getMinute = () => {
    const items = [];
    new Array(24).fill().forEach((acc, index) => {
        items.push(moment( {hour: index} ).format('HH:mm'));
        items.push(moment({ hour: index, minute: 30 }).format("HH:mm"));
        // items.push(moment({ hour: index, minute: 30 }).format("dddd, MMMM Do YYYY, HH:mm"));
    })
    return items;
}




export const getWeek = (startDate, endDate) => {
    moment.locale('fr')
    let now = startDate.clone(), dates = [];

    while (now.isSameOrBefore(endDate)) {
        dates.push(now.format('YYYY-MM-DD'));
        now.add(1, 'days');
    }
    return dates;
};


// export const getWeek = (startDay) => {
//     moment.locale('fr')
//     const res = Array(7).fill().map(() => 
//         startDay.add(1, 'd').format('YYYY-MM-DD')
//     );
//     return res;
// }