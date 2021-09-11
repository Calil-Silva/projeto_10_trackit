import { List } from "./cssHabits";
import { useState } from 'react';

export default function Weekdays({element, setDaysNumber, daysNumber, disabled}) {
    const [weekday, setWeekday] = useState(false);
    const { day, number } = element;

    function setDays() {
        if(disabled) {
            return;
        }
        if(weekday === false) {
            setWeekday(true);
            setDaysNumber([...daysNumber, number])
        } else {
            setWeekday(false);
            setDaysNumber(daysNumber = daysNumber.filter((el) => el !== number))
        }
    };

    return (
        <List onClick={setDays} weekday={weekday}>{day}</List>
    );
};