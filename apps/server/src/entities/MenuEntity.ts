import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('data')
export class Data {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ name: 'blurb', nullable: false })
    blurb: string;
    
    @Column({ name: 'missionstatement', nullable: false })
    missionStatement: string;

}