import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  main {
    padding: 5rem 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ul, li {
      list-style: none;
      margin: 0;
    }

    li {
      display: inline-block;
      margin: 20px;
    }
      a {
        text-decoration: none;
        color: ${props => props.theme.colors.text};
      }
  }

  h1 {
    font-size: 54px;
    color: ${props => props.theme.colors.primary};
    margin-top: 40px;
  }
`;
