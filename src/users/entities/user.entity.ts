import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
import { Transform } from 'class-transformer';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullName: string;

  @Column({ nullable: true })
  dateOfBirth: string;

  @Column({ nullable: true })
  dateOfHiring: Date;

  @Column()
  department: string;

  @Column()
  title: string;

  @Column({ nullable: true })
  contractNo: string;

  @Column({ nullable: true })
  contractType: string;

  @Column()
  role: string;

  @Column({ nullable: true })
  phoneNumber: string;

  @Column({ nullable: true })
  address: string;

  @Column({ nullable: true })
  totalSalary: number;

  @Column({ nullable: true })
  vacationDays: number;

  @Column()
  username: string;

  @Column({ nullable: true })
  code: number;

  @Column({ nullable: true })
  pic: string;

  @Column({ nullable: true })
  signature: string;

  @Column()
  accessLevel: string;

  @Column()
  activeStatus: boolean;

  @Transform(({ value }) => value.toISOString()) // Format date to ISO string
  @Column({ nullable: true })
  lastLogin: Date;

  @Column('simple-array', { nullable: true })
  notes: string[];

  @Column('simple-array', { nullable: true })
  todos: string[];

  @Column('simple-array', { nullable: true })
  managerTasks: string[];

  @Column({ nullable: true })
  userShortcut: string;

  // You can add additional entity configuration or methods here
}