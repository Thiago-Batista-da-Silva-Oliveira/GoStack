import { Router } from 'express'

import appointmentsRouter from '../../../../modules/appointmets/infra/typeorm/entities/Http/routes/appointments.routes'
import sessionsRouter from '../../../../modules/users/infra/Http/routes/sessions.routes'
import usersRouter from '../../../../modules/users/infra/Http/routes/users.routes'

const routes = Router()

routes.use('/appointments', appointmentsRouter)
routes.use('/users', usersRouter)
routes.use('/sessions', sessionsRouter)

export default routes
