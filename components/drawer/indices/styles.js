import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#3A2D7D',
    padding: 10,
    paddingLeft: 15,
  },
  indices: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 40,
    marginBottom:10
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 200,
    height: 620,
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
});
