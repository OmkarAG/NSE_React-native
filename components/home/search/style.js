import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchbox: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    margin: 10,
    // borderRightWidth:0,
    backgroundColor: 'white',
  },
  clear: {
    fontWeight: 'bold',
    margin: 5,
  },
  // searchbox: {
  //   margin: 10,
  //   borderBlockColor: 'black',
  //   borderWidth: 1,
  //   height: 40,
  //   borderRadius: 30,
  //   borderTopRightRadius: 30,
  //   borderTopLeftRadius: 30,
  // },
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
  image: {
    width: 200,
    height: 200,
    opacity: 0.2,
    marginTop: 100,
  },
  addWatchlistText: {
    fontWeight: 'bold',
    fontSize: 30,
    margin: 10,
    width: 25,
  },
});
