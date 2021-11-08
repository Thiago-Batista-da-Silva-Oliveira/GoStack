import styled, {keyframes} from 'styled-components'
import SignInBackgroundImg from '../../assets/sign-in-background.png'
import { shade } from 'polished'
export const Container = styled.div `
 height: 100vh;
 display: flex;
 align-items: stretch; /*estica os conteudos o máximo que puder */
`

export const Content = styled.div `
 display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;
 width: 100%;
 max-width: 700px;
`

const appearFromLeft = keyframes `
 from {
   opacity: 0;
   transform: translateX(-50px);
 }
 to{
    opacity: 1;
   transform: translateX(0;)
 }
`

export const AnimationContainer = styled.div `
 display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;

 animation: ${appearFromLeft} 1s;

 form{
    margin: 80px 0;
    width: 340px;
     text-align: center;

     h1{
         margin-bottom: 24px;

     }

     a{
         color: #F4EDE8;
         display: block;
         margin-top:24px;
         text-decoration: none;
         transition: color 0.2s;

         &:hover{
             color: ${shade(0.2), '#fa4de8'}
         }
     }
 }
 >a {
         color: #ff9000;
         display: block;
         margin-top:24px;
         text-decoration: none;
         transition: color 0.2s;
         display: flex;
         align-items: center;

         svg{
             margin-right: 16px;;
         }

         &:hover{
            color: ${shade(0.2, '#ff9000' )}
        }
 }
`
export const Background = styled.div `
flex: 1;
 background: url(${SignInBackgroundImg}) no-repeat center ;
 background-size: cover;
`