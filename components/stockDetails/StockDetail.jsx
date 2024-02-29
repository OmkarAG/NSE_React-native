// import {useNavigation} from '@react-navigation/native';
import { Dimensions, Image, ScrollView, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-paper';
import { styles } from './styles';

import { useEffect, useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SingleCandleChart } from '../candleChart/CandleChart';
import { LineChartComponent } from '../lineChart/LineChart';

// line chart
const hourlyData = [
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
const dailyData = [
  {
    timestamp: 1625945400000,
    value: 33200.25,
  },
  {
    timestamp: 1625946300000,
    value: 33205.25,
  },
  {
    timestamp: 1625947200000,
    value: 33210.25,
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
    value: 33260.25,
  },
  {
    timestamp: 1625948100000,
    value: 33255.25,
  }, {
    timestamp: 1625946300000,
    value: 33290.25,
  },
];
const monthlyData = [
  {
    timestamp: 1625945400000,
    value: 33260.25,
  },
  {
    timestamp: 1625946300000,
    value: 33205.25,
  },
  {
    timestamp: 1625947200000,
    value: 33225.25,
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
    value: 33250.25,
  },
  {
    timestamp: 1625948100000,
    value: 33260.25,
  },
  {
    timestamp: 1625948100000,
    value: 33255.25,
  }, {
    timestamp: 1625946300000,
    value: 33290.25,
  },
];
const yearlyData = [
  {
    timestamp: 1625945400000,
    value: 33240.25,
  },
  {
    timestamp: 1625946300000,
    value: 33205.25,
  },
  {
    timestamp: 1625947200000,
    value: 33225.25,
  },
  {
    timestamp: 1625948100000,
    value: 33215.25,
  },
  {
    timestamp: 1625948100000,
    value: 33290.25,
  },
  {
    timestamp: 1625948100000,
    value: 33250.25,
  },
  {
    timestamp: 1625948100000,
    value: 33260.25,
  },
  {
    timestamp: 1625948100000,
    value: 33255.25,
  }, {
    timestamp: 1625946300000,
    value: 33200.25,
  },
];
const allData = [
  {
    timestamp: 1625945400000,
    value: 33190.25,
  },
  {
    timestamp: 1625946300000,
    value: 33205.25,
  },
  {
    timestamp: 1625947200000,
    value: 33180.25,
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
    value: 33150.25,
  },
  {
    timestamp: 1625948100000,
    value: 33260.25,
  },
  {
    timestamp: 1625948100000,
    value: 33255.25,
  }, {
    timestamp: 1625946300000,
    value: 33390.25,
  },
];

// candle chart

const hourlyCandleData = [
  {
    timestamp: 1625945400000,
    open: 33575.25,
    high: 33600.52,
    low: 33475.12,
    close: 33520.11,
  },
  {
    timestamp: 1625946300000,
    open: 33545.25,
    high: 33560.52,
    low: 33510.12,
    close: 33520.11,
  },
  {
    timestamp: 1625947200000,
    open: 33510.25,
    high: 33515.52,
    low: 33250.12,
    close: 33250.11,
  },
  {
    timestamp: 1625948100000,
    open: 33215.25,
    high: 33430.52,
    low: 33215.12,
    close: 33420.11,
  },
  {
    timestamp: 1625945400000,
    open: 33575.25,
    high: 33600.52,
    low: 33475.12,
    close: 33520.11,
  },
  {
    timestamp: 1625946300000,
    open: 33545.25,
    high: 33560.52,
    low: 33510.12,
    close: 33520.11,
  },
  {
    timestamp: 1625947200000,
    open: 33510.25,
    high: 33515.52,
    low: 33250.12,
    close: 33250.11,
  },
  {
    timestamp: 1625948100000,
    open: 33215.25,
    high: 33430.52,
    low: 33215.12,
    close: 33420.11,
  },
  {
    timestamp: 1625947200000,
    open: 33510.25,
    high: 33515.52,
    low: 33250.12,
    close: 33250.11,
  },
  {
    timestamp: 1625948100000,
    open: 33215.25,
    high: 33430.52,
    low: 33215.12,
    close: 33420.11,
  },
  {
    timestamp: 1625947200000,
    open: 33510.25,
    high: 33515.52,
    low: 33250.12,
    close: 33250.11,
  },
  {
    timestamp: 1625948100000,
    open: 33215.25,
    high: 33430.52,
    low: 33215.12,
    close: 33420.11,
  },
];
const dailyCandleData = [
  
  {
    timestamp: 1625947200000,
    open: 33510.25,
    high: 33515.52,
    low: 33250.12,
    close: 33250.11,
  },
  {
    timestamp: 1625948100000,
    open: 33215.25,
    high: 33430.52,
    low: 33215.12,
    close: 33420.11,
  },
  {
    timestamp: 1625947200000,
    open: 33510.25,
    high: 33515.52,
    low: 33250.12,
    close: 33250.11,
  },
  {
    timestamp: 1625948100000,
    open: 33215.25,
    high: 33430.52,
    low: 33215.12,
    close: 33420.11,
  },
  {
    timestamp: 1625947200000,
    open: 33510.25,
    high: 33515.52,
    low: 33250.12,
    close: 33250.11,
  },
  {
    timestamp: 1625948100000,
    open: 33215.25,
    high: 33430.52,
    low: 33215.12,
    close: 33420.11,
  },
];
const monthlyCandleData = [
  
  {
    timestamp: 1625947200000,
    open: 33510.25,
    high: 33515.52,
    low: 33250.12,
    close: 33250.11,
  },
  {
    timestamp: 1625948100000,
    open: 33215.25,
    high: 33430.52,
    low: 33215.12,
    close: 33420.11,
  },
  {
    timestamp: 1625947200000,
    open: 33510.25,
    high: 33515.52,
    low: 33250.12,
    close: 33250.11,
  },
  {
    timestamp: 1625948100000,
    open: 33215.25,
    high: 33430.52,
    low: 33215.12,
    close: 33420.11,
  },
];
const yearlyCandleData = [
  
  {
    timestamp: 1625947200000,
    open: 33510.25,
    high: 33515.52,
    low: 33250.12,
    close: 33250.11,
  },
  {
    timestamp: 1625947200000,
    open: 33510.25,
    high: 33515.52,
    low: 33250.12,
    close: 33250.11,
  },
  {
    timestamp: 1625947200000,
    open: 33510.25,
    high: 33515.52,
    low: 33250.12,
    close: 33250.11,
  },
  {
    timestamp: 1625948100000,
    open: 33215.25,
    high: 33430.52,
    low: 33215.12,
    close: 33420.11,
  },
  {
    timestamp: 1625947200000,
    open: 33510.25,
    high: 33515.52,
    low: 33250.12,
    close: 33250.11,
  },
  {
    timestamp: 1625948100000,
    open: 33215.25,
    high: 33430.52,
    low: 33215.12,
    close: 33420.11,
  },
  {
    timestamp: 1625947200000,
    open: 33510.25,
    high: 33515.52,
    low: 33250.12,
    close: 33250.11,
  },
  {
    timestamp: 1625948100000,
    open: 33215.25,
    high: 33430.52,
    low: 33215.12,
    close: 33420.11,
  },
];
const allCandleData = [
  
  {
    timestamp: 1625947200000,
    open: 33510.25,
    high: 33515.52,
    low: 33250.12,
    close: 33250.11,
  },
  {
    timestamp: 1625948100000,
    open: 33215.25,
    high: 33430.52,
    low: 33215.12,
    close: 33420.11,
  },
  {
    timestamp: 1625947200000,
    open: 33510.25,
    high: 33515.52,
    low: 33250.12,
    close: 33250.11,
  },
  {
    timestamp: 1625948100000,
    open: 33215.25,
    high: 33430.52,
    low: 33215.12,
    close: 33420.11,
  },
  {
    timestamp: 1625947200000,
    open: 33510.25,
    high: 33515.52,
    low: 33250.12,
    close: 33250.11,
  },
  {
    timestamp: 1625948100000,
    open: 33215.25,
    high: 33430.52,
    low: 33215.12,
    close: 33420.11,
  },
  {
    timestamp: 1625947200000,
    open: 33510.25,
    high: 33515.52,
    low: 33250.12,
    close: 33250.11,
  },
  {
    timestamp: 1625948100000,
    open: 33215.25,
    high: 33430.52,
    low: 33215.12,
    close: 33420.11,
  },
  {
    timestamp: 1625947200000,
    open: 33510.25,
    high: 33515.52,
    low: 33250.12,
    close: 33250.11,
  },
  {
    timestamp: 1625948100000,
    open: 33215.25,
    high: 33430.52,
    low: 33215.12,
    close: 33420.11,
  },
  {
    timestamp: 1625947200000,
    open: 33510.25,
    high: 33515.52,
    low: 33250.12,
    close: 33250.11,
  },
  {
    timestamp: 1625948100000,
    open: 33215.25,
    high: 33430.52,
    low: 33215.12,
    close: 33420.11,
  },
  {
    timestamp: 1625947200000,
    open: 33510.25,
    high: 33515.52,
    low: 33250.12,
    close: 33250.11,
  },
  {
    timestamp: 1625948100000,
    open: 33215.25,
    high: 33430.52,
    low: 33215.12,
    close: 33420.11,
  },
  {
    timestamp: 1625947200000,
    open: 33510.25,
    high: 33515.52,
    low: 33250.12,
    close: 33250.11,
  },
  {
    timestamp: 1625948100000,
    open: 33215.25,
    high: 33430.52,
    low: 33215.12,
    close: 33420.11,
  },
  {
    timestamp: 1625947200000,
    open: 33510.25,
    high: 33515.52,
    low: 33250.12,
    close: 33250.11,
  },
  {
    timestamp: 1625948100000,
    open: 33215.25,
    high: 33430.52,
    low: 33215.12,
    close: 33420.11,
  },
  {
    timestamp: 1625947200000,
    open: 33510.25,
    high: 33515.52,
    low: 33250.12,
    close: 33250.11,
  },
  {
    timestamp: 1625948100000,
    open: 33215.25,
    high: 33430.52,
    low: 33215.12,
    close: 33420.11,
  },
  {
    timestamp: 1625947200000,
    open: 33510.25,
    high: 33515.52,
    low: 33250.12,
    close: 33250.11,
  },
  {
    timestamp: 1625948100000,
    open: 33215.25,
    high: 33430.52,
    low: 33215.12,
    close: 33420.11,
  },
  {
    timestamp: 1625947200000,
    open: 33510.25,
    high: 33515.52,
    low: 33250.12,
    close: 33250.11,
  },
  {
    timestamp: 1625948100000,
    open: 33215.25,
    high: 33430.52,
    low: 33215.12,
    close: 33420.11,
  },
  {
    timestamp: 1625947200000,
    open: 33510.25,
    high: 33515.52,
    low: 33250.12,
    close: 33250.11,
  },
  {
    timestamp: 1625948100000,
    open: 33215.25,
    high: 33430.52,
    low: 33215.12,
    close: 33420.11,
  },
  {
    timestamp: 1625947200000,
    open: 33510.25,
    high: 33515.52,
    low: 33250.12,
    close: 33250.11,
  },
  {
    timestamp: 1625948100000,
    open: 33215.25,
    high: 33430.52,
    low: 33215.12,
    close: 33420.11,
  },
  {
    timestamp: 1625947200000,
    open: 33510.25,
    high: 33515.52,
    low: 33250.12,
    close: 33250.11,
  },
  {
    timestamp: 1625948100000,
    open: 33215.25,
    high: 33430.52,
    low: 33215.12,
    close: 33420.11,
  },
  {
    timestamp: 1625947200000,
    open: 33510.25,
    high: 33515.52,
    low: 33250.12,
    close: 33250.11,
  },
  {
    timestamp: 1625948100000,
    open: 33215.25,
    high: 33430.52,
    low: 33215.12,
    close: 33420.11,
  },
  {
    timestamp: 1625947200000,
    open: 33510.25,
    high: 33515.52,
    low: 33250.12,
    close: 33250.11,
  },
  {
    timestamp: 1625948100000,
    open: 33215.25,
    high: 33430.52,
    low: 33215.12,
    close: 33420.11,
  },
  {
    timestamp: 1625947200000,
    open: 33510.25,
    high: 33515.52,
    low: 33250.12,
    close: 33250.11,
  },
  {
    timestamp: 1625948100000,
    open: 33215.25,
    high: 33430.52,
    low: 33215.12,
    close: 33420.11,
  },
  {
    timestamp: 1625947200000,
    open: 33510.25,
    high: 33515.52,
    low: 33250.12,
    close: 33250.11,
  },
  {
    timestamp: 1625948100000,
    open: 33215.25,
    high: 33430.52,
    low: 33215.12,
    close: 33420.11,
  },
  {
    timestamp: 1625947200000,
    open: 33510.25,
    high: 33515.52,
    low: 33250.12,
    close: 33250.11,
  },
  {
    timestamp: 1625948100000,
    open: 33215.25,
    high: 33430.52,
    low: 33215.12,
    close: 33420.11,
  },
  {
    timestamp: 1625947200000,
    open: 33510.25,
    high: 33515.52,
    low: 33250.12,
    close: 33250.11,
  },
  {
    timestamp: 1625948100000,
    open: 33215.25,
    high: 33430.52,
    low: 33215.12,
    close: 33420.11,
  },
  {
    timestamp: 1625947200000,
    open: 33510.25,
    high: 33515.52,
    low: 33250.12,
    close: 33250.11,
  },
  {
    timestamp: 1625948100000,
    open: 33215.25,
    high: 33430.52,
    low: 33215.12,
    close: 33420.11,
  },
  {
    timestamp: 1625947200000,
    open: 33510.25,
    high: 33515.52,
    low: 33250.12,
    close: 33250.11,
  },
  {
    timestamp: 1625948100000,
    open: 33215.25,
    high: 33430.52,
    low: 33215.12,
    close: 33420.11,
  },
  {
    timestamp: 1625947200000,
    open: 33510.25,
    high: 33515.52,
    low: 33250.12,
    close: 33250.11,
  },
  {
    timestamp: 1625948100000,
    open: 33215.25,
    high: 33430.52,
    low: 33215.12,
    close: 33420.11,
  },
  {
    timestamp: 1625947200000,
    open: 33510.25,
    high: 33515.52,
    low: 33250.12,
    close: 33250.11,
  },
  {
    timestamp: 1625948100000,
    open: 33215.25,
    high: 33430.52,
    low: 33215.12,
    close: 33420.11,
  },
  {
    timestamp: 1625947200000,
    open: 33510.25,
    high: 33515.52,
    low: 33250.12,
    close: 33250.11,
  },
  {
    timestamp: 1625948100000,
    open: 33215.25,
    high: 33430.52,
    low: 33215.12,
    close: 33420.11,
  },
  {
    timestamp: 1625947200000,
    open: 33510.25,
    high: 33515.52,
    low: 33250.12,
    close: 33250.11,
  },
  {
    timestamp: 1625948100000,
    open: 33215.25,
    high: 33430.52,
    low: 33215.12,
    close: 33420.11,
  },
  {
    timestamp: 1625947200000,
    open: 33510.25,
    high: 33515.52,
    low: 33250.12,
    close: 33250.11,
  },
  {
    timestamp: 1625948100000,
    open: 33215.25,
    high: 33430.52,
    low: 33215.12,
    close: 33420.11,
  },
  {
    timestamp: 1625947200000,
    open: 33510.25,
    high: 33515.52,
    low: 33250.12,
    close: 33250.11,
  },
  {
    timestamp: 1625948100000,
    open: 33215.25,
    high: 33430.52,
    low: 33215.12,
    close: 33420.11,
  },
  {
    timestamp: 1625947200000,
    open: 33510.25,
    high: 33515.52,
    low: 33250.12,
    close: 33250.11,
  },
  {
    timestamp: 1625948100000,
    open: 33215.25,
    high: 33430.52,
    low: 33215.12,
    close: 33420.11,
  },
];

export const StockDetails = ({ navigation, route }) => {
  const [candleChart, setCandleChart] = useState(true)
  const [lineChart, setLineChart] = useState(true)
  const [activeBtn, setActiveBtn] = useState('1H')
  const [chartData, setChartData] = useState(hourlyData)
  const [candleChartData, setCandleChartData] = useState(hourlyCandleData)

  const stock = route.params.stock;

  useEffect(() => {
    navigation.setOptions({
      title: stock.symbol,
    });
  }, [stock, navigation]);
  // const chartConfig = {
  //   backgroundGradientFrom: '#1E2923',
  //   backgroundGradientFromOpacity: 0,
  //   backgroundGradientTo: '#08130D',
  //   backgroundGradientToOpacity: 0.5,
  //   color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  //   strokeWidth: 2, // optional, default 3
  //   barPercentage: 0.5,
  //   useShadowColorFromDataset: false, // optional
  // };
  return (
    <GestureHandlerRootView>
      <ScrollView>
        <View style={{ padding: 10 }}>
          <View style={styles.head}>
            <Text style={styles.name}>{`${stock.name}`}</Text>
            <Text style={styles.price}>{`RS. ${stock.price}`}</Text>
          </View>
          <View>
            <Text style={styles.changes}>{`${stock.change} Today`}</Text>
          </View>
          <View style={{ paddingBottom: 10, paddingTop: 10 }}>
            {candleChart ? (

              <SingleCandleChart data={candleChartData} />
            ) : (

              <LineChartComponent data={chartData} />
            )

            }
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 5, marginTop: 20 }}>
              <Text style={[activeBtn == "1H" ? styles.activeBtn : null, { width: 35, textAlign: 'center' }]} onPress={() => { setActiveBtn("1H"), setChartData(hourlyData),setCandleChartData(hourlyCandleData) }}>1H</Text>
              <Text style={[activeBtn == "1D" ? styles.activeBtn : null, { width: 35, textAlign: 'center' }]} onPress={() => { setActiveBtn("1D"), setChartData(dailyData),setCandleChartData(dailyCandleData) }}>1D</Text>
              <Text style={[activeBtn == "1M" ? styles.activeBtn : null, { width: 35, textAlign: 'center' }]} onPress={() => { setActiveBtn("1M"), setChartData(monthlyData), setCandleChartData(monthlyCandleData) }}>1M</Text>
              <Text style={[activeBtn == "1Y" ? styles.activeBtn : null, { width: 35, textAlign: 'center' }]} onPress={() => { setActiveBtn("1Y"), setChartData(yearlyData),setCandleChartData(yearlyCandleData) }}>1Y</Text>
              <Text style={[activeBtn == "All" ? styles.activeBtn : null, { width: 35, textAlign: 'center' }]} onPress={() => { setActiveBtn("All"), setChartData(allData),setCandleChartData(allCandleData) }}>All</Text>
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

            {/* <LineChart
          data={{
            labels: ['9.30 AM', '11.00 AM', '12.30 AM', '2.00 AM', '3.30 AM'],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                ],
              },
            ],
          }}
          width={Dimensions.get('window').width} // from react-native
          height={220}
          yAxisLabel="RS "
          // yAxisSuffix="k"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: '#e26a00',
            backgroundGradientFrom: '#fb8c00',
            backgroundGradientTo: '#ffa726',
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '6',
              strokeWidth: '2',
              stroke: '#ffa726',
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        /> */}
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.buy}>
              <Text style={{ color: 'white' }}>ADD WATCHLIST</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sell}>
              <Text style={{ color: 'white' }}>ADD PORTFOLIO</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.container}>
            <View style={styles.row}>
              <Text style={styles.label}>Market Cap</Text>
              <Text style={styles.value}>{stock.fundamentals.market_cap}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>PE Ratio</Text>
              <Text style={styles.value}>{stock.fundamentals.PE_Ratio}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>PB Ratio</Text>
              <Text style={styles.value}>{stock.fundamentals.PB_Ratio}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Industry PE</Text>
              <Text style={styles.value}>{stock.fundamentals.Industry_PE}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Debt To Equety</Text>
              <Text style={styles.value}>{stock.fundamentals.Debt_to_eq}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>ROE</Text>
              <Text style={styles.value}>{stock.fundamentals.ROE}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>EPS</Text>
              <Text style={styles.value}>{stock.fundamentals.EPS}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Div Yield</Text>
              <Text style={styles.value}>{stock.fundamentals.Div_yield}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Book Value</Text>
              <Text style={styles.value}>{stock.fundamentals.Book_value}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Face Value</Text>
              <Text style={styles.value}>{stock.fundamentals.Face_value}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
};
