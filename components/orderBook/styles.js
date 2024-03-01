import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  table: {
    borderWidth: 1,
    borderColor: 'black',
    margin: 10,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: 'black',
    padding: 10,
  },
  columnHeader: {
    flex: 1,
    fontWeight: 'bold',
  },
  cell: {
    flex: 1,
  },
  scrollViewContent: {
    height:250
  },
});
