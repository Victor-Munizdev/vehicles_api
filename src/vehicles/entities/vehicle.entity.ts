import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('vehicles')
export class Vehicle {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  marca: string;

  @Column({ nullable: false })
  modelo: string;

  @Column('int')
  ano: number;
}