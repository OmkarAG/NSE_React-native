import { useEffect, useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { LineChart } from 'react-native-wagmi-charts';
import { allCandleData, allData, dailyCandleData, dailyData, hourlyCandleData, hourlyData, monthlyCandleData, monthlyData, yearlyCandleData, yearlyData } from './graphData';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles';
import { SingleCandleChart } from '../candleChart/CandleChart';
import { useNavigation } from '@react-navigation/native';
// import * as haptics from 'expo-haptics';



export const LineChartComponent = () => {

  const [chartData, setChartData] = useState(hourlyData)
  const [activeBtn, setActiveBtn] = useState('1H')
  const [lineChart, setLineChart] = useState(false)
  const [candleChart, setCandleChart] = useState(false)

  const [candleChartData, setCandleChartData] = useState(hourlyCandleData)

  const navigation = useNavigation()

  useEffect(() => {
    navigation.setOptions({
      title: "Graph",
      headerTintColor: '#daa520',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    });
  }, [navigation]);

  return (
    <GestureHandlerRootView>
      {candleChart ? (

        <SingleCandleChart data={candleChartData} />
      ) : (



        <LineChart.Provider data={chartData}>
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