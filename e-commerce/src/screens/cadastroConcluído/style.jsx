import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    width: 100vw;
    height: 90vh;
    align-items: center;
    justify-content: center;
`

export const BoxDecision = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 350px;
    height: 200px;
    background-color: white;
    padding: 10px;

    & p{
        font-size: 20px;
    }

    & Button:first-of-type{
        margin-right: 10px;
    }
`