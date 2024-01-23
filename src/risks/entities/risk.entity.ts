import { Entity, Column, PrimaryGeneratedColumn,BeforeInsert } from 'typeorm';
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

    @Column({ nullable: true })
    dateFrom: Date;
  
    @BeforeInsert()
    setDateFromDefault() {
      if (!this.dateFrom) {
        this.dateFrom = new Date();
      }
    }

    @Column({ default: false })
    isDateFromOpen: boolean;

    @Column()
    TBAFrom: string;

    @Column({ nullable: true })
    dateTo: Date;
  
    @BeforeInsert()
    setDateToDefault() {
      if (!this.dateTo) {
        this.dateTo = new Date();
      }
    }

    @Column({ default: false })
    isDateToOpen: boolean;

    @Column()
    TBATo: string;

    @Column()
    pml: number;

    @Column()
    ppw: number;

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

    @Column('simple-array', { nullable: true })
    sumInsuredName: string[];

    @Column()
    sumInsuredNumber: number;

    @Column('simple-array', { nullable: true })
    covers: string[];

    @Column('simple-array', { nullable: true })
    additionalCover: string[];

    @Column('simple-array', { nullable: true })
    Exclusion: string[];

    @Column({ default:"" })
    dateOfCurrency: string;

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

    @Column({default:false})
    isSigntured: boolean


}
