import { gql } from 'apollo-angular';
import { TableHeader } from 'src/app/models/global.model';

export const topSkillsetTableCol: TableHeader[] = [
  { col: 'No.', field: 'no' },
  { col: 'Score', field: 'score' },
  { col: 'Skill sets', field: 'skillsetName' },
];
export const defaultTable = {
  pagination: {
    pageNo: 0,
    pageSize: 0,
    totalItems: 0,
    totalPages: 0,
  },
  data: [],
};
export const GET_EMPLOYEE_HIGHEST_SKILL = gql`
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

export const GET_EMPLOYEE_IMPROVE_SKILL = gql`
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

export const GET_EMPLOYEE_TARGET_SKILL = gql`
  query GetTargetSkill(
    $employeeId: Int!
    $pageNo: pageNo
    $pageSize: pageSize
  ) {
    topHighestSkillSetTargetEmployee(
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