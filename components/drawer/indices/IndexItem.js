import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { styles } from './styles';

const IndexItem = ({ indices }) => {
  const renderTableHeader = () => (
    <View style={[styles.tableRow, { backgroundColor: '#3A2D7D' }]}>
      <Text style={[styles.columnHeader, { width: 150 }]}>INDEX</Text>
      <Text style={styles.columnHeader}>CURRENT</Text>
      <Text style={styles.columnHeader}>%CHNG</Text>
      <Text style={styles.columnHeader}>OPEN</Text>
      <Text style={styles.columnHeader}>HIGH</Text>
      <Text style={styles.columnHeader}>LOW</Text>
      <Text style={styles.columnHeader}>PREV. CLOSE</Text>
      <Text style={styles.columnHeader}>PREV. DAY</Text>
      <Text style={styles.columnHeader}>1W AGO</Text>
      <Text style={styles.columnHeader}>1M AGO</Text>
      <Text style={styles.columnHeader}>1Y AGO</Text>
      <Text style={styles.columnHeader}>52W H</Text>
      <Text style={styles.columnHeader}>52W L</Text>
    </View>
  );

  const renderTableCell = ({ item }) => (
    <TouchableOpacity>
      <View style={styles.tableRow}>
        <Text style={[styles.cell, { width: 150 }]}>{item.index}</Text>
        <Text style={styles.cell}>{item.last}</Text>
        <Text style={styles.cell}>{item.percentChange}</Text>
        <Text style={styles.cell}>{item.open}</Text>
        <Text style={styles.cell}>{item.high}</Text>
        <Text style={styles.cell}>{item.low}</Text>
        <Text style={styles.cell}>{item.previousClose}</Text>
        <Text style={styles.cell}>{item.previousDay}</Text>
        <Text style={styles.cell}>{item.oneWeekAgo}</Text>
        <Text style={styles.cell}>{item.oneMonthAgo}</Text>
        <Text style={styles.cell}>{item.oneYearAgo}</Text>
        <Text style={styles.cell}>{item.yearHigh}</Text>
        <Text style={styles.cell}>{item.yearLow}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.table}>
      <ScrollView horizontal>
        <FlatList
          ListHeaderComponent={renderTableHeader}
          data={indices[0].data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderTableCell}
        />
      </ScrollView>
    </View>
  );
};

export default IndexItem;
