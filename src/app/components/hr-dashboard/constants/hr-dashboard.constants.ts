import { TableHeader } from 'src/app/models/global.model';

export const topSkillsTableCol: TableHeader[] = [
  { col: 'No', field: 'no' },
  { col: 'AVG Score', field: 'avgScore' },
  { col: 'Skill', field: 'skill' },
];
export const topPerformersTableCol: TableHeader[] = [
  { col: 'No', field: 'no' },
  { col: 'Rating', field: 'rating' },
  { col: 'Employee', field: 'employee' },
];
export const topCompetenciesTableCol: TableHeader[] = [
  { col: 'No', field: 'no' },
  { col: 'Rating', field: 'rating' },
  { col: 'Employee', field: 'employee' },
];

export const nineGridLabels = {
  id: 'nineGridLabels',
  beforeDatasetsDraw: (chart: any, args: any, plugins: any) => {
    const {
      ctx,
      chartArea: { top, bottom, left, right },
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
    ctx.translate(x.getPixelForValue(-2), y.getPixelForValue(16.65));
    ctx.rotate(-Math.PI / 2);
    ctx.fillText('Low', 0, 0);
    ctx.restore();

    ctx.save();
    ctx.translate(x.getPixelForValue(-2), y.getPixelForValue(49.95));
    ctx.rotate(-Math.PI / 2);
    ctx.fillText('Moderate', 0, 0);
    ctx.restore();

    ctx.save();
    ctx.translate(x.getPixelForValue(-2), y.getPixelForValue(83.25));
    ctx.rotate(-Math.PI / 2);
    ctx.fillText('High', 0, 0);
    ctx.restore();
  },
};
