
import Increment from '../../Shared/images/+.svg'
import Menu from "../../Shared/Components/Menu/menu";
import { MyHabits, Add, NewHabit, NoHabitsText, Container } from './cssHabits'
import Navbar from '../../Shared/Components/Navbar/navbar';
import { useState, useContext, useEffect } from 'react';
import Weekdays from './weekdays';
import { postHabit } from '../../Services/axios';
import UserContext from '../../Shared/Components/userContext/userContext';
import CreatedHabits from './createdHabits'
import { getHabits } from '../../Services/axios';

export default function Habits() {
    const [addHabit, setAddHabit] = useState(false);
    const [name, setName] = useState('');
    const days = [{ day: 'D', number: 7 }, { day: 'S', number: 1 }, { day: 'T', number: 2 }, { day: 'Q', number: 3 }, { day: 'Q', number: 4 }, { day: 'S', number: 5 }, { day: 'S', number: 6 }];
    const [daysNumber, setDaysNumber] = useState([]);
    const { userData } = useContext(UserContext);
    const { token } = userData;
    const [disabled, setDisabled] = useState(false);
    const [userCreatedHabit, setUserCreatedHabit] = useState([]);
    console.log(userCreatedHabit)

    function postNewHabbit() {
        setDisabled(true);
        postHabit(name, daysNumber, token)
            .then(res => {
                setDisabled(false);
                setAddHabit(false);
                setName('');
            })
            .catch(err => {
                alert(`${err.response.data.details}`)
                setDisabled(false)
            })
    }

    useEffect(() => {
        getHabits(token).then(res => setUserCreatedHabit([...res.data]));
    }, [addHabit])

    function haveHabits() {
        if (userCreatedHabit.length !== 0) {
            return (
                userCreatedHabit.map((element) => <CreatedHabits key={element.id} name={element.name} days={element.days} id={element.id} setUserCreatedHabit={setUserCreatedHabit} userCreatedHabit={userCreatedHabit}/>)
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
                    <Add onClick={() => !addHabit ? setAddHabit(true) : ''}>
                        <img src={Increment} alt='' />
                    </Add>
                </MyHabits>
                <NewHabit addHabit={addHabit}>
                    <input type='text' id='habitName' placeholder='nome do hábito' onChange={e => setName(e.target.value)} value={name} disabled={disabled} />
                    <ul>
                        {days.map((el, index) => <Weekdays key={index} element={el} setDaysNumber={setDaysNumber} daysNumber={daysNumber} disabled={disabled}/>)}
                    </ul>
                    <div>
                        <button onClick={() => addHabit ? setAddHabit(false) : ''}>Cancelar</button>
                        <button onClick={() => {
                            if(name ==='' || daysNumber.length === 0) {
                                alert('Preencha todos os campos!')
                            } else {
                                postNewHabbit();
                            }
                        }}>Salvar</button>
                    </div>
                </NewHabit>
                {haveHabits()}
                </Container>
                <Menu />
        </>
    )
}



