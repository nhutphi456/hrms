import { PaginatedData } from "src/app/models/global.model";

export interface IEmployeeScore {
  no: number;
  score: number;
  skillsetName: string;
}

export interface IEmployeeScoreParams {
    pageNo?: number;
    pageSize?: number;
    employeeId?: number;
}

export interface IEmployeeHighestSkill {
    skillSet: {
        skillSetName: string
    }
    proficiencyLevel: {
        score: number
    }
}

export interface IEmployeeHighestSkillApiResponse {
    topHighestSkillSetEmployee: PaginatedData<IEmployeeHighestSkill>
}