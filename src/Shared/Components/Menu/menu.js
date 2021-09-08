import { MenuBar } from './cssMenu';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Menu() {
    return(
        <MenuBar>
                <button>Hábitos</button>
                <div>
                <CircularProgressbar value='0' text='Hoje' strokeWidth='9' background={true} backgroundPadding='6' styles={buildStyles({
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
            </MenuBar>
    )
}

