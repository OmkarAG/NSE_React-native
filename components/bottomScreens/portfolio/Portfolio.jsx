import { useEffect, useState } from "react";
import { Button, Image, Modal, SafeAreaView, ScrollView, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native"
import { Text } from "react-native-paper";
import { Header } from "../../header/Header";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { getStocks, setPortfolioStock, removePortfolioStock, sortPortfolioStocks } from "../../../redux/action";

export const Portfolio = () => {
  const [searchInput, setSearchInput] = useState('');
  const [filterStocks, setFilterStocks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [currentValue, setCurrentValue] = useState(1505);

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

  useEffect(() => {
    portfolioStocks.map((stock) => {
      setCurrentValue(currentValue + stock.price)
    })
  }, [dispatch])

  var portfolioStocks = useSelector(state => state.portfolioStocks);
  console.log("portfolio stocks = ", portfolioStocks)


  const addPortfolioStock = (stock) => {
    // console.warn("clled")
    dispatch(setPortfolioStock(stock))
  }

  const removefromPortfolio = (stock) => {
    dispatch(removePortfolioStock(stock))
  }

  const handleOptionPress = (option) => {
    setSelectedOption(option);
    sortStocks(option)
    setShowModal(!showModal)
  };

  const sortStocks = (sort) => {
    console.warn("sorting your stock")
    dispatch(sortPortfolioStocks(sort))
    // if (sort == 'AtoZ') {
    //   const sortedAtoZ = portfolioStocks.slice().sort((a, b) => a.symbol.localeCompare(b.symbol));
    //   portfolioStocks = sortedAtoZ
    //   console.log("port st", portfolioStocks)
    // }
  }

  return (
    <View style={{backgroundColor:'white'}}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <Modal
            animationType={'fade'}
            transparent={true}
            visible={showModal}
          // onRequestClose={() => {
          //   console.log('Modal has been closed.');
          // }}
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <TouchableOpacity style={styles.closeModal} onPress={() => { setShowModal(!showModal); }}>
                  <Image source={require('../../../assets/close.png')} style={styles.closeModalImg} ></Image>
                </TouchableOpacity>

                <Text style={{ position: 'absolute', top: 10, fontWeight: 'bold', fontSize: 20 }}>Sort By</Text>
                <View >
                  <TouchableOpacity
                    style={[styles.option, selectedOption === 'AtoZ' && styles.selectedOption]}
                    onPress={() => handleOptionPress('AtoZ')}
                  >
                    <Text style={styles.optionText}>A to Z</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={[styles.option, selectedOption === 'ZtoA' && styles.selectedOption]}
                    onPress={() => handleOptionPress('ZtoA')}
                  >
                    <Text style={styles.optionText}>Z to A</Text>
                  </TouchableOpacity>
                </View>

              </View>
            </View>
          </Modal>

          {/* <Button
          title="Click To Open Modal"
          onPress={() => {
            setShowModal(!showModal);
          }}
        /> */}
        </View>
      </SafeAreaView>

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
      <View style={styles.searchStocks}>
        <TouchableWithoutFeedback onPress={() => { console.warn("click") }}>
          <ScrollView contentContainerStyle={{}}>
            {filterStocks?.length !== 0 ? (
              filterStocks?.map((stock, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.searchStockContainer}
                // onPress={() => handleStockPress(stock)}
                >
                  {/* <Image source={{ uri: stock.icon }} style={styles.stockIcon} /> */}
                  <View style={styles.stockDetails}>
                    <Text style={{ fontWeight: 'bold' }}>{`${stock.symbol}`}</Text>
                    {/* <Text style={{ color: '#B0B0B0' }}>{stock.name}</Text> */}
                  </View>
                  <View>
                    <Text>{`${stock.price}`}</Text>
                    <Text>{`${stock.change}`}</Text>
                  </View>
                  <View>
                    {
                      portfolioStocks.includes(stock)?(
                        <Text
                      style={styles.removeWatchlistText}
                      onPress={() => {
                        removefromPortfolio(stock);
                      }}>
                      -
                    </Text>
                      ):
                      (
                        <Text
                      style={styles.addWatchlistText}
                      onPress={() => {
                        addPortfolioStock(stock);
                      }}>
                      +
                    </Text>
                      )
                    }
                  </View>
                </TouchableOpacity>
              ))
            ) :
              null
              // (
              //   <View style={{ alignItems: 'center' }}>
              //     {/* {console.warn('Rendering "Search" text')}
              //     <Text style={{textAlign: 'center'}}>Search</Text> */}
              //     <Image
              //       source={require('../../../assets/search.png')}
              //       style={styles.image}
              //     />
              //   </View>
              // )
            }
          </ScrollView>
        </TouchableWithoutFeedback>
      </View>
      <View>

        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <View>
            <Text style={{ fontWeight: 'bold', fontSize: 25, marginBottom: 10 }}>Holdings ({portfolioStocks.length})</Text>
            <View style={styles.portfolioBox}>
              <View>
                <Text style={{ fontWeight: 'bold', color: "#B0B0B0", padding: 2, fontSize: 20 }}>Current Value: </Text>
                <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20, textAlign: 'center' }}>{currentValue}</Text>
                <Text style={{ fontWeight: 'bold', color: "#B0B0B0", padding: 2, fontSize: 20 }}>Invested Value:  </Text>
                <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20, textAlign: 'center' }}>100</Text>
              </View>
              <View>
                <Text style={{ fontWeight: 'bold', color: "#B0B0B0", padding: 2, fontSize: 20 }}>Total Returns: </Text>
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, textAlign: 'center' }}>100%</Text>
                <Text style={{ fontWeight: 'bold', color: "#B0B0B0", padding: 2, fontSize: 20 }}>1 Day Returns: </Text>
                <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 20, textAlign: 'center' }}>-5%</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity style={{ flexDirection: 'row', gap: 5, width: 60 }} onPress={() => setShowModal(true)}>
            <Text style={{ fontWeight: 'bold', fontSize: 15, marginBottom: 10 }}>Sort</Text>
            <Image source={require('../../../assets/filter.png')} style={{ width: 20, height: 20 }} ></Image>
          </TouchableOpacity>
          {portfolioStocks?.length !== 0 ? (
            portfolioStocks?.map((stock, index) => (

              <TouchableOpacity
                key={index}
                style={styles.stockContainer}
              // onPress={() => handleStockPress(stock)}
              >
                {/* <Image source={{ uri: stock.icon }} style={styles.stockIcon} /> */}
                <View style={styles.stockDetails}>
                  <Text style={{ fontWeight: 'bold' }}>{`${stock.symbol}`}</Text>
                  <Text style={{ color: '#B0B0B0' }}>{stock.quantity || "10 shares"}</Text>
                </View>
                <View>
                  <Text style={{ fontWeight: 'bold' }}>{`${stock.price} ₹`}</Text>
                  <Text>{`${stock.buyingPrice || "20 ₹ "}`}</Text>
                </View>
                <View>
                  <Text
                    style={styles.removeWatchlistText}
                    onPress={() => {
                      removefromPortfolio(stock);
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
                source={require('../../../assets/portfolio.png')}
                style={styles.image}
              />
            </View>
          )}
        </ScrollView>
      </View>
    </View>
  );
}