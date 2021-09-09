import { TopBar } from "./cssnavbar";
import TrackIt from '../../images/trackit2.svg';
import User from '../../images/user.png';
import UserContext from "../userContext/userContext";
import { useContext } from "react";

export default function Navbar({image}) {
    const user = useContext(UserContext);

    return (
        <TopBar>
            <img src={TrackIt} alt='' id='trackit' />
            <img src={user.userData.image} alt='' id='user' />
        </TopBar>
    );
};