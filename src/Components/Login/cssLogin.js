import styled from "styled-components";

const Container = styled.div`
    margin: 68px 36px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Image = styled.img`
    margin-bottom: 32px;
    width: 180px;
    height: 178px;
`;

const Form = styled.form`
    input#email, input#senha, input#submit {
        border: 1px solid #D4D4D4;
        height: 45px;
        width: 100%;
        margin-bottom: 6px;
        font-size: 20px;
        ::placeholder {
            color: #DBDBDB;
        }
        border-radius: 5px;
    }
    input#submit {
        background-color: #52B6FF;
            color: #fff;
    }
`;

const Ancora = styled.a`
    margin-top: 19px;
    font-size: 14px;
    color: #52B6FF;
    text-decoration: underline;
`

export {
    Container,
    Image,
    Form,
    Ancora
}