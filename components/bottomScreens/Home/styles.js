import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  indicatorContainer: {
    flexDirection: 'row',
    gap: 5,
    margin: 10,
  },
  indicator: {
    borderColor: '#B0B0B040',
    borderWidth: 1,
    borderRadius: 10,
    overflow: 'hidden',
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    padding: 10,
    elevation:10
  },
  leftColumn: {
    flex: 1,
  },
  rightColumn: {
    flex: 2,
    alignItems: 'flex-end',
  },
  scrollViewContent: {
    // padding: 20,
    // marginTop: 10,
    // paddingBottom:64,
  },
  stockContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    padding: 8,
    backgroundColor:'white',
    elevation:5,
    borderRadius:10
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
  shadowContainer: {
    backgroundColor: 'white',
    elevation: 5,
    borderRadius: 5,
    // padding: 10,
    // margin: 10,
  },
  stockPriceWrapper: {
    // flex: 1,
    // backgroundColor: '#231B4B',
    alignItems: 'center',
    height: 100,
  },
  highCloseWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  textViewContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
