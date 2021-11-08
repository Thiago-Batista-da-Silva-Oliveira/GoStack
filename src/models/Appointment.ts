//import {uuid} from 'uuidv4'
import {Entity,ManyToOne,JoinColumn, Column, PrimaryGeneratedColumn,CreateDateColumn,UpdateDateColumn} from 'typeorm'
//import User from '../../../../users/infra/typeorm/entities/User'
import User from 'models/User'
/*
 *Um para um (OneToOne)
 *Um para muitos (OneToMany)
 *Muitos para muitos (ManyToMany)
*/

@Entity('appointments')
class Appointment {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    provider_id: string;

    @ManyToOne(() => User)
    @JoinColumn({name: 'provider_id'})
    provider: User

    @Column('timestamp with time zone')
    date: Date;

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    /*constructor({provider,date} : Omit<Appointment,'id'>){
        this.id = uuid();
        this.provider = provider;
        this.date = date;
    } */

}

export default Appointment;
