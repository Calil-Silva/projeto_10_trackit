import { Habit } from './cssCreatedHabits'
import TrashCan from '../../Shared/images/trashcan.png'

export default function CreatedHabits() {
    return (
        <>
        <Habit>
            <h1>Ler 1 capítulo de livro</h1>
            <ul>
                <li>D</li>
                <li>S</li>
                <li>T</li>
                <li>Q</li>
                <li>Q</li>
                <li>S</li>
                <li>S</li>
            </ul>
            <img src={TrashCan} alt='' />
        </Habit>
        </>
    )
};