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
  scrollViewContent: {
    padding: 20,
    // marginTop: 10,
    paddingBottom: 112,
  },
  stockContainer: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    marginBottom: 20,
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
  searchStocks: {
    marginTop: 100,
    // marginHorizontal:20,
    position: 'absolute',
    // top: 75,
    // left: 15,
    right: 80,
    zIndex: 1,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  modalContent: {
    width: 200,
    height: 150,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeModalImg: {
    width: 20,
    height: 20,
  },
  closeModal: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  container: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  option: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: 'lightgray',
  },
  selectedOption: {
    backgroundColor: 'lightblue',
  },
  optionText: {
    fontSize: 20,
  },
  searchStockContainer:{
    padding:5,
    flexDirection: 'row',
    width:250,
    gap: 10,
    alignItems: 'center',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#B0B0B0',
  }
});
