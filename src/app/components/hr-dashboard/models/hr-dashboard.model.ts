import { PaginatedData } from 'src/app/models/global.model';

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
export interface ICompetencyIncompletionApiResponse {
  departmentInComplete: ICompetencyIncompletionStatus[];
}
