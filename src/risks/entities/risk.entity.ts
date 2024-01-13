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

    //========= PolicyCurrency ========//

    @Column()
    TSIPolicyCurrency: number;

    @Column()
    premiumPolicyCurrency: number;

    @Column()
    TSIAcceptancePolicyCurrency: number;

    @Column()
    premiumAcceptancePolicyCurrency: number;

    @Column({default: false})
    isAmountPolicyAcceptance: boolean;

    @Column()
    brokerAmountPolicyCurrency: number;

    @Column()
    facUmbrellaPolicyCurrency: number;

    @Column()
    umbrellaPremium50PolicyCurrency: number;
    
    @Column()
    retroPremium50PolicyCurrency:number;

    @Column()
    umbrellaCommisionPolicyCurrency: number;

    @Column()
    specialRetentionPolicyCurrency: number;


    //========= USD Currency ========//

    @Column()
    TSIUSD: number;

    @Column()
    premiumUSD: number;

    @Column()
    TSIAcceptanceUSD: number;

    @Column()
    premiumAcceptanceUSD: number;


    @Column()
    brokerAmountUSD: number;

    @Column()
    facUmbrellaUSD: number;

    @Column()
    umbrellaPremium50USD: number;
    
    @Column()
    retroPremium50USD:number;

    @Column()
    umbrellaCommisionUSD: number;

    @Column()
    specialRetentionUSD: number;

    //========= LYD Currency ========//

    @Column()
    TSILYD: number;

    @Column()
    premiumLYD: number;

    @Column()
    TSIAcceptanceLYD: number;

    @Column()
    premiumAcceptanceLYD: number;

    @Column()
    brokerAmountLYD: number;

    @Column()
    facUmbrellaLYD: number;

    @Column()
    umbrellaPremium50LYD: number;
    
    @Column()
    retroPremium50LYD:number;

    @Column()
    umbrellaCommisionLYD: number;

    @Column()
    specialRetentionLYD: number;

    // ================ //

    @Column({default: false})
    isAmountPolicyCurrency: boolean;

    @Column()
    rateOfPolicy: number;

    @Column()
    ourShare: number;
    
    @Column()
    brokerCommission: number;
    
    @Column({default:false})
    isFac: boolean;

    @Column({default:false})
    isApprove: boolean;

    @Column()
    issuedDate: Date;

    @Column()
    umbrellaReference: string;

    @Column()
    companyReference: string;

    @Column()
    employeeName: string;








}
