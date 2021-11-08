import React, { useCallback, useRef } from 'react'
import {FiLogIn, FiMail, FiLock} from 'react-icons/fi'
import {Container,Content,Background, AnimationContainer} from './styles'
import {Form} from '@unform/web'
import * as Yup from 'yup'
import Input from '../../components/Input'
import Button from '../../components/Button'
import {useAuth} from '../../context/AuthContext'
import {useToast} from '../../context/ToastContext'
import {Link, useHistory} from 'react-router-dom'

import logoImg from '../../assets/logo.svg'
import getValidationErrors from '../../utils/getValidationErrors'
import { FormHandles } from '@unform/core'

interface SignInFormData{
 email: string;
 password: string;
}

const SignIn:React.FC = () => {
    const formRef = useRef<FormHandles>(null)
    const {signIn, user} = useAuth()
    const {addToast} = useToast()
    const history = useHistory()

    console.log(user)

 const handleSubmit = useCallback(async(data: SignInFormData) =>{
       try{
         const schema = Yup.object().shape({
             email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
             password: Yup.string().required('Senha obrigatória')
         })
         await schema.validate(data, {
             abortEarly: false, //will report all errors at once
         })
         await signIn({
             email: data.email,
             password: data.password
         })
         history.push('/dashboard')
       }
       catch(err){
           console.log(err)
           addToast({
               type: 'error',
               title: 'Erro na autenticação',
               description: "Ocorreu um erro ao fazer login, cheque as credencias"
           })
          // const validationErrors ={}

        /*   if(err instanceof Yup.ValidationError){
               err.inner.forEach(error =>{
                   validationErrors[error.path] = error.message;
               })
               formRef.current?.setErrors(validationErrors)
        }


          /* const errors = getValidationErrors(err)

           formRef.current?.setErrors(errors)

         /*  formRef.current?.setErrors({
               name: 'Nome obrigatório',
               email: 'Email obrigatório',
               password: 'Senha obrigatória'
           }) */
       }
    }, [signIn, addToast,history])

     return (
     <>
       <Container>
         <Content>
             <AnimationContainer>
            <img src={logoImg} alt="logo"/>

            <Form ref={formRef} onSubmit={handleSubmit}>
                <h1>Faça seu logon</h1>


                <Input name="email" icon={FiMail} placeholder="E-mail" />
                <Input icon={FiLock} name="password" type="password" placeholder="Senha" />
                <Button type="submit">Entrar</Button>
                <a href="forgot">Esqueci minha senha</a>
            </Form>

            <Link to="/signup"><FiLogIn/>Criar conta</Link>
            </AnimationContainer>
         </Content>
         <Background />


       </Container>
     </>
     )
}

export default SignIn
