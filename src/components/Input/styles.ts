import styled,{css} from 'styled-components'

interface ContainerProps {
    isFocused: boolean;
    isFilled: boolean;
}

export const Container = styled.div<ContainerProps> `

background: #232129;
        border-radius: 10px;
        border: 2px solid #232129;
        padding: 16px;
        width: 100%;
        display: flex;
        align-items: center;
        color: #666360;

        & + div{
            margin-top: 8px;
        }
        ${props => props.isFocused && css`
            color: #ff9000;
            border-color: #ff9000;
        ` }

        ${props => props.isFilled && css`
            color: #ff9000;
        ` }

    input{
        background: transparent;
        outline: none;
        flex: 1;
        border: 0;
        color: #faede8;
        &::placeholder {
            color: #666360
        }


     }

     svg{
          margin-right: 16px;
     }
`
