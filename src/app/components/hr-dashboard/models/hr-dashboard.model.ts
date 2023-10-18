import { PaginatedData } from 'src/app/models/global.model';
import { IJobLevel } from '../../employee-management/models/employee-management.model';

export interface ITopPerformerParams {
  pageNo?: number;
  pageSize?: number;
}

export interface ITopPerformer {
  employee: {
    firstName?: string;
    lastName?: string;
  };
  finalAssessment?: number;
}

export interface ITopPerformerApiResponse {
  employeesPerformance: PaginatedData<ITopPerformer>;
}

export interface ICompetencyIncompletionStatus {
  department: { departmentName: string };
  employeePercentage: number;
  evaluatorPercentage: number;
}

export interface ICompanyCompletion {
  label: string;
  data: number;
}
export interface ICompetencyIncompletionApiResponse {
  departmentInComplete: ICompetencyIncompletionStatus[];
  companyInComplete: ICompanyCompletion[];
}

export interface ICompetencyByLevelAndPositionParams {
  positionId?: number;
  competencyCycleId?: number;
}
export interface IAvgCompetencyScore {
  jobLevel: IJobLevel;
  competency: {
    competencyName: string;
  };
  average: number;
}
export interface IAvgCompetencyScoreApiResponse {
  avgCompetencyScore: IAvgCompetencyScore[];
}

export interface ICompetencyByUnitParams {
  competencyCyclesId: number[];
  departmentId: number;
}

export interface ICompetencyByUnitApiResponse {
  competencyRadarChart: ICompetencyByUnit;
}
export interface ICompetencyByUnit {
  labels: string[];
  datasets: {
    lineName: string;
    datasets: number[];
  }[];
}

export interface ICompetencyTimeline {
  competencyTimeLineName: string;
  startDate: string;
  dueDate: string;
  isDone: boolean;
}

export interface ICompetencyTimelineApiResponse {
  competencyTimeLine: ICompetencyTimeline[];
}

export interface ITopSkillset {
  skillSet: {
    skillSetName: string;
  };
  proficiencyLevel: {
    score: number;
  };
}

export interface ITopskillsetParams {
  pageNo?: number;
  pageSize?: number;
  competencyCycleId?: number;
}
export interface ITopSkillsetApiResponse {
  topHighestSkillSet: PaginatedData<ITopSkillset>;
}
