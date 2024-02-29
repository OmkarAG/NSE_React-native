import {StyleSheet} from 'react-native';
import {white} from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

export const styles = StyleSheet.create({
  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  price: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 20,
    flex: 1,
  },
  name: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 20,
    flex: 2,
  },
  changes: {
    fontSize: 15,
    textAlign: 'right',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  buy: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'green',
    padding: 11,
    borderRadius: 10,
  },
  sell: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'red',
    padding: 11,
    borderRadius: 10,
  },
  container: {
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  label: {
    fontWeight: 'bold',
  },
  value: {
    marginLeft: 10,
  },
  activeBtn: {
    backgroundColor: 'gray',
    color: 'white',
    borderRadius: 5,
  },
});
