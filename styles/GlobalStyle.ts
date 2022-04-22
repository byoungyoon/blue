import { createGlobalStyle } from 'styled-components';
import bg from '../public/image/background.jpg';

const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
    padding: 0;
    
    width: 100%;
    height: 100vh;

    font-family: 'Inter', sans-serif;
    font-weight: 300;
    white-space: pre;
    
    background-color: black;
    // background-size: 100% 100%;
    // background-repeat: no-repeat;
    // background-position: center;
    // background-image: url('${bg.src}');
    
    overflow: hidden;
  }

`;

export default GlobalStyle;
