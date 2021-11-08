import { getRepository} from 'typeorm';
//import authConfig from '../../../config/auth'
import IMailProvider from '@shared/providers/MailProvider/models/IMailProvider'
//import AppError from '../../../shared/erros/AppError'
import User from '../../../models/User';
import { isNumberObject } from 'util/types';
import {injectable, inject} from 'tsyringe'

interface IRequest{
    email: string;
}

@injectable()
class SendForgotPasswordEmailService{

    public async execute({email}:IRequest): Promise<void> {

          const usersRepository = getRepository(User)

           this.mailProvider.sendMail(email, '')


        }
}


export default  SendForgotPasswordEmailService
