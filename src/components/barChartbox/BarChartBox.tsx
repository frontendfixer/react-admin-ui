import './barChartBox.scss';

import { Bar, BarChart, ResponsiveContainer, Tooltip } from 'recharts';

type Props = {
  title: string;
  dataKey: string;
  chartData: object[];
  color: string;
};

function BarChartBox(props: Props) {
  return (
    <div className="barChartBox">
      <h2>{props.title}</h2>
      <div className="chart">
        <ResponsiveContainer width="99%" height={150}>
          <BarChart data={props.chartData}>
            <Tooltip
              contentStyle={{ backgroundColor: '#213447', borderRadius: '5px' }}
              labelStyle={{ display: 'none' }}
              cursor={{ fill: 'none' }}
            />
            <Bar dataKey={props.dataKey} fill={props.color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default BarChartBox;
