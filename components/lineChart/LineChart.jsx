import { useEffect, useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { LineChart } from 'react-native-wagmi-charts';
import { allCandleData, allData, dailyCandleData, dailyData, hourlyCandleData, hourlyData, monthlyCandleData, monthlyData, yearlyCandleData, yearlyData } from './graphData';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles';
import { SingleCandleChart } from '../candleChart/CandleChart';
import { useNavigation } from '@react-navigation/native';
// import * as haptics from 'expo-haptics';
import io from 'socket.io-client';



export const LineChartComponent = ({ homePage }) => {

  const [chartData, setChartData] = useState(hourlyData)
  const [activeBtn, setActiveBtn] = useState('1H')
  const [lineChart, setLineChart] = useState(false)
  const [candleChart, setCandleChart] = useState(false)

  const [candleChartData, setCandleChartData] = useState(hourlyCandleData)
  const [dataArray, setDataArray] = useState([]);
  const [candleDataArray, setCandleDataArray] = useState([]);

  const navigation = useNavigation()

  var i = 0;
  var j = 0;

  // useEffect(() => {
  //   console.warn('Connecting to socket...');
  //   const socket = io.connect('http://192.168.29.5:3000');
  //   console.warn('Socket connected:', socket.id);

  //   socket.on('updateData', (data) => {
  //     // console.log('Received data:', data);
  //     setDataArray(data);
  //   });

  //   // socket.on('updateCandleData', (data) => {
  //   //   console.log('Received data:', data);
  //   //   setCandleDataArray(data);
  //   // });

  //   return () => {
  //     console.warn('Disconnecting from socket...');
  //     socket.disconnect();
  //   };
  // }, []);

  var data = [
    {
      timestamp: 1625946300000,
      value: 1,
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      const val = {
        timestamp: 1625946300000,
        value: i,
      };

      i++;

      setDataArray(prevData => [...prevData, val]);

      if (i == 5 || j == 21 || j == 2) {
        i = 2;
      }
      if (j == 10) {
        i = 0;
      }

      if (j == 30) {
        setDataArray([val])
        j = 0
        i = 0
      }

      j++
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  console.log("data", dataArray)

  useEffect(() => {
    navigation.setOptions({
      title: "Graph",
      headerTintColor: '#daa520',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    });
  }, [navigation]);

  const height = homePage ? 200 : 260
  return (
    <GestureHandlerRootView>
      {candleChart ? (

        <SingleCandleChart data={candleChartData} height={height} isHome={homePage} />
      ) : (

        homePage ? (
          <LineChart.Provider data={dataArray}>
            <LineChart height={height}>
              <LineChart.Path color='green' width={2} />
              <LineChart.CursorCrosshair>
                <LineChart.Tooltip />
                <LineChart.Tooltip position="bottom">
                  <LineChart.DatetimeText />
                </LineChart.Tooltip>
              </LineChart.CursorCrosshair>
            </LineChart>
          </LineChart.Provider>
        ) : (
          <LineChart.Provider data={chartData}>
            <LineChart height={height}>
              <LineChart.Path color='green' width={2} />
              <LineChart.CursorCrosshair>
                <LineChart.Tooltip />
                <LineChart.Tooltip position="bottom">
                  <LineChart.DatetimeText />
                </LineChart.Tooltip>
              </LineChart.CursorCrosshair>
            </LineChart>
          </LineChart.Provider>
        )


      )}
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 5, marginTop: 20 }}>
        <Text style={[activeBtn == "1H" ? styles.activeBtn : null, { width: 35, textAlign: 'center' }]} onPress={() => { setActiveBtn("1H"), setChartData(hourlyData), setCandleChartData(hourlyCandleData) }}>1H</Text>
        <Text style={[activeBtn == "1D" ? styles.activeBtn : null, { width: 35, textAlign: 'center' }]} onPress={() => { setActiveBtn("1D"), setChartData(dailyData), setCandleChartData(dailyCandleData) }}>1D</Text>
        <Text style={[activeBtn == "1M" ? styles.activeBtn : null, { width: 35, textAlign: 'center' }]} onPress={() => { setActiveBtn("1M"), setChartData(monthlyData), setCandleChartData(monthlyCandleData) }}>1M</Text>
        <Text style={[activeBtn == "1Y" ? styles.activeBtn : null, { width: 35, textAlign: 'center' }]} onPress={() => { setActiveBtn("1Y"), setChartData(yearlyData), setCandleChartData(yearlyCandleData) }}>1Y</Text>
        <Text style={[activeBtn == "All" ? styles.activeBtn : null, { width: 35, textAlign: 'center' }]} onPress={() => { setActiveBtn("All"), setChartData(allData), setCandleChartData(allCandleData) }}>All</Text>
        <TouchableOpacity onPress={() => { setCandleChart(!candleChart); setLineChart(!lineChart) }}>
          {
            lineChart ? (
              <Image source={require('../../assets/line.png')} style={{ width: 20, height: 20 }} ></Image>
            ) : (
              <Image source={require('../../assets/technical.png')} style={{ width: 20, height: 20 }} ></Image>
            )
          }
        </TouchableOpacity>
      </View>
    </GestureHandlerRootView>
  );
}