import CreateUserService from '@modules/users/services/CreateUserService'
import UpdateUserAvatarService from '@modules/users/services/UpdateUserAvatarService'
import {Request,Response} from 'express'

export default class UserAvatarController {
    public async update(request:Request, response:Response):Promise<Response>{

        const updateUserAvatar = new UpdateUserAvatarService()

        const user = await updateUserAvatar.execute({
            user_id: request.user.id,
            avatarFilename: request.file?.filename,
        })
        //@ts-expect-error
        delete user.password

        return response.json(user)


    }
}
