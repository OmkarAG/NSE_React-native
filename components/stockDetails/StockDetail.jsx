// import {useNavigation} from '@react-navigation/native';
import { Dimensions, Image, ScrollView, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-paper';
import { styles } from './styles';

import { useEffect, useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SingleCandleChart } from '../candleChart/CandleChart';
import { LineChartComponent } from '../lineChart/LineChart';
import { allCandleData, allData, dailyCandleData, dailyData, hourlyCandleData, hourlyData, monthlyCandleData, monthlyData, yearlyCandleData, yearlyData } from '../lineChart/graphData';
import { StockDetailsTabs } from '../Tabs/stockDetailsTabs/StockDetailsTabs';



export const StockDetails = ({ navigation, route }) => {
  const [candleChart, setCandleChart] = useState(false)
  const [lineChart, setLineChart] = useState(false)
  const [activeBtn, setActiveBtn] = useState('1H')
  const [chartData, setChartData] = useState(hourlyData)
  const [candleChartData, setCandleChartData] = useState(hourlyCandleData)
  const [isPositive, setIsPositive] = useState(true)

  const stock = route.params.stock;
  console.log("stock -", stock)
  useEffect(() => {
    navigation.setOptions({
      title: stock.symbol,
      headerTintColor: '#daa520',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    });
  }, [stock, navigation]);


  return (
    // <GestureHandlerRootView>
    <>
      <ScrollView>
        <View style={{ padding: 10, flex: 1, }}>
          <View style={styles.stockNameWrapper}>
            <Text style={styles.stockName}>{`${stock?.name || stock?.index}`}</Text>
            {/* <Text style={styles.price}>{`RS. ${stock.price}`}</Text> */}
          </View>

          <View style={styles.stockDetailsWrapper}>
            <View style={styles.stockPriceWrapper}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 38 }} onPress={() => setIsPositive(!isPositive)}>4782.25</Text>
                {
                  isPositive ?
                    (
                      <Image source={require('../../assets/uptriangle.png')} style={{ width: 20, height: 20 }}></Image>
                    ) : (
                      <Image source={require('../../assets/downTrangle.png')} style={{ width: 20, height: 20 }}></Image>
                    )
                }
              </View>
              <View>
                <Text style={{ color: 'green', fontSize: 25 }}>95.66 (2.05%)</Text>
              </View>
            </View>
            <View>
              <View style={styles.stockDetailTextWrapper}>
                <Text style={{ color: 'white' }}>PREV. CLOSE</Text>
                <Text style={{ color: '#F7C783' }}>4687.50</Text>
              </View>
              <View style={styles.stockDetailTextWrapper}>
                <Text style={{ color: 'white' }}>OPEN</Text>
                <Text style={{ color: '#F7C783' }}>4687.50</Text>
              </View>
              <View style={styles.stockDetailTextWrapper}>
                <Text style={{ color: 'white' }}>HIGH</Text>
                <Text style={{ color: '#F7C783' }}>4687.50</Text>
              </View>
              <View style={styles.stockDetailTextWrapper}>
                <Text style={{ color: 'white' }}>LOW</Text>
                <Text style={{ color: '#F7C783' }}>4687.50</Text>
              </View>
              <View style={styles.stockDetailTextWrapper}>
                <Text style={{ color: 'white' }}>CLOSE</Text>
                <Text style={{ color: '#F7C783' }}>4687.50</Text>
              </View>
              <View style={styles.stockDetailTextWrapper}>
                <Text style={{ color: 'white' }}>VWAP</Text>
                <Text style={{ color: '#F7C783' }}>4687.50</Text>
              </View>
              <View style={styles.stockDetailTextWrapper}>
                <Text style={{ color: 'white' }}>ADJUSTED PRICE</Text>
                <Text style={{ color: '#F7C783' }}>4687.50</Text>
              </View>
            </View>
          </View>

          <View style={{marginVertical:15, borderRadius:5}}>
            <LineChartComponent />
          </View>

          <View style={{ height: 320 }}>
            <StockDetailsTabs />
          </View>

        </View>
      </ScrollView>
      <View style={styles.BottomButtonsWrapper}>
        {/* <TouchableOpacity style={[styles.bottomButton, { flex: 1 }]} onPress={() => navigation.navigate('LineChart')}>
          <Text style={styles.buttonText} >Graph</Text>
        </TouchableOpacity> */}
        <TouchableOpacity style={[styles.bottomButton, { flex: 1 }]} onPress={() => navigation.navigate('OptionChain')}>
          <Text style={styles.buttonText} >Option Chain</Text>
        </TouchableOpacity>
      </View>
      {/* </GestureHandlerRootView> */}
    </>
  );
};
