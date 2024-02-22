import {useEffect} from 'react';
import {
  Dimensions,
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getStocks} from '../../../redux/action';
import {styles} from './style';

export const Heatmap = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStocks());
  }, [dispatch]);

  const stocks = useSelector(state => state.stocks);
//   console.warn('stocks', stocks);

  const {width} = Dimensions.get('window');
  const itemSize = width / 3 - 16;

  var backgroundColor = 'green';

  const renderItem = ({ item, index }) => {
    // console.log("change", parseFloat(item.changeInPercent))
    // console.log("change", typeof(parseFloat(item.changeInPercent)))
    let ii = parseFloat(item.changeInPercent)
    // console.log("change", 
    
    // if(ii<0)
    // )
    if (item.changeInPercent>10) {
      backgroundColor = "#00ab41"
    }
    else if(item.changeInPercent>5&&item.changeInPercent<10){
        backgroundColor = "#5ced73"
    }
    else if(ii<0 &&ii>-5){
        backgroundColor = "#ffb09c"
    }
    else if(ii<-5){
        backgroundColor = "#ee2400"
    }
  
    return (
      <TouchableOpacity
        style={{
          width: itemSize,
          height: itemSize,
          backgroundColor: backgroundColor,
          margin: 5,
          borderRadius:10,
        }}>
        <View style={styles.textViewContainer}>
          <Text style={styles.itemText}>{item.symbol}</Text>
          <Text style={styles.itemText}>{item.price}</Text>
          <Text style={styles.itemText}>{item.change}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={stocks}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={3}
        contentContainerStyle={{padding: 10}}
      />
    </View>
  );
};
