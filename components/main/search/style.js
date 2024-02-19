import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  searchbox: {
    margin: 10,
    borderBlockColor: 'black',
    borderWidth: 1,
    height: 40,
    borderRadius: 30,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
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
});
