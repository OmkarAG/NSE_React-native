import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    // justifyContent: 'flex-start',
    // alignItems: 'center',
    // paddingTop: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 16,
    paddingBottom:15,
    backgroundColor:'white',
    borderRadius:10,
    elevation:10
  },
  homeText: {
    fontWeight: 'bold',
    color: '#daa520',
    fontSize: 28,
    marginTop: 8,
  },
  image: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    marginTop: 20,
    tintColor: '#daa520',
  },
  // logo:{
  //   width:120,
  //   height:37,
  //   alignItems:'center'
  // },
  // modalContainer: {
  //   flex: 1,
  //   justifyContent: 'top',
  //   alignItems: 'center',
  //   backgroundColor: 'rgba(0, 0, 0, 0.1)',
  // },
  modalContainer: {
    flex: 1,
    position: 'absolute',
    // top: 35,
    // right: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    width: '100%',
    height: '100%',
    padding: 80,
  },

  modalContent: {
    position: 'absolute',
    top: 35,
    right: 35,
    width: 150,
    height: 150,
    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  modalText: {
    position: 'absolute',
    fontWeight: 'bold',
    fontSize: 20,
    // color: '#daa520',
    color: 'white',
    left: 8,
  },
  switch: {
    marginTop: 170,
    marginLeft: 60,
    width:50
  },
  customizeHome: {
    position: 'absolute',
    fontWeight: 'bold',
    fontSize: 20,
    // color: '#daa520',
    color: 'white',
    marginTop: 85,
  },
  stream: {
    position: 'absolute',
    fontWeight: 'bold',
    fontSize: 20,
    // color: '#daa520',
    color: 'white',
    marginTop: 125,
    left: 8,
  },
});
