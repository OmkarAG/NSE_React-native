import { View, Text, Pressable, TouchableOpacity, ScrollView, Image, Modal } from "react-native"
import { Header } from "../../header/Header";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { styles } from "./styles";

export const Indices = () => {
  const [header, setHeader] = useState('CURRENT')
  const [i, setI] = useState(0)
  const [showModal, setShowModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);


  const navigation = useNavigation();

  const indices = useSelector(state => state.indices)

  // console.log("indices", indices[0].data)

  indices[0].data.map((d) => {
    // console.log("dddd", d)
  })
  const headers = ["CURRENT", "% CHANGE", "OPEN", "HIGH", "LOW", "PREV. CLOSE", "PREV. DAY", "1 W Ago", "1 M Ago", "1 Y Ago", "52 W High", "52 W Low"]

  const changeHeader = () => {
    if (headers.length - 1 > i) {
      setI(i + 1)
    } else {
      setI(0)
    }
    // console.warn("i", i)
    setHeader(headers[i])
  }

  const handleList = () => {
    // console.warn("list")
    setShowModal(true)
  }

  const handleOptionPress = (header) => {
    setHeader(header)
    setShowModal(false)
  }

  const handleStockPress = stock => {
    navigation.navigate('StockDetails', { stock }, navigation);
  };

  return (
    <View>
      <View>
        <Header componentName="Indices" navigation={navigation} />
      </View>
      <View>
        <View style={styles.header}>
          <Text style={{ color: 'white', fontSize:20 }}>INDEX</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 15 }}>
            <TouchableOpacity onPress={() => changeHeader()}>
              <Text style={{ color: 'white', paddingLeft: 80, fontSize:20 }} >{`${header}`}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleList()}>
              <Image source={require('../../../assets/triangleDown.png')} style={{ width: 20, height: 20, tintColor: 'white' }} ></Image>
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView contentContainerStyle={{ padding: 10, paddingBottom:200 }} >
          {
            indices[0].data.map((indices, index) => (
              <View style={styles.indices}>
                {/* <ScrollView horizontal> */}
                <TouchableOpacity style={{ padding: 5, width: '60%' }} onPress={() => handleStockPress(indices)}>
                  <Text style={{ color: 'blue', fontSize:20 }}>{indices.index}</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  {
                    header == 'CURRENT' ? <Text style={{fontSize:20, color:'black'}}>{indices.last}</Text> : null
                  }
                  {
                    header == "% CHANGE" ? <Text style={{fontSize:20, color:'black'}}>{indices.percentChange}</Text> : null
                  }
                  {
                    header == 'OPEN' ? <Text style={{fontSize:20, color:'black'}}>{indices.open}</Text> : null
                  }
                  {
                    header == 'HIGH' ? <Text style={{fontSize:20, color:'black'}}>{indices.high}</Text> : null
                  }
                  {
                    header == 'LOW' ? <Text style={{fontSize:20, color:'black'}}>{indices.low}</Text> : null
                  }
                  {
                    header == 'PREV. CLOSE' ? <Text style={{fontSize:20, color:'black'}}>{indices.previousClose}</Text> : null
                  }
                  {
                    header == 'PREV. DAY' ? <Text style={{fontSize:20, color:'black'}}>{indices.previousDay}</Text> : null
                  }
                  {
                    header == '1 W Ago' ? <Text style={{fontSize:20, color:'black'}}>{indices.oneWeekAgo}</Text> : null
                  }
                  {
                    header == '1 M Ago' ? <Text style={{fontSize:20, color:'black'}}>{indices.oneMonthAgo}</Text> : null
                  }
                  {
                    header == '1 Y Ago' ? <Text style={{fontSize:20, color:'black'}}>{indices.oneYearAgo}</Text> : null
                  }
                  {
                    header == '52 W High' ? <Text style={{fontSize:20, color:'black'}}>{indices.yearHigh}</Text> : null
                  }
                  {
                    header == '52 W Low' ? <Text style={{fontSize:20, color:'black'}}>{indices.yearLow}</Text> : null
                  }
                </TouchableOpacity>

                {/* </ScrollView> */}
              </View>
            ))
          }
        </ScrollView>
      </View>
      <View>
        <Modal
          animationType={'fade'}
          transparent={true}
          visible={showModal}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <TouchableOpacity style={styles.closeModal} onPress={() => { setShowModal(!showModal); }}>
                <Image source={require('../../../assets/close.png')} style={styles.closeModalImg} ></Image>
              </TouchableOpacity>

              <Text style={{ position: 'absolute', top: 10, fontWeight: 'bold', fontSize: 20 }}>Select</Text>
              <View >
                {
                  headers.map((header) => (
                    <TouchableOpacity
                      style={[styles.option, selectedOption === header && styles.selectedOption]}
                      onPress={() => handleOptionPress(header)}
                    >
                      <Text style={styles.optionText}>{header}</Text>
                    </TouchableOpacity>
                  ))
                }


                {/* <TouchableOpacity
                  style={[styles.option, selectedOption === 'ZtoA' && styles.selectedOption]}
                  onPress={() => handleOptionPress('ZtoA')}
                >
                  <Text style={styles.optionText}>Z to A</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.option, selectedOption === 'ZtoA' && styles.selectedOption]}
                  onPress={() => handleOptionPress('ZtoA')}
                >
                  <Text style={styles.optionText}>Z to A</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.option, selectedOption === 'ZtoA' && styles.selectedOption]}
                  onPress={() => handleOptionPress('ZtoA')}
                >
                  <Text style={styles.optionText}>Z to A</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.option, selectedOption === 'ZtoA' && styles.selectedOption]}
                  onPress={() => handleOptionPress('ZtoA')}
                >
                  <Text style={styles.optionText}>Z to A</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.option, selectedOption === 'ZtoA' && styles.selectedOption]}
                  onPress={() => handleOptionPress('ZtoA')}
                >
                  <Text style={styles.optionText}>Z to A</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.option, selectedOption === 'ZtoA' && styles.selectedOption]}
                  onPress={() => handleOptionPress('ZtoA')}
                >
                  <Text style={styles.optionText}>Z to A</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.option, selectedOption === 'ZtoA' && styles.selectedOption]}
                  onPress={() => handleOptionPress('ZtoA')}
                >
                  <Text style={styles.optionText}>Z to A</Text>
                </TouchableOpacity> */}
              </View>

            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
}




// import React from 'react';
// import { ScrollView, FlatList, View, Text, StyleSheet } from 'react-native';

// export const Indices = () => {
//   const data = [
//     { key: '1', text: 'Item 1' },
//     { key: '2', text: 'Item 2' },
//     { key: '3', text: 'Item 3' },
//     // Add more items as needed
//   ];

//   return (
//     <ScrollView style={styles.container}>
//       <View style={styles.horizontalScroll}>
//         <FlatList
//           horizontal
//           data={data}
//           renderItem={({ item }) => (
//             <View style={styles.item}>
//               <Text>{item.text}</Text>
//             </View>
//           )}
//         />
//       </View>

//       {/* Vertical ScrollView */}
//       <ScrollView>
//         {data.map(item => (
//           <View key={item.key} style={styles.item}>
//             <Text>{item.text}</Text>
//           </View>
//         ))}
//       </ScrollView>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   horizontalScroll: {
//     flexDirection: 'row',
//     paddingHorizontal: 16,
//   },
//   item: {
//     width: 100,
//     height: 100,
//     marginRight: 16,
//     marginBottom: 16,
//     backgroundColor: '#e0e0e0',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// // export default VerticalHorizontalScrollExample;
