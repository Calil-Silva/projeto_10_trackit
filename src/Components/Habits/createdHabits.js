import { Habit } from './cssCreatedHabits'
import TrashCan from '../../Shared/images/trashcan.png'
import { useState } from 'react'; 
import Weekdays from './weekdays';

export default function CreatedHabits({ name, days }) {
    const dayweek = [{ day: 'D', number: 7 }, { day: 'S', number: 1 }, { day: 'T', number: 2 }, { day: 'Q', number: 3 }, { day: 'Q', number: 4 }, { day: 'S', number: 5 }, { day: 'S', number: 8 }];
    // const [day, setDay] = useState(false);
    console.log(days, name)
    return (
        <>
        <Habit>
            <h1>{name}</h1>
            
            <ul>
            {/* <Weekdays /> */}
                {/* {days.map((element, index) => <li key={index}>{element.day} styles={ {backgroundColor: `${days.includes(dayweek.number) ? '#cfcfcf' : '#fff'}` }}</li>)} */}
                
                {/* <li>D</li>
                <li>S</li>
                <li>T</li>
                <li>Q</li>
                <li>Q</li>
                <li>S</li>
                <li>S</li> */}
            </ul>
            <img src={TrashCan} alt='' />
        </Habit>
        </>
    )
};