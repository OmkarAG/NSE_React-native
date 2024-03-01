import React, { useEffect } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { Text } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getStocks } from '../../../redux/action';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { Header } from '../../header/Header';
import { GainerLosers } from '../../Tabs/gainerLoser/GainerLoser';
import { LineChartComponent } from '../../lineChart/LineChart';

export const Home = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  useEffect(() => {
    dispatch(getStocks());
  }, [dispatch]);

  const stocks = useSelector(state => state.stocks);
  // console.warn('stocks ', stocks);

  const handleStockPress = stock => {
    navigation.navigate('StockDetails', { stock }, navigation);
  };

  return (
    <View>
      <Header componentName="Home" navigation={navigation} />
      <View style={styles.indicatorContainer}>
        <TouchableOpacity
          style={styles.indicator}
          onPress={() =>
            handleStockPress({
              symbol: 'Nifty 50',
              name: 'Nifty 50',
              icon: 'https://tse3.mm.bing.net/th?id=OIP.Gb4xi3k-tu1DaNbtFzui_wHaHa&pid=Api&P=0&h=180',
              price: '27,000',
              change: '-212 (20%)',
              fundamentals: {
                market_cap: '93 CR',
                PE_Ratio: '55',
                PB_Ratio: '2.3',
                Industry_PE: '21.3',
                Debt_to_eq: '0.33',
                ROE: '9%',
                EPS: '9.3',
                Div_yield: '1.99%',
                Book_value: '39.3',
                Face_value: '10',
              },
            })
          }>
          <View style={styles.leftColumn}>
            <Text>NIFTY 50</Text>
          </View>
          <View style={styles.rightColumn}>
            <Text style={{color:'green'}}>27,000</Text>
            <Text style={{color:'green'}}>500(0.12%)</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.indicator}
          onPress={() =>
            handleStockPress({
              symbol: 'Nifty Bank',
              name: 'Nifty Bank',
              icon: 'https://tse3.mm.bing.net/th?id=OIP.Gb4xi3k-tu1DaNbtFzui_wHaHa&pid=Api&P=0&h=180',
              price: '20,000',
              change: '-212 (20%)',
              fundamentals: {
                market_cap: '93 CR',
                PE_Ratio: '55',
                PB_Ratio: '2.3',
                Industry_PE: '21.3',
                Debt_to_eq: '0.33',
                ROE: '9%',
                EPS: '9.3',
                Div_yield: '1.99%',
                Book_value: '39.3',
                Face_value: '10',
              },
            })
          }>
          <View style={styles.leftColumn}>
            <Text>NIFTY BANK</Text>
          </View>
          <View style={styles.rightColumn}>
            <Text style={{color:'red'}}>20,000</Text>
            <Text style={{color:'red'}}>-988(0.12%)</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* <View style={styles.highCloseWrapper}>
        <View style={styles.stockPriceWrapper}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 25, color: 'black' }} >4782.25</Text>

          </View>
          <View>
            <Text style={{ color: 'green', fontSize: 15 }}>95.66 (2.05%)</Text>
          </View>
        </View>
        <View style={styles.stockPriceWrapper}>
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 25, color: 'black' }}>Open</Text>
          <Text style={{ color: 'green', fontSize: 15 }}>22048</Text>
        </View>
        <View style={styles.stockPriceWrapper}>
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 25, color: 'black' }}>High</Text>
          <Text style={{ color: 'green', fontSize: 15 }}>22210</Text>
        </View>
        <View style={styles.stockPriceWrapper}>
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 25, color: 'black' }}>Low</Text>
          <Text style={{ color: 'green', fontSize: 15 }}>22047</Text>
        </View>
      </View> */}
      {/* <View>
        <LineChartComponent />
      </View> */}

      <View style={{ height: 250 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 25, color: '#3A2D7D', marginLeft: 20 }}>Trending </Text>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <View style={styles.shadowContainer}>
            {stocks.map((stock, index) => (
              <TouchableOpacity
                key={index}
                style={styles.stockContainer}
                onPress={() => handleStockPress(stock)}>
                <Image source={{ uri: stock.icon }} style={styles.stockIcon} />
                <View style={styles.stockDetails}>
                  <Text style={{ fontWeight: 'bold' }}>{`${stock.symbol}`}</Text>
                  <Text style={{ color: '#B0B0B0' }}>{stock.name}</Text>
                </View>
                <View>
                  <Text>{`${stock.price}`}</Text>
                  <Text>{`${stock.change}`}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
          {/* <Text>Hello</Text> */}
        </ScrollView>
      </View>
      <View style={{ paddingHorizontal: 20 }}>
        <ScrollView>
          <View style={{flexDirection:'row'}}>
            <Text style={{ fontWeight: 'bold', fontSize: 25, color: 'green', marginVertical: 5 }}>Gainers</Text>
            <Text style={{ fontWeight: 'bold', fontSize: 25, marginVertical: 5 }}> / </Text>
            <Text style={{ fontWeight: 'bold', fontSize: 25, color: 'red', marginVertical: 5 }}>Losers </Text>
          </View>
          <View style={{ height: 300 }}>
            <GainerLosers />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
