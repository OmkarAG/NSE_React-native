import React from 'react';
import {Image, ScrollView, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';

export const Home = () => {
  const stocks = [
    {
      symbol: 'INFY',
      name: 'Infosys',
      icon: 'https://tse3.mm.bing.net/th?id=OIP.Gb4xi3k-tu1DaNbtFzui_wHaHa&pid=Api&P=0&h=180',
      price: 1500,
      change: '-212 (20%)',
    },
    {
      symbol: 'HDFCBANK',
      name: 'Hdfc Bank Limited',
      icon: 'https://1000logos.net/wp-content/uploads/2021/06/HDFC-Bank-logo.jpg',
      price: 1500,
      change: '-212 (20%)',
    },
    {
      symbol: 'ITC',
      name: 'Itc Limited',
      icon: 'https://startuptalky.com/content/images/2020/05/ITC-limited_startuptalky-min.jpg',
      price: 1500,
      change: '-212 (20%)',
    },
    {
      symbol: 'ONGC',
      name: 'OIL & NATURAL GAS CORPORATION LIMITED',
      icon: 'https://pluspng.com/img-png/ongc-png--1102.jpg',
      price: 1500,
      change: '-212 (20%)',
    },
    {
      symbol: 'TITAN',
      name: 'TITAN COMPANY LIMITED',
      icon: 'https://tse3.mm.bing.net/th?id=OIP.qNot8UYNqR_9VZa0DrxJZwHaHp&pid=Api&P=0&w=300&h=300',
      price: 1500,
      change: '-212 (20%)',
    },
    {
      symbol: 'ADANIENT',
      name: 'ADANI ENTERPRISES LIMITED',
      icon: 'https://tse2.mm.bing.net/th?id=OIP.IiRRKAzQShP_5HT-0h7wgAAAAA&pid=Api&P=0&h=180',
      price: 1500,
      change: '-212 (20%)',
    },
    {
      symbol: 'INFY',
      name: 'Infosys',
      icon: 'https://tse3.mm.bing.net/th?id=OIP.Gb4xi3k-tu1DaNbtFzui_wHaHa&pid=Api&P=0&h=180',
      price: 1500,
      change: '-212 (20%)',
    },
    {
      symbol: 'HDFCBANK',
      name: 'Hdfc Bank Limited',
      icon: 'https://1000logos.net/wp-content/uploads/2021/06/HDFC-Bank-logo.jpg',
      price: 1500,
      change: '-212 (20%)',
    },
    {
      symbol: 'ITC',
      name: 'Itc Limited',
      icon: 'https://startuptalky.com/content/images/2020/05/ITC-limited_startuptalky-min.jpg',
      price: 1500,
      change: '-212 (20%)',
    },
    {
      symbol: 'ONGC',
      name: 'OIL & NATURAL GAS CORPORATION LIMITED',
      icon: 'https://pluspng.com/img-png/ongc-png--1102.jpg',
      price: 1500,
      change: '-212 (20%)',
    },
    {
      symbol: 'TITAN',
      name: 'TITAN COMPANY LIMITED',
      icon: 'https://tse3.mm.bing.net/th?id=OIP.qNot8UYNqR_9VZa0DrxJZwHaHp&pid=Api&P=0&w=300&h=300',
      price: 1500,
      change: '-212 (20%)',
    },
    {
      symbol: 'ADANIENT',
      name: 'ADANI ENTERPRISES LIMITED',
      icon: 'https://tse2.mm.bing.net/th?id=OIP.IiRRKAzQShP_5HT-0h7wgAAAAA&pid=Api&P=0&h=180',
      price: 1500,
      change: '-212 (20%)',
    },
    {
      symbol: 'INFY',
      name: 'Infosys',
      icon: 'https://tse3.mm.bing.net/th?id=OIP.Gb4xi3k-tu1DaNbtFzui_wHaHa&pid=Api&P=0&h=180',
      price: 1500,
      change: '-212 (20%)',
    },
    {
      symbol: 'HDFCBANK',
      name: 'Hdfc Bank Limited',
      icon: 'https://1000logos.net/wp-content/uploads/2021/06/HDFC-Bank-logo.jpg',
      price: 1500,
      change: '-212 (20%)',
    },
    {
      symbol: 'ITC',
      name: 'Itc Limited',
      icon: 'https://startuptalky.com/content/images/2020/05/ITC-limited_startuptalky-min.jpg',
      price: 1500,
      change: '-212 (20%)',
    },
    {
      symbol: 'ONGC',
      name: 'OIL & NATURAL GAS CORPORATION LIMITED',
      icon: 'https://pluspng.com/img-png/ongc-png--1102.jpg',
      price: 1500,
      change: '-212 (20%)',
    },
    {
      symbol: 'TITAN',
      name: 'TITAN COMPANY LIMITED',
      icon: 'https://tse3.mm.bing.net/th?id=OIP.qNot8UYNqR_9VZa0DrxJZwHaHp&pid=Api&P=0&w=300&h=300',
      price: 1500,
      change: '-212 (20%)',
    },
    {
      symbol: 'ADANIENT',
      name: 'ADANI ENTERPRISES LIMITED',
      icon: 'https://tse2.mm.bing.net/th?id=OIP.IiRRKAzQShP_5HT-0h7wgAAAAA&pid=Api&P=0&h=180',
      price: 1500,
      change: '-212 (20%)',
    },
    {
      symbol: 'INFY',
      name: 'Infosys',
      icon: 'https://tse3.mm.bing.net/th?id=OIP.Gb4xi3k-tu1DaNbtFzui_wHaHa&pid=Api&P=0&h=180',
      price: 1500,
      change: '-212 (20%)',
    },
    {
      symbol: 'HDFCBANK',
      name: 'Hdfc Bank Limited',
      icon: 'https://1000logos.net/wp-content/uploads/2021/06/HDFC-Bank-logo.jpg',
      price: 1500,
      change: '-212 (20%)',
    },
    {
      symbol: 'ITC',
      name: 'Itc Limited',
      icon: 'https://startuptalky.com/content/images/2020/05/ITC-limited_startuptalky-min.jpg',
      price: 1500,
      change: '-212 (20%)',
    },
    {
      symbol: 'ONGC',
      name: 'OIL & NATURAL GAS CORPORATION LIMITED',
      icon: 'https://pluspng.com/img-png/ongc-png--1102.jpg',
      price: 1500,
      change: '-212 (20%)',
    },
    {
      symbol: 'TITAN',
      name: 'TITAN COMPANY LIMITED',
      icon: 'https://tse3.mm.bing.net/th?id=OIP.qNot8UYNqR_9VZa0DrxJZwHaHp&pid=Api&P=0&w=300&h=300',
      price: 1500,
      change: '-212 (20%)',
    },
    {
      symbol: 'ADANIENT',
      name: 'ADANI ENTERPRISES LIMITED',
      icon: 'https://tse2.mm.bing.net/th?id=OIP.IiRRKAzQShP_5HT-0h7wgAAAAA&pid=Api&P=0&h=180',
      price: 1500,
      change: '-212 (20%)',
    },
  ];
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={require('../../../assets/menu.png')}
            style={styles.image}
          />
          <Text style={styles.homeText}>Home</Text>
          <Image
            source={require('../../../assets/settings.png')}
            style={styles.image}
          />
        </View>
      </View>
      <View style={styles.indicatorContainer}>
        <View style={styles.indicator}>
          <View style={styles.leftColumn}>
            <Text>NIFTY 50</Text>
          </View>
          <View style={styles.rightColumn}>
            <Text>27,000</Text>
            <Text>-500(0.12%)</Text>
          </View>
        </View>
        <View style={styles.indicator}>
          <View style={styles.leftColumn}>
            <Text>NIFTY BANK</Text>
          </View>
          <View style={styles.rightColumn}>
            <Text>20,000</Text>
            <Text>-988(0.12%)</Text>
          </View>
        </View>
      </View>
      <View>
        <Text style={{fontWeight: 'bold', marginLeft: 20}}>Trending </Text>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          {stocks.map((stock, index) => (
            <View key={index} style={styles.stockContainer}>
              <Image source={{uri: stock.icon}} style={styles.stockIcon} />
              <View style={styles.stockDetails}>
                <Text style={{fontWeight:'bold'}}>{`${stock.symbol}`}</Text>
                <Text style={{color:'#B0B0B0'}}>{stock.name}</Text>
              </View>
              <View>
                <Text>{`${stock.price}`}</Text>
                <Text>{`${stock.change}`}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
      {/* <View>
        <Text>Last Text</Text>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 16,
  },
  homeText: {
    fontWeight: 'bold',
    color:'#daa520',
    fontSize: 24,
    marginTop: 8,
  },
  image: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginTop: 20,
    tintColor:'#daa520'
  },
  indicatorContainer: {
    flexDirection: 'row',
    gap: 5,
    margin: 10,
  },
  indicator: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    overflow: 'hidden',
    flex: 1,
    backgroundColor: '#B0B0B040',
    flexDirection: 'row',
    padding: 10,
  },
  leftColumn: {
    flex: 1,
  },
  rightColumn: {
    flex: 2,
    alignItems: 'flex-end',
  },
  scrollViewContent: {
    padding: 20,
    marginTop: 10,
  },
  stockContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#B0B0B0',
  },
  stockIcon: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 40,
  },
  stockDetails: {
    flex: 1,
  },
});
