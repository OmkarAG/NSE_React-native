import { useEffect, useState } from "react";
import { Image, ScrollView, TextInput, TouchableOpacity, View } from "react-native"
import { Text } from "react-native-paper";
import { Header } from "../../header/Header";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { getStocks } from "../../../redux/action";

export const Portfolio = () => {
  const [searchInput, setSearchInput] = useState('');
  const [filterStocks, setFilterStocks] = useState([]);

  const navigation = useNavigation()
  const dispatch = useDispatch()

  const clearSearchInput = () => {
    setSearchInput('')
  }

  useEffect(() => {
    dispatch(getStocks());
  }, [dispatch]);

  const stocks = useSelector(state => state.stocks);

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

  // useEffect(() => {
  //   dispatch()
  // }, [dispatch])

  const portfolioStocks = useSelector(state => state.portfolioStocks);
  console.log("portfolio stocks = ", portfolioStocks)

  return (
    <View>
      <Header componentName="Portfolio" navigation={navigation} />
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
            <Text style={styles.clear}>Clear</Text>
          </TouchableOpacity>
        )}
      </View>
      <View>
        <ScrollView contentContainerStyle={styles.filteredStocks}>
          {filterStocks?.length !== 0 ? (
            filterStocks?.map((stock, index) => (
              <TouchableOpacity
                key={index}
                style={styles.stockContainer}
              // onPress={() => handleStockPress(stock)}
              >
                <Image source={{ uri: stock.icon }} style={styles.stockIcon} />
                <View style={styles.stockDetails}>
                  <Text style={{ fontWeight: 'bold' }}>{`${stock.symbol}`}</Text>
                  <Text style={{ color: '#B0B0B0' }}>{stock.name}</Text>
                </View>
                <View>
                  <Text>{`${stock.price}`}</Text>
                  <Text>{`${stock.change}`}</Text>
                </View>
                <View>
                  <Text
                    style={styles.removeWatchlistText}
                    onPress={() => {
                      // removeWatchlistStock(stock);
                    }}>
                    -
                  </Text>
                </View>
              </TouchableOpacity>
            ))
          ) : (
            <View style={{ alignItems: 'center' }}>
              {/* {console.warn('Rendering "Search" text')}
              <Text style={{textAlign: 'center'}}>Search</Text> */}
              <Image
                source={require('../../../assets/search.png')}
                style={styles.image}
              />
            </View>
          )}
        </ScrollView>
      </View>
      <View>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          {portfolioStocks?.length !== 0 ? (
            portfolioStocks?.map((stock, index) => (
              <TouchableOpacity
                key={index}
                style={styles.stockContainer}
              // onPress={() => handleStockPress(stock)}
              >
                <Image source={{ uri: stock.icon }} style={styles.stockIcon} />
                <View style={styles.stockDetails}>
                  <Text style={{ fontWeight: 'bold' }}>{`${stock.symbol}`}</Text>
                  <Text style={{ color: '#B0B0B0' }}>{stock.name}</Text>
                </View>
                <View>
                  <Text>{`${stock.price}`}</Text>
                  <Text>{`${stock.change}`}</Text>
                </View>
                <View>
                  <Text
                    style={styles.removeWatchlistText}
                    onPress={() => {
                      // removeWatchlistStock(stock);
                    }}>
                    -
                  </Text>
                </View>
              </TouchableOpacity>
            ))
          ) : (
            <View style={{ alignItems: 'center' }}>
              {/* {console.warn('Rendering "Search" text')}
              <Text style={{textAlign: 'center'}}>Search</Text> */}
              <Image
                source={require('../../../assets/search.png')}
                style={styles.image}
              />
            </View>
          )}
        </ScrollView>
      </View>
    </View>
  );
}