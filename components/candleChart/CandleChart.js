import { useEffect, useState } from 'react';
import {CandlestickChart} from 'react-native-wagmi-charts';
import io from 'socket.io-client';



export const SingleCandleChart = ({data, height}) => {
  const [candleDataArray, setCandleDataArray] = useState([]);

  // useEffect(() => {
  //   console.warn('Connecting to socket...');
  //   const socket = io.connect('http://192.168.29.5:3000');
  //   // console.warn('Socket connected:', socket.id);

  //   // socket.on('updateData', (data) => {
  //   //   console.log('Received data:', data);
  //   //   setDataArray(data);
  //   // });

  //   socket.on('updateCandleData', (data) => {
  //     console.log('Received updateCandleData data:', data);
  //     setCandleDataArray(data);
  //   });

  //   return () => {
  //     console.warn('Disconnecting from socket...');
  //     socket.disconnect();
  //   };
  // }, []);

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
