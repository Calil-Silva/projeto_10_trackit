import styled from "styled-components"

const TopBar = styled.div`
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

export {
    TopBar,
}