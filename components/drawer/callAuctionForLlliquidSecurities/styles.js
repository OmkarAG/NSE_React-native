import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  table: {
    borderWidth: 1,
    borderColor: '#E3E3E3',
    margin: 10,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#E3E3E3',
    padding: 10,
    backgroundColor: 'white',
  },
  tableRow1: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#E3E3E3',
    // padding: 10,
    backgroundColor: 'white',
  },

  columnHeader: {
    flex: 1,
    fontWeight: 'bold',
    color: 'white',
    // marginHorizontal: 10,
    width: 100,
    textAlign: 'center',
  },
  columnHeader1: {
    flex: 1,
    fontWeight: 'bold',
    color: 'white',
    // marginHorizontal: 10,
    width: 100,
    textAlign: 'center',
    borderLeftColor: 'white',
    borderLeftWidth: 1,
  },

  cell: {
    flex: 1,
    textAlign: 'center',
    // marginHorizontal: 10,
    color: 'black',
    // marginRight:25,
    width: 100,
    textAlign: 'center',
  },
});
