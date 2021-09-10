import styled from "styled-components";

const MenuBar = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 70px;
    background-color: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 18px;

    div {
        height: 91px;
        width: 91px;
        position: relative;
        bottom: 21px;
    }

    button {
        border: none;
        background-color: #fff;
        color: #52B6FF;
        font-size: 18px;
    }
`;

export {
    MenuBar,
};