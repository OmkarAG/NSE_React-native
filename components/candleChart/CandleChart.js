import {CandlestickChart} from 'react-native-wagmi-charts';



export const SingleCandleChart = ({data, height}) => {
  return (
    <CandlestickChart.Provider data={data}>
      <CandlestickChart height={height}>
        <CandlestickChart.Candles />
        <CandlestickChart.Crosshair>
          <CandlestickChart.Tooltip />
        </CandlestickChart.Crosshair>
      </CandlestickChart>
    </CandlestickChart.Provider>
  );
};
