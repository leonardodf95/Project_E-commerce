import styled from 'styled-components'

export const MenuBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    background-color: #FADCD9;
`

export const LogoImage = styled.img`
    height: 10vh;
    width: 100px;
`

export const MenuItems = styled.div`
    display: flex;
    margin-right: 50%;
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