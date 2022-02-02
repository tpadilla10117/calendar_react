import React, {useState} from 'react';
import moment from 'moment';

function Calendar() {
    const weekdayshort = moment.weekdaysShort();
    const {dateObject, setDateObject} = useState(moment());


    function firstDayOfMonth() {
        let theDate = dateObject;
        let firstDay = moment(theDate).startOf("month").format("d");

        return firstDay;
    };


  return <div className='calendar-parent-container'>
    <table>
        <thead>
            <tr>
                {
                    weekdayshort.map(day => {
                        return (
                            <th key={day} className='weekday'>
                                {day}
                            </th>
                        )
                    })

                }
            </tr>
        </thead>
    </table>

  </div>;
}

export default Calendar;
