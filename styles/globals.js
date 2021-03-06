import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  /* width */
  ::-webkit-scrollbar {
  width: 8px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
  border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, .5);
  border: 1px solid rgba(255, 255, 255, .2);
  border-radius: 10px;
  }

  input[type="radio"] {
  display: none
  }

  
  * {
    padding: 0;
    margin: 0;
    box-sizing: 0;
  }

  html, body {
    background: #121212;
    font-family: 'Arial';
  }

  li {
    list-style: none;
  }


  a {
    text-decoration: none;
  }
`;

export const WrapperMainHome = styled.section`
  width: 100%;
  height: 100vh;
  padding-top: 50px;
`;
