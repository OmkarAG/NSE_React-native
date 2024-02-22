// import {useNavigation} from '@react-navigation/native';
import {Dimensions, TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-paper';
import {styles} from './styles';

import {LineChart} from 'react-native-chart-kit';
import {useEffect} from 'react';

export const StockDetails = ({navigation, route}) => {
  const stock = route.params.stock;

  useEffect(() => {
    navigation.setOptions({
      title: stock.symbol,
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
    <View style={{padding: 10}}>
      <View style={styles.head}>
        <Text style={styles.name}>{`${stock.name}`}</Text>
        <Text style={styles.price}>{`RS. ${stock.price}`}</Text>
      </View>
      <View>
        <Text style={styles.changes}>{`${stock.change} Today`}</Text>
      </View>
      <View>
        <LineChart
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
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buy}>
          <Text style={{color: 'white'}}>BUY</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sell}>
          <Text style={{color: 'white'}}>SELL</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
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
      </View>
    </View>
  );
};
