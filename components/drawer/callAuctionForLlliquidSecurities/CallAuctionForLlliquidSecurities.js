import {useNavigation} from '@react-navigation/native';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {Header} from '../../header/Header';
import {styles} from './styles';
import {useState} from 'react';
import {useSelector} from 'react-redux';

export const CallAuctionForLlliquidSecurities = () => {
  const callAuction = useSelector(state => state.callAuction);
  console.log(callAuction[0].data);

  const navigation = useNavigation();
  return (
    <View>
      <Header
        componentName="Periodic Call Auction for illiquid securities"
        navigation={navigation}
      />
      <View style={styles.table}>
        <ScrollView horizontal contentContainerStyle={{marginBottom: 160}}>
          <View>
            <View style={[styles.tableRow1, {backgroundColor: '#3A2D7D'}]}>
              <Text style={styles.columnHeader}></Text>
              <Text style={styles.columnHeader1}>SESSION 1 -</Text>
              <Text style={styles.columnHeader}>(9:30-10:30)</Text>
              <Text style={styles.columnHeader1}>SESSION 2 -</Text>
              <Text style={styles.columnHeader}>(10:30-11:30)</Text>
              <Text style={styles.columnHeader1}>SESSION 3 -</Text>
              <Text style={styles.columnHeader}>(11:30-12:30)</Text>
              <Text style={styles.columnHeader1}>SESSION 4 -</Text>
              <Text style={styles.columnHeader}>(12:30-13:30)</Text>
              <Text style={styles.columnHeader1}>SESSION 5 -</Text>
              <Text style={styles.columnHeader}>(13:30-14:30)</Text>
              <Text style={styles.columnHeader1}>SESSION 6 -</Text>
              <Text style={styles.columnHeader}>(14:30-15:30)</Text>
              <Text style={styles.columnHeader1}></Text>
              <Text style={styles.columnHeader1}></Text>
              <Text style={styles.columnHeader1}></Text>
            </View>
            <View style={[styles.tableRow, {backgroundColor: '#3A2D7D'}]}>
              <Text style={styles.columnHeader}>Symbol</Text>
              <Text style={styles.columnHeader}>Price</Text>
              <Text style={styles.columnHeader}>Quantity</Text>
              <Text style={styles.columnHeader}>Price</Text>
              <Text style={styles.columnHeader}>Quantity</Text>
              <Text style={styles.columnHeader}>Price</Text>
              <Text style={styles.columnHeader}>Quantity</Text>
              <Text style={styles.columnHeader}>Price</Text>
              <Text style={styles.columnHeader}>Quantity</Text>
              <Text style={styles.columnHeader}>Price</Text>
              <Text style={styles.columnHeader}>Quantity</Text>
              <Text style={styles.columnHeader}>Price</Text>
              <Text style={styles.columnHeader}>Quantity</Text>
              <Text style={styles.columnHeader}>AVERAGE PRICE</Text>
              <Text style={styles.columnHeader}>TOTAL VOLUME</Text>
              <Text style={styles.columnHeader}>TOTAL VALUE</Text>
            </View>
            <ScrollView>
              {callAuction[0].data.map((derivative, i) => (
                <TouchableOpacity key={i}>
                  {/* <Text>{derivative.instrument}</Text> */}
                  <View style={styles.tableRow}>
                    <Text style={styles.cell}>{derivative.symbol}</Text>
                    <Text style={styles.cell}>
                      {derivative.session1_price || '-'}
                    </Text>
                    <Text style={styles.cell}>
                      {derivative.session1_qty || '-'}
                    </Text>
                    <Text style={styles.cell}>
                      {derivative.session2_price || '-'}
                    </Text>
                    <Text style={styles.cell}>
                      {derivative.session2_qty || '-'}
                    </Text>
                    <Text style={styles.cell}>
                      {derivative.session3_price || '-'}
                    </Text>
                    <Text style={styles.cell}>
                      {derivative.session3_qty || '-'}
                    </Text>
                    <Text style={styles.cell}>
                      {derivative.session4_price || '-'}
                    </Text>
                    <Text style={styles.cell}>
                      {derivative.session4_qty || '-'}
                    </Text>
                    <Text style={styles.cell}>
                      {derivative.session5_price || '-'}
                    </Text>
                    <Text style={styles.cell}>
                      {derivative.session5_qty || '-'}
                    </Text>
                    <Text style={styles.cell}>
                      {derivative.session6_price || '-'}
                    </Text>
                    <Text style={styles.cell}>
                      {derivative.session6_qty || '-'}
                    </Text>
                    <Text style={styles.cell}>
                      {derivative.avg_price || '-'}
                    </Text>
                    <Text style={styles.cell}>
                      {derivative.total_volume || '-'}
                    </Text>
                    <Text style={styles.cell}>
                      {derivative.total_turnover || '-'}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
