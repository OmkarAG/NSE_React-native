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

  useEffect(() => {
    navigation.setOptions({
      title: stock.symbol,
      headerTintColor: '#daa520',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
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
    // <GestureHandlerRootView>
    <>
      <ScrollView>
        <View style={{ padding: 10, flex: 1, }}>
          <View style={styles.stockNameWrapper}>
            <Text style={styles.stockName}>{`${stock.name || stock.index}`}</Text>
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




          {/* <View>
            <Text style={styles.changes}>{`${stock.change} Today`}</Text>
          </View> */}
          <View style={{ paddingBottom: 10, paddingTop: 10 }}>
            {/* {candleChart ? (

              <SingleCandleChart data={candleChartData} />
            ) : (

              <LineChartComponent data={chartData} />
            )

            }
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
            </View> */}

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
          {/* <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.buy}>
              <Text style={{ color: 'white' }}>ADD WATCHLIST</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sell}>
              <Text style={{ color: 'white' }}>ADD PORTFOLIO</Text>
            </TouchableOpacity>
          </View> */}
          {/* <View style={styles.container}>
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
          </View> */}



          <View style={{ height: 300 }}>
            <StockDetailsTabs />
          </View>

        </View>
      </ScrollView>
      <View style={styles.BottomButtonsWrapper}>
        <TouchableOpacity style={[styles.bottomButton, { flex: 1 }]}>
          <Text style={styles.buttonText} onPress={() => navigation.navigate('LineChart')}>Graph</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.bottomButton, { flex: 1 }]}>
          <Text style={styles.buttonText} onPress={() => navigation.navigate('OptionChain')}>Option Chain</Text>
        </TouchableOpacity>
      </View>
      {/* </GestureHandlerRootView> */}
    </>
  );
};
