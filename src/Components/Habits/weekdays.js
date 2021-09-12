import { List } from "./cssHabits";
import { useState, useEffect } from 'react';

export default function Weekdays({element, setDaysNumber, daysNumber, disabled, addHabit}) {
    const [weekday, setWeekday] = useState(false);
    const { day, number } = element;

    useEffect(() => {
        if(!addHabit) {
            setWeekday(false);
        };
    }, [addHabit])
    

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