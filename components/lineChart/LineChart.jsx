import { LineChart } from 'react-native-wagmi-charts';
// import * as haptics from 'expo-haptics';

const data = [
  {
    timestamp: 1625945400000,
    value: 33575.25,
  },
  {
    timestamp: 1625946300000,
    value: 33545.25,
  },
  {
    timestamp: 1625947200000,
    value: 33510.25,
  },
  {
    timestamp: 1625948100000,
    value: 33215.25,
  },
  {
    timestamp: 1625948100000,
    value: 33215.25,
  },
  {
    timestamp: 1625948100000,
    value: 33215.25,
  },
  {
    timestamp: 1625948100000,
    value: 33215.25,
  },
  {
    timestamp: 1625948100000,
    value: 33215.25,
  }, {
    timestamp: 1625946300000,
    value: 33545.25,
  },
];

export const LineChartComponent = () => {
  return (
    <LineChart.Provider data={data}>
      <LineChart>
        <LineChart.Path />
        <LineChart.CursorCrosshair>
          <LineChart.Tooltip />
          <LineChart.Tooltip position="bottom">
            <LineChart.DatetimeText />
          </LineChart.Tooltip>
        </LineChart.CursorCrosshair>
      </LineChart>
    </LineChart.Provider>
  );
}