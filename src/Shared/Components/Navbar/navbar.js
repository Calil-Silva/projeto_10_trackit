import { TopBar } from "./cssnavbar";
import TrackIt from '../../images/trackit2.svg'
import User from '../../images/user.png'

export default function Navbar() {
    return (
        <TopBar>
            <img src={TrackIt} alt='' id='trackit' />
            <img src={User} alt='' id='user' />
        </TopBar>
    );
};