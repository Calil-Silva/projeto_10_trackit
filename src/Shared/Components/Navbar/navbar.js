import { TopBar } from "./cssnavbar";
import TrackIt from '../../images/trackit2.svg';
import UserContext from "../userContext/userContext";
import { useContext } from "react";

export default function Navbar() {
    const { userData } = useContext(UserContext);
    const { image } = userData;

    return (
        <TopBar>
            <img src={TrackIt} alt='' id='trackit' />
            <img src={image} alt='' id='user' />
        </TopBar>
    );
};