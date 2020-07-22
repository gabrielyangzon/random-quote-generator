import styled from "styled-components";

export const Div = styled.div`
  width: 50vh;
  height: 100%;
  border: 1px solid white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const Button = styled.button`
  width: 100px;
  height: 50px;
  padding: 10px;
  background: ${(props) => props.bgcolor};
  color: white;
  font-size: 20px;
  margin: 5px;
`;
