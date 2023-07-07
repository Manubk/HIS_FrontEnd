import { BankDetails } from "./bank-details";
import { EducationDetails } from "./education-details";
import { IncomeDetails } from "./income-details";
import { KidDetails } from "./kid-details";

export class DataSummery {

    caseNum!:number;

    planName!:string;

    incomeDetails!:IncomeDetails;

    educationDetails!:EducationDetails;

    bankDetails!:BankDetails;

    kids!:KidDetails;

    ssn!:number;
}
