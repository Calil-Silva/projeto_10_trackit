import styled from "styled-components"

const Container = styled.div`
margin: 0 18px 110px;

` 

const MyHabits = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin: 100px 0 28px;

h1 {
    font-size: 23px;
    color: #126BA5;
}
`;

const Add = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 40px;
height: 35px;
background-color: #52B6FF;
border-radius: 5px;
`;

const NewHabit = styled.div`
width: 100%;
height: 180px;
border-radius: 5px;
background-color: #ffffff;
margin: 0 0 29px;
padding: 18px;
display: ${props => props.addHabit === false ? 'none' : ''};

input {
    border: 1px solid #D4D4D4;
    border-radius: 5px;
    width: 100%;
    height: 45px;
    margin-bottom: 8px;
    font-size: 20px;
    ::placeholder {
        color: #DBDBDB;
        font-size: 20px;
    };
};

ul {
    display: flex;
};

div {
    display: flex;
    justify-content: flex-end;
}

div button {
    width: 84px;
    height: 35px;
    border-radius: 5px;
    margin-top: 29px;
};

div button:last-child {
    background-color: #52B6FF;
    color: #fff;
    border: none;
};

div button:first-child {
    background-color: #fff;
    color: #52B6FF;
    border: none;
};
`;

const List = styled.li`
width: 30px;
height: 30px;
border-radius: 5px;
font-size: 20px;
color: ${props => props.weekday === false ? '#cfcfcf' : '#fff'};
border: 1px solid #CFCFCF;
display: flex;
justify-content: center;
align-items: center;
margin-right: 4px;
background-color: ${props => props.weekday === false ? '#fff' : '#cfcfcf'};
`;

const NoHabitsText = styled.h1`
font-size: 18px;
color: #666666;
word-wrap: break-word;
`;

export {
    Container,
    MyHabits,
    Add,
    NewHabit,
    NoHabitsText,
    List
}