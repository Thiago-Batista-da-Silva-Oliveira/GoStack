import React from 'react'
import {Container} from './styles'
import {useTransition} from 'react-spring'

import {ToastMessage, useToast} from '../../context/ToastContext'
import Toast from './Toast'

interface ToastContainerProps {
    messages: ToastMessage[]
}



const ToastContainer: React.FC<ToastContainerProps> = ({messages}) =>{



    return(
     <Container>
       {messages.map((message) => (
             <Toast key={message.id}  message={message} />
       ))}
     </Container>
 )
}

export default ToastContainer
