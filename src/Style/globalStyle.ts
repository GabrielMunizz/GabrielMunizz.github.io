import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle` 
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Source Code Pro', monospace;
 }

 body {
    width: 100%;    
    background-color: ${(props) => props.theme.colors.backgroundColor};
    color: ${(props) => props.theme.colors.main_text_color};
    transition: 0.3s ease;
    background-attachment: fixed;    
 }
`