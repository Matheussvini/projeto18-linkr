import styled from "styled-components";

export const App = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    background-color: #151515;
`

export const Introduction = styled.div`
    box-sizing: border-box;
    padding-left: 144px;
    padding-top: 301px;
    width: 65%;
    height: 100vh;
    background-color: #151515;
    h1{
        width: 233px;
        height: 117px;
        font-family: 'Passion One';
        font-style: normal;
        font-weight: 700;
        font-size: 106px;
        line-height: 117px;
        letter-spacing: 0.05em;
        color: #FFFFFF;
    } 
    
    p {
        width: 442px;
        height: 128px;
        font-family: 'Oswald';
        font-style: normal;
        font-weight: 700;
        font-size: 43px;
        line-height: 64px;
        color: #FFFFFF;
    }
`

export const Register = styled.form`
    box-sizing: border-box;
    padding-top: 274px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 35%;
    height: 100vh;
    background-color: #333333;
    gap: 13px;
    input{
        width: 429px;
        height: 65px;
        background: #FFFFFF;
        border-radius: 6px;
        box-sizing: border-box;
        padding-left: 17px; 
        padding-top: 12px;
    }

    input::placeholder {
        font-family: 'Oswald';
        font-style: normal;
        font-weight: 700;
        font-size: 27px;
        line-height: 40px;
        color: #9F9F9F;
    }

    button{
        width: 429px;
        height: 65px;
        background: #1877F2;
        border-radius: 6px;
        border: none;
        align-items: center;
        justify-content: center;
        display: flex;

    }

    button:hover {
        background: #5ebcf2;
        cursor: pointer;
    }


    button > h1{
        width: 85px;
        height: 40px;
        font-family: 'Oswald';
        font-style: normal;
        font-weight: 700;
        font-size: 27px;
        line-height: 40px;
        color: #FFFFFF;
    }

    p {
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
        text-decoration-line: underline;
        color: #FFFFFF;
    }
`