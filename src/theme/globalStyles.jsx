import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html {
        font-size: 100%;
        margin: 0;
        box-sizing: border-box;
        scroll-behavior: smooth;
    }

    *, *::before, *::after {
    box-sizing: border-box;
    }
    
    body {
    padding: 0;
     color: #fff;
     background: #0d0d0d;
     font-family: 'Poppins', sans-serif;
    }

    a, a:visited, a:hover {
    text-decoration: none;
}

`;

export default GlobalStyle;
