import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  background: #fcfcfc;
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
  padding: 5px 10px;

  & p {
    margin: 0;
  }

  & img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
  }
`

export const Name = styled.p`
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 500;
`

export const Description = styled.p`
    font-size: 12px;
`

