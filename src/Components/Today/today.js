import Menu from "../../Shared/Components/Menu/menu";
import Navbar from "../../Shared/Components/Navbar/navbar";
import { Header, Container } from './cssToday';
import UserContext from "../../Shared/Components/userContext/userContext";
import { useContext, useEffect, useState } from "react";
import { getTodayHabits } from "../../Services/axios";
import TodayHabits from "./todayHabits";
// import 'dayjs/locale/pt-br'

export default function Today() {
    const { userData } = useContext(UserContext);
    const { token } = userData;
    const [today, setToday] =  useState([]);
    // var dayjs = require('dayjs');
    // dayjs.locale('pt-br');

    useEffect(() => {
        getTodayHabits(token).then(res => setToday([...res.data]));
    }, [])

    return (
        <>
            <Navbar />
            <Container>
                <Header>
                    <h1>segunda</h1>
                    <span>Nenhum hábito concluído ainda</span>
                </Header>
                    {today.map((element) => <TodayHabits key={element.id} name={element.name} done={element.done} currentSequence={element.currentSequence} highestSequence={element.highestSequence}/>)}
            </Container>
            <Menu />
        </>
    );
};

