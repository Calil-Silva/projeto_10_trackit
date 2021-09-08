import Menu from "../../Shared/Components/Menu/menu";
import Navbar from "../../Shared/Components/Navbar/navbar";
import styled from "styled-components";

export default function History() {
    return (
        <>
            <Navbar />
            <MyHistory>
                <h1>Histórico</h1>
                <span>
                    Em breve você poderá ver o histórico dos seus hábitos aqui!
                </span>
            </MyHistory>
            <Menu />
        </>
    )
}

const MyHistory = styled.div`
    margin: 100px 18px 0;

    h1 {
        font-size: 23px;
        color: #126BA5;
        margin-bottom: 17px;
    }

    span {
        font-size: 18px;
        color: #666666;
    }
`
