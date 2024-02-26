import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
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
  addNewText: {
    textAlign: 'right',
    margin: 15,
    fontWeight: 'bold',
  },
  scrollViewContent: {
    padding: 20,
    marginTop: 10,
    paddingBottom:112,
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
  image: {
    width: 200,
    height: 200,
    opacity: 0.2,
    marginTop: 100,
  },
  removeWatchlistText: {
    fontWeight: 'bold',
    fontSize: 30,
    margin: 10,
    width: 25,
  },
});
