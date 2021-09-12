import Check from '../../Shared/images/check.svg';
import { Habits } from './cssToday';

export default function TodayHabits({ name, done, currentSequence, highestSequence }) {

    return (
        <>
            <Habits>
                <div>
                    <h1>
                        {name}
                    </h1>
                    <span>
                        Sequência atual: {currentSequence} dias
                    </span>
                    <span>
                        Seu recorde: {highestSequence} dias
                    </span>
                </div>
                <div done={done}>
                    <img src={Check} alt='' />
                </div>
            </Habits>
        </>
    )
}