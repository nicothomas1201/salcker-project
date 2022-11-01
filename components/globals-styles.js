import {createGlobalStyle} from 'styled-components'

const GlobalsStyles = createGlobalStyle`
  :root{
    --black: #1a1d21; 
    --primary: #11033f; 
    --blue: #2f91dd; 
    --green: #2bac76; 
    --white: #ffffff; 
    --grey: #b4b4b4; 
    --pink: #f0187c; 
    --headline1: 600 1.75rem/normal Poppins; 
    --headline2: 600 1.5rem/normal Poppins; 
    --headline3: 600 1.25rem/1.375rem Poppins; 
    --button: 400 0.875rem/1rem Poppins; 
    --body1-regular: 400 1rem/1.5rem Poppins; 
    --body1-bold: 700 1rem/1.5rem Poppins; 
    --body2-bold: 700 0.875rem/1.5rem Poppins; 
    --body2-regular: 400 0.875rem/1.5rem Poppins; 
    --caption-regular: 400 0.75rem/1rem Poppins; 
    --caption-bold: 600 0.75rem/1rem Poppins; 
  }

  body{
    margin: 0;
    color: var(--white);
    background-color: var(--black);
  }

`


export default GlobalsStyles
