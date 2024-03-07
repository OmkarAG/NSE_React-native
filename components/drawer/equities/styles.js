import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  tabsContainer: {
    borderBottomColor: '#B0B0B040',
    borderBottomWidth: 3,
  },
  tab: {
    // backgroundColor: 'red',
    padding: 10,
    marginHorizontal: 10,
    marginVertical: 5,
    backgroundColor:'white',
    borderRadius:10,
    elevation:10
  },
  activeTab: {
    borderBottomColor: '#daa520',
    borderBottomWidth: 3,
    
  },
  activeTabText: {
    color: '#daa520',
    fontWeight:'bold',
  },
});
