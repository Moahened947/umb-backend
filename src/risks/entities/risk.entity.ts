import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Risk {
    @PrimaryGeneratedColumn()
    id: number;
    //
    @Column()
    policyNumber: string;

    @Column()
    insuredName: string;

  
    @Column()
    inusuranceOrBroker: string;
  
    @Column()
    quarter: string;

    @Column()
    country: string;

    @Column()
    currency: string;

    @Column()
    limitOfTreaty: string;

    @Column()
    dateFrom: Date;

    @Column({ default: false })
    isDateFromOpen: boolean;

    @Column()
    dateTo: Date;

    @Column({ default: false })
    isDateToOpen: boolean;

    @Column()
    pml: string;

    @Column()
    ppw: string;

    @Column()
    confirmation: string;

    @Column()
    closing: string;

    @Column('simple-array', { nullable: true })
    notes: string[];

    @Column()
    policyType: string;

    @Column()
    classOfBusiness: string;

    @Column()
    sumInsuredName: string;

    @Column()
    sumInsuredNumber: number;

    @Column('simple-array', { nullable: true })
    covers: string[];

    @Column('simple-array', { nullable: true })
    additionalCover: string[];

    @Column('simple-array', { nullable: true })
    Exclusion: string[];

    @Column()
    dateOfCurrency: Date;

    @Column()
    rateOfPolicyCurrencyVsUSD: number;

    @Column()
    rateOfLYDVsUSD: number;

    @Column()
    TSIPolicyCurrency: number;

    @Column()
    premiumPolicyCurrency: number;

    @Column({default: false})
    isAmountPolicyCurrency: boolean;

    @Column()
    ratePolicyCurrency: number;

    @Column()
    TSIPolicyCurrencyAcceptance: number;

    @Column()
    premiumPolicyCurrencyAcceptance: number;

    @Column({default: false})
    isAmountPolicyAcceptance: boolean;

    @Column()
    ourShare: number;

    @Column()
    brokerCommission: number;






}
