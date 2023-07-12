import { BankDetails } from "./bank-details";
import { EducationDetails } from "./education-details";
import { IncomeDetails } from "./income-details";
import { KidDetails } from "./kid-details";
import { User } from "./user";

export class DataSummery {

    caseNum!:number;

    appRegDto!:User;

    planName!:string;

    incomeDto!:IncomeDetails;

    educationDto!:EducationDetails;

    bank!:BankDetails;

    childrenDtos!:KidDetails[];

    ssn!:number;
}
