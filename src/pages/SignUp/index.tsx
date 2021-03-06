import React, {useCallback, useRef} from 'react'
import {FiArrowLeft, FiMail, FiLock, FiUser} from 'react-icons/fi'
import {Container,Content,Background,AnimationContainer} from './styles'
import {Form} from '@unform/web'
import * as Yup from 'yup'
import {FormHandles} from '@unform/core'
import getValidationErrors from '../../utils/getValidationErrors'
import {Link, useHistory} from 'react-router-dom'
import Input from '../../components/Input'
import Button from '../../components/Button'
import api from '../../services/api'
import {useToast} from '../../context/ToastContext'

import logoImg from '../../assets/logo.svg'

interface SignUpFormData{
    name: string;
    email: string;
    password: string;
}

const SignUp:React.FC = () => {
    const formRef = useRef<FormHandles>(null)
    const {addToast} = useToast()
    const history = useHistory()


    const handleSubmit = useCallback(async(data: SignUpFormData) =>{
       try{
         const schema = Yup.object().shape({
             name: Yup.string().required('Nome obrigatório'),
             email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
             password: Yup.string().min(6, 'No mínimo 6 dígitos')
         })
         await schema.validate(data, {
             abortEarly: false, //will report all errors at once
         })

         await api.post('/users', data)

         history.push('/')

         addToast({
             type: 'success',
             title: 'Cadastro realizado',
             description: 'Você já pode fazer seu logon no GoBarber'
         })
       }
       catch(err){
          /* const errors = getValidationErrors(err)

           formRef.current?.setErrors(errors)*/
           addToast({
            type: 'error',
            title: 'Erro no cadastro',
            description: 'Ocorreu um erro ao fazer cadastro, tente novamente.'
           })

         /*  formRef.current?.setErrors({
               name: 'Nome obrigatório',
               email: 'Email obrigatório',
               password: 'Senha obrigatória'
           }) */
       }
    }, [addToast, history])

    return(
        <>
        <Container>
        <Background />
          <Content>
              <AnimationContainer>
             <img src={logoImg} alt="logo"/>

             <Form ref={formRef} onSubmit={handleSubmit}>
                 <h1>Faça seu cadastro</h1>

                 <Input  name="name" icon={FiUser} placeholder="Nome" />
                 <Input name="email" icon={FiMail} placeholder="E-mail" />

                 <Input icon={FiLock} name="password" type="password" placeholder="Senha" />
                 <Button type="submit">Cadastrar</Button>

             </Form>

             <Link to="/"><FiArrowLeft/>Voltar para logon</Link>
             </AnimationContainer>
          </Content>



        </Container>
      </>
    )
}





export default SignUp
