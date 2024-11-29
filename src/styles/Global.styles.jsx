// It is a normal CSS
// Create const GlobalStyles, import and export default
// createGlobalStyle`` inside the backstick include everything it is wanted
// user-select: none;  --> user can not select anything in the app after including these, it is not possible to copy annythng for the app, text....
// Whenever it is wanted to reach the variables of theme, it hasto be called the theme as a function and reach the part of the variable that it is wanted
// When the breakpoint is got, it will be used the variable for breakpoint that it has been created in theme: (max-width:${({ theme }) => theme.breakpoint})  it is a function reaching the breakpoint in theme
// The gradient colour is including, it will be the main thing that it is seen for that reason the linear gradiente it will be in the first position and then the 2 images for everthing in the styling
// background-image: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/img/login1.png'), url('/img/login2.png'); to create a grey color gradient
// background-position: center, right top, bottom left; /* Adjust positions if necessary */  linear gradiente will be center and the rest will keep same

// .text-primary{
//     color: ${({ theme }) => theme.palette.primary.main}
// }

// To reach also props as variables you have to use as function like theme. There is an example in this project

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

*{
    margin:0;
    padding:0;
    box-sizing: border-box;
    user-select: none;
}

body{
    font-family: "Roboto", sans-serif;
    background-image: url('/img/login1.png'), url('/img/login2.png');
    background-repeat: no-repeat, no-repeat;
    background-size: auto, auto;
    background-position: right top, bottom left;
    background-attachment: fixed;

    @media screen and (max-width:${({ theme }) => theme.breakpoint}){
        background-image: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/img/login1.png'), url('/img/login2.png');
         background-size: cover, auto, auto; /* Adjust this as needed */
        background-position: center, right top, bottom left; /* Adjust positions if necessary */


    }
}



a{
    text-decoration: none;
}

button{
    padding: 0.5rem 1rem;
    color: white;
    font-size: 1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
input{
    height: 2.5rem;
    outline: none;
    border: 1px solid #ccc;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border-radius: 5px;
}

.text-center{
    text-align: center;
}

.text-primary{

    color: ${({ theme }) => theme.palette.primary.main}
}

.text-secondary{

 color: ${({ theme }) => theme.palette.secondary.main}
}


`;

export default GlobalStyles;
