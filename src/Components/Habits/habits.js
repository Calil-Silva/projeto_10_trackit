import styled from "styled-components"
import TrackIt from '../Shared/images/trackit2.svg'
import User from '../Shared/images/user.png'
import Increment from '../Shared/images/+.svg'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Habits() {
    return (
        <>
            <Navbar>
                <img src={TrackIt} alt='' id='trackit' />
                <img src={User} alt='' id='user' />
            </Navbar>
            <MyHabits>
                <h1>Meus hábitos</h1>
                <Add>
                    <img src={Increment} alt='' />
                </Add>
            </MyHabits>
            <NewHabit>
                <input type='text' id='habitName' placeholder='nome do hábito' />
                <ul>
                    <li>D</li>
                    <li>S</li>
                    <li>T</li>
                    <li>Q</li>
                    <li>Q</li>
                    <li>S</li>
                    <li>S</li>
                </ul>
                <div>
                <button>Cancelar</button>
                <button>Salvar</button>
                </div>
            </NewHabit>
            <NoHabitsText>
            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
            </NoHabitsText>
            <Menu>
                <button>Hábitos</button>
                <div>
                <CircularProgressbar value='90' text='Hoje' strokeWidth='9' background={true} backgroundPadding='6' styles={buildStyles({
                    textSize: '18px',
                    pathTransitionDuration: 0.5,
                    pathColor: '#fff',
                    textColor: '#fff',
                    strokeLinecap: 'round',
                    backgroundColor: `#52B6FF`,
                    trailColor: '#52B6FF',
                })}/>
                </div>
                <button>Histórico</button>
            </Menu>
        </>
    )
}

const Navbar = styled.div`
    position: fixed;
    top: 0;
    background-color: #126BA5;
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    #trackit {
        height: 49px;
        width: 97px;
        margin-left: 18px;
}

    #user {
        width: 51px;
        height: 51px;
        margin-right: 18px;
        border-radius: 100%;
    }
`;

const MyHabits = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 100px 18px 28px;

    h1 {
        font-size: 23px;
        color: #126BA5;
    }
`;

const Add = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 35px;
    background-color: #52B6FF;
    border-radius: 5px;
`;

const NewHabit = styled.div`
    width: 340px;
    height: 180px;
    border-radius: 5px;
    background-color: #ffffff;
    margin: 0 18px 29px;

    input {
        border: 1px solid #D4D4D4;
        border-radius: 5px;
        width: 303px;
        height: 45px;
        margin: 18px 18px 8px;
        ::placeholder {
            color: #DBDBDB;
            font-size: 20px;
        };
    };

    ul {
        display: flex;
        margin-left: 18px;
    };

    li {
        width: 30px;
        height: 30px;
        border-radius: 5px;
        font-size: 20px;
        color: #DBDBDB;
        border: 1px solid #CFCFCF;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 4px;
    };

    div {
        display: flex;
        justify-content: flex-end;
    }

    div button {
        width: 84px;
        height: 35px;
        border-radius: 5px;
        margin-right: 18px;
        margin-top: 29px;
    };

    div button:last-child {
        background-color: #52B6FF;
        color: #fff;
        border: none;
    };

    div button:first-child {
        background-color: #fff;
        color: #52B6FF;
        border: none;
    };
`;

const NoHabitsText = styled.h1`
    font-size: 18px;
    color: #666666;
    word-wrap: break-word;
    margin-left: 18px;
    margin-right: 18px;
`;

const Menu = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 70px;
    background-color: #fff;
    display: flex;
    justify-content: space-around;
    padding: 0 18px;

    div {
        height: 91px;
        width: 91px;
        position: relative;
        bottom: 31px;
    }

    button {
        border: none;
        background-color: #fff;
        color: #52B6FF;
        font-size: 18px;
    }
`;