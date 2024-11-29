import styled from "styled-components";

export const Container = styled.div`
  max-width: ${({ theme }) => theme.containerWidth};
  width: 100%;
  margin: 0 auto;
`;

export const Stack = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  flex-wrap: wrap;
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
  gap: ${({ gap }) => gap};
`;

// With flex-direction it is wanted to make it optional, reusable css, to select row or column, for that reason it is created like this: flex-direction: ${({ direction }) => direction};  (attribute : value)
// Depending with information/value (${({ justify }) => justify};) it is sending to the component as props, it can be had different values for these attributes(flex-direction,justify-content)
// Make the Styled component more flexible
//<Stack direction="row" justify="center" align="ceneter"></Stack>
//<Stack direction="column"></Stack>

export const Card = styled.div`
  border: ${({ border }) => border};
  background-color: ${({ bg }) => bg};
  color: ${({ color }) => color};
  padding: 2rem;
  border-radius: 5px;
  box-shadow: ${({ shadow }) => shadow && "1px 1px 5px rgba(0,0,0,0.4)"};
`;
// shadow: if there is shadow it will take the values. If not ,no
{
  /* <Card  border="2px solid red" bg="red" color="white" shadow></Card> */
}

// If it is had elements that there are a lot in the App and there are a common elements, it is necessary to include them in the UI.styles

// Stack is just a name but usually used with things related to flex
