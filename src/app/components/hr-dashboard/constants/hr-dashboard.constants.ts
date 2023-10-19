import { gql } from 'apollo-angular';
import { TableHeader } from 'src/app/models/global.model';

export const topSkillsTableCol: TableHeader[] = [
  { col: 'No.', field: 'no' },
  { col: 'AVG Score', field: 'avgScore' },
  { col: 'Skill', field: 'skill' },
];
export const topPerformersTableCol: TableHeader[] = [
  { col: 'No.', field: 'no' },
  { col: 'Rating', field: 'rating' },
  { col: 'Employee', field: 'employee' },
];
export const topCompetenciesTableCol: TableHeader[] = [
  { col: 'No.', field: 'no' },
  { col: 'Rating', field: 'rating' },
  { col: 'Employee', field: 'employee' },
];

export const nineGridLabels = {
  id: 'nineGridLabels',
  beforeDatasetsDraw: (chart: any) => {
    const {
      ctx,
      scales: { x, y },
    } = chart;

    const nineLabels = {
      labels: [
        { name: 'D', x: 16.65, y: 16.65 },
        { name: 'C', x: 16.65, y: 49.95 },
        { name: 'B', x: 16.65, y: 83.25 },
        { name: 'C', x: 49.95, y: 16.65 },
        { name: 'B', x: 49.95, y: 49.95 },
        { name: 'A', x: 49.95, y: 83.25 },
        { name: 'B', x: 83.25, y: 16.65 },
        { name: 'A', x: 83.25, y: 49.95 },
        { name: 'A', x: 83.25, y: 83.25 },
      ],
    };

    ctx.save();
    ctx.font = 'bold 12px sans-serif';
    ctx.fillStyle = '#0D78C9FF';
    ctx.textAlign = 'center';

    nineLabels.labels.forEach(label => {
      ctx.fillText(
        label.name,
        x.getPixelForValue(label.x),
        y.getPixelForValue(label.y),
      );
    });

    ctx.restore();

    ctx.fillStyle = 'black';
    ctx.textAlign = 'center';
    ctx.font = 'bold 12px sans-serif';

    ctx.fillText('Low', x.getPixelForValue(16.65), y.getPixelForValue(-4));
    ctx.fillText('Moderate', x.getPixelForValue(49.95), y.getPixelForValue(-4));
    ctx.fillText('High', x.getPixelForValue(83.25), y.getPixelForValue(-4));

    ctx.save();
    ctx.translate(x.getPixelForValue(-1), y.getPixelForValue(16.65));
    ctx.rotate(-Math.PI / 2);
    ctx.fillText('Low', 0, 0);
    ctx.restore();

    ctx.save();
    ctx.translate(x.getPixelForValue(-1), y.getPixelForValue(49.95));
    ctx.rotate(-Math.PI / 2);
    ctx.fillText('Moderate', 0, 0);
    ctx.restore();

    ctx.save();
    ctx.translate(x.getPixelForValue(-1), y.getPixelForValue(83.25));
    ctx.rotate(-Math.PI / 2);
    ctx.fillText('High', 0, 0);
    ctx.restore();
  },
};

export const GET_TOP_PERFORMERS = gql`
  query GetTopPerformers($pageNo: Int, $pageSize: Int) {
    employeesPerformance(pageNo: $pageNo, pageSize: $pageSize) {
      data {
        employee {
          firstName
          lastName
        }
        finalAssessment
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

export const GET_COMPETENCY_CYCLE_STATUS = gql`
  query GetCompetencyCycleStatus($competencyCycleId: Int!) {
    departmentInComplete(competencyCycleId: $competencyCycleId) {
      department {
        departmentName
      }
      employeePercentage
      evaluatorPercentage
    }

    companyInComplete(competencyCycleId: $competencyCycleId) {
      label
      data
    }
  }
`;

export const GET_COMPETENCY_BY_LEVEL_AND_POSITION = gql`
  query GetCmptByLevelAndPosition($positionId: Int!, $competencyCycleId: Int!) {
    avgCompetencyScore(
      positionId: $positionId
      competencyCycleId: $competencyCycleId
    ) {
      jobLevel {
        jobLevelName
      }
      competency {
        competencyName
      }
      average
    }
  }
`;

export const GET_COMPETENCY_BY_UNIT = gql`
  query GetCompetencyByUnit($competencyCyclesId: [Int]!, $departmentId: Int!) {
    competencyRadarChart(
      competencyCyclesId: $competencyCyclesId
      departmentId: $departmentId
    ) {
      labels
      datasets {
        lineName
        datasets
      }
    }
  }
`;

export const GET_COMPETENCY_TIMELINE = gql`
  query GetTimeline($competencyCycleId: Int!) {
    competencyTimeLine(competencyCycleId: $competencyCycleId) {
      competencyTimeLineName
      startDate
      dueDate
      isDone
    }
  }
`;

export const GET_TOP_SKILL_SETS = gql`
  query GetTopSkillset($competencyCycleId: Int!) {
    topHighestSkillSet(competencyCycleId: $competencyCycleId) {
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

export const GET_TOP_COMPETENCIES = gql`
  query GetTopCompetencies($pageNo: Int!, $pageSize: Int!){
    employeesCompetency(pageNo: $pageNo, pageSize: $pageSize) {
      data {
        employee {
          lastName
          firstName
        }
        rating
      }
      pagination {
        pageNo
        pageSize
        totalPages
        totalItems
      }
    }
  }
`

export const GET_COMPETENCY_CYCLES = gql`
  query GetCompetencyCyles {
    competencyCycles {
      id
      competencyCycleName
    }
  }
`;
