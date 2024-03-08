import {useEffect} from 'react';
import {Image, ScrollView, TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {getWatchlistStocks, removeStock} from '../../../redux/action';
import {Header} from '../../header/Header';
import {styles} from './style';
import { useNavigation } from '@react-navigation/native';

export const Watchlist = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation()

  useEffect(() => {
    dispatch(getWatchlistStocks());
  }, [dispatch]);

  const watchlistStocks = useSelector(state => state.watchlistStocks);
  // console.warn('watchlistStocks', watchlistStocks);

  const removeWatchlistStock = stock => {
    console.warn('removing', stock);
    dispatch(removeStock(stock));
  };

  const handleStockPress = stock => {
    navigation.navigate('StockDetails', {stock}, navigation);
  };

  return (
    <View style={{backgroundColor:'white', height:'100%'}}>
      <Header componentName="Watchlist" navigation={navigation} />
      <View style={styles.indicatorContainer}>
        <TouchableOpacity style={styles.indicator}>
          <View style={styles.leftColumn}>
            <Text>NIFTY 50</Text>
          </View>
          <View style={styles.rightColumn}>
            <Text>27,000</Text>
            <Text>-500(0.12%)</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.indicator}>
          <View style={styles.leftColumn}>
            <Text>NIFTY BANK</Text>
          </View>
          <View style={styles.rightColumn}>
            <Text>20,000</Text>
            <Text>-988(0.12%)</Text>
          </View>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {watchlistStocks?.length !== 0 ? (
          watchlistStocks?.map((stock, index) => (
            <TouchableOpacity
              key={index}
              style={styles.stockContainer}
              onPress={() => handleStockPress(stock)}
            >
              <Image source={{uri: stock.icon}} style={styles.stockIcon} />
              <View style={styles.stockDetails}>
                <Text style={{fontWeight: 'bold'}}>{`${stock.symbol}`}</Text>
                <Text style={{color: '#B0B0B0'}}>{stock.name}</Text>
              </View>
              <View>
                <Text>{`${stock.price}`}</Text>
                <Text>{`${stock.change}`}</Text>
              </View>
              <View>
                <Text
                  style={styles.removeWatchlistText}
                  onPress={() => {
                    removeWatchlistStock(stock);
                  }}>
                  -
                </Text>
              </View>
            </TouchableOpacity>
          ))
        ) : (
          <View style={{alignItems: 'center'}}>
            {/* {console.warn('Rendering "Search" text')}
              <Text style={{textAlign: 'center'}}>Search</Text> */}
            <Image
              source={require('../../../assets/watchlist.png')}
              style={styles.image}
            />
          </View>
        )}
      </ScrollView>
    </View>
  );
};
