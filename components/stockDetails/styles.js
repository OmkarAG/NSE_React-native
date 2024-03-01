import {StyleSheet} from 'react-native';
import {white} from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

export const styles = StyleSheet.create({
  stockNameWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#C35516',
    padding: 10,
    borderRadius: 5,
  },

  // price: {
  //   fontWeight: 'bold',
  //   color: 'black',
  //   fontSize: 20,
  //   flex: 1,
  // },
  stockName: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
    flex: 2,
  },
  stockDetailsWrapper: {
    flexDirection: 'row',
    backgroundColor: '#3A2D7D',
    marginTop: 10,
    borderRadius: 5,
    padding: 10,
    gap: 10,
  },
  stockPriceWrapper: {
    flex: 1,
    backgroundColor: '#231B4B',
    alignItems: 'center',
    height: 100,
  },
  stockDetailTextWrapper: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  // changes: {
  //   fontSize: 15,
  //   textAlign: 'right',
  // },
  // buttonContainer: {
  //   flexDirection: 'row',
  //   gap: 10,
  // },
  // buy: {
  //   flex: 1,
  //   alignItems: 'center',
  //   backgroundColor: 'green',
  //   padding: 11,
  //   borderRadius: 10,
  // },
  // sell: {
  //   flex: 1,
  //   alignItems: 'center',
  //   backgroundColor: 'red',
  //   padding: 11,
  //   borderRadius: 10,
  // },
  // container: {
  //   padding: 10,
  // },
  // row: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   marginVertical: 5,
  // },
  // label: {
  //   fontWeight: 'bold',
  // },
  // value: {
  //   marginLeft: 10,
  // },
  // activeBtn: {
  //   backgroundColor: 'gray',
  //   color: 'white',
  //   borderRadius: 5,
  // },

  BottomButtonsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 20,
    gap: 20,
    padding: 8,
  },
  bottomButton: {
    backgroundColor: '#C35516',
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
  },
});
