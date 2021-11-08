import {Request,Response} from 'express'
import AuthenticationUserService from '../../../services/AuthenticateUserService'
export default class SessionsController {
    public async create(request:Request, response:Response):Promise<Response>{


        const {email, password} = request.body

        const authenticateUser = new AuthenticationUserService()

        const {user, token} = await authenticateUser.execute({email, password})

         //@ts-expect-error
        delete user.password

        return response.json({user, token})

    }
}
