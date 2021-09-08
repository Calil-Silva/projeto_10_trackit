import styled from "styled-components"
import TrashCan from '../Shared/images/trashcan.png'

export default function CreatedHabits() {
    return (
        <>
        <Habit>
            <h1>Ler 1 capítulo de livro</h1>
            <ul>
                <li>D</li>
                <li>S</li>
                <li>T</li>
                <li>Q</li>
                <li>Q</li>
                <li>S</li>
                <li>S</li>
            </ul>
            <img src={TrashCan} alt='' />
        </Habit>
        </>
    )
}

const Habit = styled.div`
    margin: 0 18px 10px;
    width: 340px;
    height: 91px;
    background-color: #fff;
    padding: 15px;
    position: relative;
    border-radius: 5px;

    h1 {
        color: #666666;
        font-size: 20px;
        margin-bottom: 8px;
    };

    ul {
    display: flex;
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

    img {
        width: 13px;
        height: 15px;
        position: absolute;
        right: 10px;
        top: 10px;
    }

`;