export class CreateRiskDto {
  id: number;

  policyNumber: string;

  insuredName: string;

  inusuranceOrBroker: string;

  quarter: string;

  country: string;

  currency: string;

  limitOfTreaty: string;

  dateFrom: Date;

  isDateFromOpen: boolean;

  TBAFrom: string;

  dateTo: Date;

  isDateToOpen: boolean;

  TBATo: string;

  pml: number;

  ppw: number;

  confirmation: string;

  closing: string;

  notes: string[];

  policyType: string;

  classOfBusiness: string;

  sumInsuredName: string[];

  sumInsuredNumber: number;

  covers: string[];

  additionalCover: string[];

  Exclusion: string[];

  dateOfCurrency: string;

  rateOfPolicyCurrencyVsUSD: number;

  rateOfLYDVsUSD: number;

  //========= PolicyCurrency ========//

  TSIPolicyCurrency: number;

  premiumPolicyCurrency: number;

  TSIAcceptancePolicyCurrency: number;

  premiumAcceptancePolicyCurrency: number;

  isAmountPolicyAcceptance: boolean;

  brokerAmountPolicyCurrency: number;

  facUmbrellaPolicyCurrency: number;

  umbrellaPremium50PolicyCurrency: number;

  retroPremium50PolicyCurrency: number;

  umbrellaCommisionPolicyCurrency: number;

  specialRetentionPolicyCurrency: number;

  //========= USD Currency ========//

  TSIUSD: number;

  premiumUSD: number;

  TSIAcceptanceUSD: number;

  premiumAcceptanceUSD: number;

  brokerAmountUSD: number;

  facUmbrellaUSD: number;

  umbrellaPremium50USD: number;

  retroPremium50USD: number;

  umbrellaCommisionUSD: number;

  specialRetentionUSD: number;

  //========= LYD Currency ========//

  TSILYD: number;

  premiumLYD: number;

  TSIAcceptanceLYD: number;

  premiumAcceptanceLYD: number;

  brokerAmountLYD: number;

  facUmbrellaLYD: number;

  umbrellaPremium50LYD: number;

  retroPremium50LYD: number;

  umbrellaCommisionLYD: number;

  specialRetentionLYD: number;

  // ================ //

  isAmountPolicyCurrency: boolean;

  rateOfPolicy: number;

  ourShare: number;

  brokerCommission: number;

  isFac: boolean;

  isApprove: boolean;

  issuedDate: Date;

  umbrellaReference: string;

  companyReference: string;

  employeeName: string;

  isSigntured: boolean;
}
