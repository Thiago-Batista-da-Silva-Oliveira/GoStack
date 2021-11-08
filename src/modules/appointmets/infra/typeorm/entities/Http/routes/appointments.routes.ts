import {Router} from 'express'
import AppointmentsController from '../controllers/AppointmentsController'
import ensureAuthenticated from '../../../../../../users/infra/Http/middlewares/ensureAuthenticated'
import { getCustomRepository } from 'typeorm'
import AppointmentsRepository from '../../../repositories/AppointmentsRepository'
import OldAppointmentsRepository from '../../../OldAppointmentRepository'

const appointmentsRouter = Router()
const appointmentsController = new AppointmentsController()
appointmentsRouter.use(ensureAuthenticated) // will apply in every route

appointmentsRouter.get('/',async (request,response) => {
    const appointmentsRepository = getCustomRepository(OldAppointmentsRepository)
    const appointments = await appointmentsRepository.find()
    return response.json(appointments)

})

appointmentsRouter.post('/',appointmentsController.create )

export default appointmentsRouter
