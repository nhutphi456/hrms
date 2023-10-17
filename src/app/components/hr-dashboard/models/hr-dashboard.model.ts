import { PaginatedData } from 'src/app/models/global.model';

export interface ITopPerformerParams {
  performanceCycleId?: number;
  limit?: number;
}

export interface ITopPerformer {
  employee: {
    firstName?: string;
    lastName?: string;
  };
  finalAssessment?: number;
}

export interface ITopPerformerApiResponse {
  employeePerformance: PaginatedData<ITopPerformer>;
}
