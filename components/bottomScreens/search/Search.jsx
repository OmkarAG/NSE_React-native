import {View, ScrollView, TouchableOpacity, Text, Image} from 'react-native';
import {TextInput} from 'react-native-paper';
import {Header} from '../../header/Header';
import {styles} from './style';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getStocks, setWatchlistStocks} from '../../../redux/action';
import {useNavigation} from '@react-navigation/native';

export const Search = () => {
  const [searchInput, setSearchInput] = useState('');
  const [filterStocks, setFilterStocks] = useState([]);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    dispatch(getStocks());
  }, [dispatch, searchInput]);

  const clearSearchInput = () => {
    setSearchInput('');
  };

  const handleStockPress = stock => {
    navigation.navigate('StockDetails', {stock});
  };

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

  const addWatchlist = stock => {
    // console.warn('adding', stock);
    dispatch(setWatchlistStocks([stock]));
  };

  return (
    <View>
      <Header componentName="Search" navigation={navigation}/>
      {/* <View>
        <TextInput
          placeholder="Enter Stock Name"
          style={styles.searchbox}
          onChangeText={text => setSearchInput(text)}
        />
      </View> */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter Stock Name"
          style={styles.searchbox}
          onChangeText={text => setSearchInput(text)}
          value={searchInput}
        />
        {searchInput.length > 0 && (
          <TouchableOpacity
            onPress={clearSearchInput}
            style={styles.clearButton}>
            {/* <Icon name="times-circle" size={20} color="black" /> */}
            <Text style={styles.clear}>Clear</Text>
          </TouchableOpacity>
        )}
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
                <View>
                  <Text
                    style={styles.addWatchlistText}
                    onPress={() => {
                      addWatchlist(stock);
                    }}>
                    +
                  </Text>
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
