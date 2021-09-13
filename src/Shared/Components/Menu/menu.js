import { MenuBar } from './cssMenu';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Link } from 'react-router-dom';
import UserContext from '../userContext/userContext';
import { useContext } from 'react';

export default function Menu() {
    const { progress } = useContext(UserContext);

    return (
        <MenuBar>
            <Link to="/habitos"><button>Hábitos</button></Link>
            <div>
                <Link to='/hoje'><CircularProgressbar value={progress} text='Hoje' strokeWidth='9' background={true} backgroundPadding='6' styles={buildStyles({
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

