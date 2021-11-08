import Appointment from '../../../../models/Appointment'
import {EntityRepository, Repository} from 'typeorm'



@EntityRepository(Appointment)

class OldAppointmentsRepository extends Repository<Appointment>{

    public async findByDate(date: Date):Promise< Appointment | undefined> {
    /*    const findAppointment = this.appointments.find(appointment =>
          isEqual(date, appointment.date)
        ) */
        const findAppointment = await this.findOne({
            where: { date},
        })


        return findAppointment ;
    }


}

export default OldAppointmentsRepository
