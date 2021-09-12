import Check from '../../Shared/images/check.svg';
import { Habits } from './cssToday';
import { postDone, postUndone } from '../../Services/axios';
import UserContext from '../../Shared/Components/userContext/userContext';
import { useContext, useState, useEffect } from 'react';

export default function TodayHabits({ name, done, currentSequence, highestSequence, id, setChange }) {
    const { userData } = useContext(UserContext);
    const { token } = userData;
    const [selectDone, setSelectedDone] = useState(done);

    function habitDone() {
        if(done === false) {
            postDone(token, id).then(res => {
                setSelectedDone(true);
                setChange(true);
            })
        } else {
            postUndone(token, id).then(res => {
                setSelectedDone(false);
                setChange(true);
            })
        }
    }

    return (
        <>
            <Habits selectDone={selectDone}>
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
                <div onClick={habitDone}>
                    <img src={Check} alt='' />
                </div>
            </Habits>
        </>
    )
}