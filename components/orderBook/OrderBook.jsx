import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { styles } from './styles';

export const OrderBook = () => {
    return (
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <View>
                <Text style={{ fontWeight: 'bold', fontSize: 25, color: '#3A2D7D' }}>Order Book</Text>
                <View style={styles.table}>
                    <View style={[styles.tableRow, { backgroundColor: '#C35516' }]}>
                        <Text style={styles.columnHeader}>Qty</Text>
                        <Text style={styles.columnHeader}>Bid (₹)</Text>
                        <Text style={styles.columnHeader}>Ask (₹)</Text>
                        <Text style={styles.columnHeader}>Qty</Text>
                    </View>
                    <View style={styles.tableRow}>
                        <Text style={styles.cell}>22</Text>
                        <Text style={styles.cell}>4722</Text>
                        <Text style={styles.cell}>4723</Text>
                        <Text style={styles.cell}>25</Text>
                    </View>
                    <View style={styles.tableRow}>
                        <Text style={styles.cell}>22</Text>
                        <Text style={styles.cell}>4722</Text>
                        <Text style={styles.cell}>4723</Text>
                        <Text style={styles.cell}>25</Text>
                    </View>
                    <View style={styles.tableRow}>
                        <Text style={styles.cell}>22</Text>
                        <Text style={styles.cell}>4722</Text>
                        <Text style={styles.cell}>4723</Text>
                        <Text style={styles.cell}>25</Text>
                    </View>

                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'black' }}>Buy Quantity</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'black' }}>56012</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'black' }}>Sell Quantity</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'black' }}>64256</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};
