import { MenuBar } from './cssMenu';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Link, useHistory } from 'react-router-dom';
import UserContext from '../userContext/userContext';
import { useContext } from 'react';
import { getHabits } from '../../../Services/axios';
import { useState } from 'react';

export default function Menu( {setTeste} ) {
    const { userData } = useContext(UserContext);
    const { token } = userData;
    const history = useHistory();

    function listHabits() {

        

    }

    return (
        <MenuBar>
            <Link to="/habitos"><button onClick={listHabits}>Hábitos</button></Link>
            <div>
                <Link to='/hoje'><CircularProgressbar value='0' text='Hoje' strokeWidth='9' background={true} backgroundPadding='6' styles={buildStyles({
                    textSize: '18px',
                    pathTransitionDuration: 0.5,
                    pathColor: '#fff',
                    textColor: '#fff',
                    strokeLinecap: 'round',
                    backgroundColor: `#52B6FF`,
                    trailColor: '#52B6FF',
                })} /></Link>
            </div>
            <Link to='/historico'><button>Histórico</button></Link>
        </MenuBar>
    )
}

