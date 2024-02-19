import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 16,
  },
  homeText: {
    fontWeight: 'bold',
    color: '#daa520',
    fontSize: 24,
    marginTop: 8,
  },
  image: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginTop: 20,
    tintColor: '#daa520',
  },
});
