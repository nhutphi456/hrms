import { PaginatedData } from "src/app/models/global.model";

export interface IEmployeeScoreTable {
  no: number;
  score: number;
  skillsetName: string;
}

export interface IEmployeeScoreParams {
    pageNo?: number;
    pageSize?: number;
    employeeId?: number;
}

export interface IEmployeeSkillScore {
    skillSet: {
        skillSetName: string
    }
    proficiencyLevel: {
        score: number
    }
}

export interface IEmployeeHighestSkillApiResponse {
    topHighestSkillSetEmployee: PaginatedData<IEmployeeSkillScore>
}

export interface IEmployeeImproveSkillApiResponse {
    topKeenSkillSetEmployee: PaginatedData<IEmployeeSkillScore>
}
export interface IEmployeeTargetSkillApiResponse {
    topHighestSkillSetTargetEmployee: PaginatedData<IEmployeeSkillScore>
}