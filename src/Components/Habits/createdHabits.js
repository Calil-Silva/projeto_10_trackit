import { Habit } from './cssCreatedHabits'
import TrashCan from '../../Shared/images/trashcan.png'
import { deleteHabit } from '../../Services/axios';
import UserContext from '../../Shared/Components/userContext/userContext';
import { useContext } from 'react';

export default function CreatedHabits({ name, days, id, setUserCreatedHabit, userCreatedHabit }) {
    const dayweek = [{ day: 'D', number: 0 }, { day: 'S', number: 1 }, { day: 'T', number: 2 }, { day: 'Q', number: 3 }, { day: 'Q', number: 4 }, { day: 'S', number: 5 }, { day: 'S', number: 6 }];
    const { userData } = useContext(UserContext);
    const { token } = userData;



    function deleteThisHabit() {

        if (window.confirm("Deletar este hábito?")) {
            deleteHabit(id, token);
            setUserCreatedHabit(userCreatedHabit = userCreatedHabit.filter((element) => element.id !== id));
        } else {
            return;
        }
    }

    return (
        <>
            <Habit>
                <h1>{name}</h1>

                <ul>
                    {dayweek.map((element, index) => <li key={index} style={days.includes(element.number) ? { backgroundColor: '#cfcfcf', color: '#fff' } : { backgroundColor: '#fff' }}>{element.day}</li>)}
                </ul>
                <img src={TrashCan} alt='' onClick={deleteThisHabit} />
            </Habit>
        </>
    )
};