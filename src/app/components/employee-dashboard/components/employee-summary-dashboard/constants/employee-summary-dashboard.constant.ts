import { gql } from 'apollo-angular';
import { TableHeader } from 'src/app/models/global.model';

export const topSkillsetTableCol: TableHeader[] = [
  { col: 'No.', field: 'no' },
  { col: 'Score', field: 'score' },
  { col: 'Skill sets', field: 'skillsetName' },
];

export interface IEmployeeScore {
  no: number;
  score: number;
  skillsetName: string;
}

export const GET_HIGHEST_SKILL = gql`
  query GetHighestSkill($employeeId: Int!, $pageNo: Int, $pageSize: Int) {
    topHighestSkillSetEmployee(
      employeeId: $employeeId
      pageNo: $pageNo
      pageSize: $pageSize
    ) {
      data {
        skillSet {
          skillSetName
        }
        proficiencyLevel {
          score
        }
      }
      pagination {
        pageNo
        pageSize
        totalItems
        totalPages
      }
    }
  }
`;

export const GET_IMPROVE_SKILL = gql`
  query GetImproveSkill(
    $employeeId: Int!
    $pageNo: pageNo
    $pageSize: pageSize
  ) {
    topKeenSkillSetEmployee(
      employeeId: $employeeId
      pageNo: $pageNo
      pageSize: $pageSize
    ) {
      data {
        skillSet {
          skillSetName
        }
        proficiencyLevel {
          score
        }
      }
      pagination {
        pageNo
        pageSize
        totalItems
        totalPages
      }
    }
  }
`;
