import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
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
