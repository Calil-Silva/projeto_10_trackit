import Menu from "../../Shared/Components/Menu/menu";
import Navbar from "../../Shared/Components/Navbar/navbar";
import { Header, Container } from './cssToday';
import UserContext from "../../Shared/Components/userContext/userContext";
import { useContext, useEffect, useState } from "react";
import { getTodayHabits } from "../../Services/axios";
import TodayHabits from "./todayHabits";
import 'dayjs/locale/pt-br'
import HabitContext from "../../Shared/Components/userContext/habbitContext";

export default function Today( { setProgress } ) {
    const { userData } = useContext(UserContext);
    const { token } = userData;
    const [today, setToday] =  useState([]);
    const [change, setChange] = useState(false)
    var dayjs = require('dayjs');
    dayjs.locale('pt-br');

    const doneHabitsAmount = today.filter((element) => element.done === true).length;
    const todayHabitsAmount = today.length;
    const progress = (doneHabitsAmount / todayHabitsAmount) * 100;

    useEffect(() => {
        getTodayHabits(token).then(res => setToday([...res.data]));
        setChange(false);
    }, [change])

    return (
        <>
        <HabitContext.Provider value={progress} >
            <Navbar />
            <Container>
                <Header>
                    <h1>{dayjs().locale('pt-br').format('dddd - DD/MM')}</h1>
                    {progress === 0 || Number.isNaN(progress) ? <span>Nenhum hábito concluído ainda</span> : <span>{progress}% dos hábitos concluídos</span>}
                </Header>
                    {today.map((element) => <TodayHabits key={element.id} name={element.name} done={element.done} currentSequence={element.currentSequence} highestSequence={element.highestSequence} id={element.id} setChange={setChange} change={change}/>)}
            </Container>
            <Menu/>
            </HabitContext.Provider>
        </>
    );
};

