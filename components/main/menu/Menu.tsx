import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './style';
import {useNavigation} from '@react-navigation/native';
import { Header } from '../../header/Header';

export const Menu = () => {
  const navigation = useNavigation();
  const menus = [
    {
      id: 1,
      component: 'HeatMap',
      name: 'HeatMap',
    },
    {
      id: 2,
      name: 'Derivatives',
    },
  ];

  const handleMenuPress = menuName => {
    navigation.navigate(menuName);
  };

  return (
    <View>
        <Header/>
      {menus.map(item => (
        <TouchableOpacity
          key={item.id}
          style={styles.menuContainer}
          onPress={() => handleMenuPress(item.component)}>
          <View>
            <Text style={styles.menuText}>{item.name}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};
