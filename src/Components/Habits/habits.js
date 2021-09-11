
import Increment from '../../Shared/images/+.svg'
import Menu from "../../Shared/Components/Menu/menu";
import { MyHabits, Add, NewHabit, NoHabitsText, Container } from './cssHabits'
import Navbar from '../../Shared/Components/Navbar/navbar';
import { useState, useContext, useEffect } from 'react';
import Weekdays from './weekdays';
import { postHabit } from '../../Services/axios';
import UserContext from '../../Shared/Components/userContext/userContext';
import { useHistory } from 'react-router-dom';
import CreatedHabits from './createdHabits'
import HabitContext from '../../Shared/Components/userContext/habbitContext';
import { getHabits } from '../../Services/axios';

export default function Habits() {
    const [addHabit, setAddHabit] = useState(false);
    const [name, setName] = useState('');
    const days = [{ day: 'D', number: 7 }, { day: 'S', number: 1 }, { day: 'T', number: 2 }, { day: 'Q', number: 3 }, { day: 'Q', number: 4 }, { day: 'S', number: 5 }, { day: 'S', number: 8 }];
    const [daysNumber, setDaysNumber] = useState([]);
    const { userData } = useContext(UserContext);
    const { token } = userData;
    const [disabled, setDisabled] = useState(false);
    const [userCreatedHabit, setUserCreatedHabit] = useState([]);
    console.log(userCreatedHabit)
    let count;

    const history = useHistory();

    function createNewHabit() {
        if (addHabit === false) {
            setAddHabit(true);
        } else {
            setAddHabit(false);
        }
    };

    function postNewHabbit() {
        setDisabled(true);
        postHabit(name, daysNumber, token)
            .then(res => {
                setDisabled(false);
                history.push('/habitos')
                count = true;
            })
            .catch(() => {
                alert('Token expirado! Faça o login novamente')
                setDisabled(false)
                history.push('/')
            })
    }

    useEffect(() => {
        getHabits(token).then(res => setUserCreatedHabit([...res.data]));
    }, [count])

    function haveHabits() {
        if (userCreatedHabit.length !== 0) {
            return (
                userCreatedHabit.map((element) => <CreatedHabits key={element.id} name={element.name} days={element.days} />)
            )
        } else {
            return (
                <NoHabitsText>
                    Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                </NoHabitsText>
            )
        }
    }

    return (
        <>
                <Navbar />
                <Container >
                <MyHabits>
                    <h1>Meus hábitos</h1>
                    <Add onClick={createNewHabit}>
                        <img src={Increment} alt='' />
                    </Add>
                </MyHabits>
                <NewHabit addHabit={addHabit}>
                    <input type='text' id='habitName' placeholder='nome do hábito' onChange={e => setName(e.target.value)} value={name} disabled={disabled} />
                    <ul>
                        {days.map((el, index) => <Weekdays key={index} element={el} setDaysNumber={setDaysNumber} daysNumber={daysNumber} disabled={disabled} />)}
                    </ul>
                    <div>
                        <button>Cancelar</button>
                        <button onClick={postNewHabbit}>Salvar</button>
                    </div>
                </NewHabit>
                {haveHabits()}
                </Container>
                <Menu />
        </>
    )
}



