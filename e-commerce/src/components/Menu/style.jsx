import styled from 'styled-components'

export const MenuBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #FFF;
    box-shadow: 5px 5px 5px #000000;
`

export const LogoImage = styled.img`
    height: 40px;
    width: 100px;
`

export const MenuItems = styled.div`
    display: flex;
    
`

export const Items = styled.button`
    align-items: center;
    background: transparent;
    border: none;
    color: rgba(0, 0, 0, 0.8);
    cursor: pointer;
    display: flex;
    font-size: 20px;
    font-weight: 700;
    
    margin: 0 5px 5px 20px;
    padding: 0 0 2px 0;
    transition: .15s transform ease;
    transform: scale(1);
    &:hover {
        color: #310094;
        transform: scale(1.1);
    }
`

export const Entrar = styled.button`
    display: flex;
    align-items: center;
    margin-right: 50px;
    border: none;
    color: #fff;
    
    font-weight: 600;
    border-radius: 5px;
    background-color: #cacaca96;
    transition: .15s transform ease;
    transform: scale(1);
    &:hover {
        background-color: #cacaca;
        transform: scale(1.1);
    }

    & a{
        display: flex;
        align-items: center;
    }
`