import { LineChart } from 'react-native-wagmi-charts';
// import * as haptics from 'expo-haptics';



export const LineChartComponent = ({data}) => {
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