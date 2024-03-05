import React, { useEffect } from 'react';
import {
  Dimensions,
  FlatList,
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
const { width } = Dimensions.get('window');

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

  const backgroundColor = (change) => {
    let num = parseFloat(change);
    const hue = num < 0 ? 0 : 120;
    const lightness = 80 - Math.abs(num - 1) * (100 / 30);

    return `hsl(${hue}, 100%, ${lightness}%)`;
  };

  const itemSize = width / 3 - 20;

  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        style={{
          width: itemSize,
          height: itemSize,
          backgroundColor: backgroundColor(item.changeInPercent),
          margin: 5,
          borderRadius: 10,
        }}
        onPress={() => navigation.navigate('StockDetails', { stock: item }, navigation)}
      >
        <View style={styles.textViewContainer}>
          <Text style={styles.itemText}>{item.symbol}</Text>
          <Text style={styles.itemText}>{item.price}</Text>
          <Text style={styles.itemText}>{item.change}</Text>
        </View>
      </TouchableOpacity>
    );
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
            <Text style={{ color: 'green' }}>27,000</Text>
            <Text style={{ color: 'green' }}>500(0.12%)</Text>
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
            <Text style={{ color: 'red' }}>20,000</Text>
            <Text style={{ color: 'red' }}>-988(0.12%)</Text>
          </View>
        </TouchableOpacity>
      </View>


      <View>
        <ScrollView contentContainerStyle={{ paddingBottom: 260 }}>
          <View style={{ margin: 20 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 25, color: '#3A2D7D', marginBottom: 10 }}>Nifty 50 </Text>
            <LineChartComponent homePage={true} />
          </View>
          <View style={{ height: 250, marginHorizontal: 20, }}>
            <Text style={{ fontWeight: 'bold', fontSize: 25, color: '#3A2D7D', marginBottom: 10 }}>Trending </Text>
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
            </ScrollView>
            {/* <View > */}
            <TouchableOpacity style={{ position: 'absolute', right: 10, top: 5, padding: 5, borderRadius: 10, backgroundColor: '#B0B0B040' }} onPress={() => { navigation.navigate("Equities") }}>
              {/* <Image source={require('../../../assets/right-arrow.png')} style={{width:20,height:20}}></Image> */}
              <Text style={{ fontWeight: 'bold', color: '#3A2D7D' }}>See More</Text>
            </TouchableOpacity>
            {/* </View> */}
          </View>
          <View style={{ paddingHorizontal: 20 }}>
            <ScrollView>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontWeight: 'bold', fontSize: 25, color: 'green', marginVertical: 5 }}>Gainers</Text>
                <Text style={{ fontWeight: 'bold', fontSize: 25, marginVertical: 5 }}> / </Text>
                <Text style={{ fontWeight: 'bold', fontSize: 25, color: 'red', marginVertical: 5 }}>Losers </Text>
              </View>
              <View style={{ height: 260 }}>
                <GainerLosers />
              </View>
            </ScrollView>
            <TouchableOpacity style={{ position: 'absolute', right: 30, top: 9, padding: 5, borderRadius: 10, backgroundColor: '#B0B0B040' }} onPress={() => { navigation.navigate("Equities") }}>
              {/* <Image source={require('../../../assets/right-arrow.png')} style={{width:20,height:20}}></Image> */}
              <Text style={{ fontWeight: 'bold', color: '#3A2D7D' }}>See More</Text>
            </TouchableOpacity>
          </View>

          <View style={{ height: 280 }}>
            <View>
              <Text style={{ fontWeight: 'bold', fontSize: 25, color: '#3A2D7D', marginLeft: 20, marginTop: 10 }}>HeatMap </Text>
            </View>
            <View>
              <FlatList
                data={stocks}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                numColumns={3}
                contentContainerStyle={{ padding: 15 }}
              />
            </View>
            <TouchableOpacity style={{ position: 'absolute', right: 30, top: 15, padding: 5, borderRadius: 10, backgroundColor: '#B0B0B040' }} onPress={() => { navigation.navigate("HeatMap") }}>
              {/* <Image source={require('../../../assets/right-arrow.png')} style={{width:20,height:20}}></Image> */}
              <Text style={{ fontWeight: 'bold', color: '#3A2D7D' }}>See More</Text>
            </TouchableOpacity>
          </View>

        </ScrollView>

      </View>
    </View>
  );
};
