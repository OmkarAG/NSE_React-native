import { useEffect } from 'react';
import {
  Dimensions,
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getStocks } from '../../../redux/action';
import { styles } from './style';
import { Header } from '../../header/Header';
import { useNavigation } from '@react-navigation/native';

export const Heatmap = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation()

  useEffect(() => {
    dispatch(getStocks());
  }, [dispatch]);

  const stocks = useSelector(state => state.stocks);
  //   console.warn('stocks', stocks);

  const { width } = Dimensions.get('window');
  const itemSize = width / 3 - 16;

  // var backgroundColor = 'green';
  // const backgroundColor = (change) => {
  //   let num = parseFloat(change)
  //   num = num*1
  //   console.log("change",num)
  //   if (num < 0) {
  //     num = num*1
  //     console.log("positive num ",num)
  //     const lightness = 100 - (num - 1) * (100 / 19);
  //     const color = `hsl(0, 100%, ${lightness}%)`;
  //     return color;
  //   }
  //   else {
  //     const lightness = 100 - (change - 1) * (100 / 19);
  //     const color = `hsl(120, 100%, ${lightness}%)`;
  //     return color;
  //   }
  // }

  const backgroundColor = (change) => {
    let num = parseFloat(change);
    const hue = num < 0 ? 0 : 120;
    const lightness = 80 - Math.abs(num - 1) * (100 / 30);

    return `hsl(${hue}, 100%, ${lightness}%)`;
  };




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
        onPress={() => navigation.navigate('StockDetails', { stock: item }, navigation)
        }
      >
        <View style={styles.textViewContainer}>
          <Text style={styles.itemText}>{item.symbol}</Text>
          <Text style={styles.itemText}>{item.price}</Text>
          <Text style={styles.itemText}>{item.change}</Text>
        </View>
      </TouchableOpacity >
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <Header componentName="HeatMap" navigation={navigation} />
      <FlatList
        data={stocks}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={3}
        contentContainerStyle={{ padding: 10 }}
      />
    </View>
  );
};
