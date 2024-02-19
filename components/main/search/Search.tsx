import {View, ScrollView, TouchableOpacity, Text, Image} from 'react-native';
import {TextInput} from 'react-native-paper';
import {Header} from '../../header/Header';
import {styles} from './style';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getStocks} from '../../../redux/action';

export const Search = () => {
  const [searchInput, setSearchInput] = useState('');
  const [filterStocks, setFilterStocks] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStocks());
  }, []);

  const stocks = useSelector(state => state.stocks);
  // console.warn(stocks);
  useEffect(() => {
    // console.warn(searchInput);
    if (!searchInput) {
      setFilterStocks([]);
    } else {
      let filtered = stocks.filter(item =>
        item.name.toLowerCase().includes(searchInput.toLowerCase()),
      );
      setFilterStocks(filtered);
    }
  }, [searchInput, stocks]);

  return (
    <View>
      <Header componentName="Search" />
      <View>
        <TextInput
          placeholder="Enter Stock Name"
          style={styles.searchbox}
          onChangeText={text => setSearchInput(text)}
        />
      </View>
      <View>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          {filterStocks.length !== 0 ? (
            filterStocks.map((stock, index) => (
              <TouchableOpacity
                key={index}
                style={styles.stockContainer}
                onPress={() => handleStockPress(stock)}>
                <Image source={{uri: stock.icon}} style={styles.stockIcon} />
                <View style={styles.stockDetails}>
                  <Text style={{fontWeight: 'bold'}}>{`${stock.symbol}`}</Text>
                  <Text style={{color: '#B0B0B0'}}>{stock.name}</Text>
                </View>
                <View>
                  <Text>{`${stock.price}`}</Text>
                  <Text>{`${stock.change}`}</Text>
                </View>
              </TouchableOpacity>
            ))
          ) : (
            <View style={{alignItems: 'center'}}>
              {/* {console.warn('Rendering "Search" text')}
              <Text style={{textAlign: 'center'}}>Search</Text> */}
              <Image
                source={require('../../../assets/search.png')}
                style={styles.image}
              />
            </View>
          )}
          {/* <Text>Hello</Text> */}
        </ScrollView>
      </View>
    </View>
  );
};
