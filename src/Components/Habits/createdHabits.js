import { Habit } from './cssCreatedHabits'
import TrashCan from '../../Shared/images/trashcan.png'
import { useState } from 'react'; 
import Weekdays from './weekdays';

export default function CreatedHabits({ name, days }) {
    const dayweek = [{ day: 'D', number: 7 }, { day: 'S', number: 1 }, { day: 'T', number: 2 }, { day: 'Q', number: 3 }, { day: 'Q', number: 4 }, { day: 'S', number: 5 }, { day: 'S', number: 8 }];
    const setDay = (days)
    console.log(days, name)
    return (
        <>
        <Habit>
            <h1>{name}</h1>
            
            <ul>
                {dayweek.map((element, index) => <li key={index} style={ days.includes(element.number) ? {backgroundColor: '#cfcfcf', color: '#fff'} : {backgroundColor: '#fff'} }>{element.day}</li>)}
            </ul>
            <img src={TrashCan} alt='' />
        </Habit>
        </>
    )
};