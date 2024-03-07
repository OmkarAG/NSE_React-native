import {useEffect, useState} from 'react';
import {CandlestickChart} from 'react-native-wagmi-charts';
import io from 'socket.io-client';

export const SingleCandleChart = ({data, height, isHome}) => {
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

  var isred = true;

  var i = 0;
  var j = 0;

  const red = {
    timestamp: 1625946300000,
    open: 33545.25,
    high: 33560.52,
    low: 33510.12,
    close: 33520.11,
  };

  const green = {
    timestamp: 1625946300000,
    open: 33545.25,
    high: 33585.52,
    low: 33520.12,
    close: 33570.11,
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isred) {
        // candleData.push(red);
        setCandleDataArray(prev => [...prev, red]);
        console.log('red');
        isred = false;
      } else {
        // candleData.push(green);
        setCandleDataArray(prev => [...prev, green]);
        console.log('green');
        isred = true;
      }

      i++;
      j++;

      if (j == 25) {
        setCandleDataArray([green]);
        j = 0;
        i = 0;
      }
    }, 2000);

    // return () => clearInterval(intervalId);
  }, []);

  return isHome ? (
    <CandlestickChart.Provider data={candleDataArray}>
      <CandlestickChart height={height}>
        <CandlestickChart.Candles />
        <CandlestickChart.Crosshair>
          <CandlestickChart.Tooltip />
        </CandlestickChart.Crosshair>
      </CandlestickChart>
    </CandlestickChart.Provider>
  ) : (
    <CandlestickChart.Provider data={data}>
      <CandlestickChart height={height}>
        <CandlestickChart.Candles/>
        <CandlestickChart.Crosshair>
          <CandlestickChart.Tooltip />
        </CandlestickChart.Crosshair>
      </CandlestickChart>
    </CandlestickChart.Provider>
  );
};
