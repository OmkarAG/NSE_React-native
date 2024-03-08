import { ScrollView, TouchableOpacity, View, Text } from "react-native"
import { Header } from "../../header/Header"
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import { useState } from "react";
import { EquityDerivatives } from "../../equityDerivatives/EquityDerivatives";
import { useSelector } from "react-redux";

export const Indices = () => {

  const navigation = useNavigation();

  const indices = useSelector(state => state.indices)

  console.log("indices", indices[0].data)

  const equityDerivatives = useSelector(state => state.derivatives)

  return (
    <View style={{ backgroundColor: 'white' }}>
      <Header componentName="Indices" navigation={navigation} />

      <View>


        <View style={styles.table}>
          <ScrollView horizontal contentContainerStyle={{ marginBottom: 70 }}>
            <View>
              <View style={[styles.tableRow, { backgroundColor: '#3A2D7D', }]}>
                <Text style={[styles.columnHeader,{width:150}]}>INDEX</Text>
                <Text style={styles.columnHeader}>CURRENT</Text>
                <Text style={styles.columnHeader}>%CHNG</Text>
                <Text style={styles.columnHeader}>OPEN</Text>
                <Text style={styles.columnHeader}>HIGH</Text>
                <Text style={styles.columnHeader}>LOW</Text>
                <Text style={styles.columnHeader}>PREV. CLOSE</Text>
                <Text style={styles.columnHeader}>PREV. DAY</Text>
                <Text style={styles.columnHeader}>1W AGO</Text>
                <Text style={styles.columnHeader}>1M AGO</Text>
                <Text style={styles.columnHeader}>1Y AGO</Text>
                <Text style={styles.columnHeader}>52W H</Text>
                <Text style={styles.columnHeader}>52W L	</Text>

              </View>
              <ScrollView>
                {
                  indices[0].data.map((indices, i) => (

                    <TouchableOpacity key={i}>
                      {/* <Text>{derivative.instrument}</Text> */}
                      <View style={styles.tableRow}>
                        <Text style={[styles.cell, {width:150}]}>{indices.index}</Text>
                        <Text style={styles.cell}>{indices.last}</Text>
                        <Text style={styles.cell}>{indices.percentChange}</Text>
                        <Text style={styles.cell}>{indices.open}</Text>
                        <Text style={styles.cell}>{indices.high}</Text>
                        <Text style={styles.cell}>{indices.low}</Text>
                        <Text style={styles.cell}>{indices.previousClose}</Text>
                        <Text style={styles.cell}>{indices.previousDay}</Text>
                        <Text style={styles.cell}>{indices.oneWeekAgo}</Text>
                        <Text style={styles.cell}>{indices.oneMonthAgo}</Text>
                        <Text style={styles.cell}>{indices.oneYearAgo}</Text>
                        <Text style={styles.cell}>{indices.yearHigh}</Text>
                        <Text style={styles.cell}>{indices.yearLow}</Text>
                      </View>
                    </TouchableOpacity>
                  ))
                }
              </ScrollView>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  )
}








// import { View, Text, Pressable, TouchableOpacity, ScrollView, Image, Modal } from "react-native"
// import { Header } from "../../header/Header";
// import { useNavigation } from "@react-navigation/native";
// import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { styles } from "./styles";

// export const Indices = () => {
//   const [header, setHeader] = useState('CURRENT')
//   const [i, setI] = useState(0)
//   const [showModal, setShowModal] = useState(false);
//   const [selectedOption, setSelectedOption] = useState(null);


//   const navigation = useNavigation();

//   const indices = useSelector(state => state.indices)

//   // console.log("indices", indices[0].data)

//   indices[0].data.map((d) => {
//     // console.log("dddd", d)
//   })
//   const headers = ["CURRENT", "% CHANGE", "OPEN", "HIGH", "LOW", "PREV. CLOSE", "PREV. DAY", "1 W Ago", "1 M Ago", "1 Y Ago", "52 W High", "52 W Low"]

//   const changeHeader = () => {
//     if (headers.length - 1 > i) {
//       setI(i + 1)
//     } else {
//       setI(0)
//     }
//     // console.warn("i", i)
//     setHeader(headers[i])
//   }

//   const handleList = () => {
//     // console.warn("list")
//     setShowModal(true)
//   }

//   const handleOptionPress = (header) => {
//     setHeader(header)
//     setShowModal(false)
//   }

//   const handleStockPress = stock => {
//     navigation.navigate('StockDetails', { stock }, navigation);
//   };

//   return (
//     <View>
//       <View>
//         <Header componentName="Indices" navigation={navigation} />
//       </View>
//       <View>
//         <View style={styles.header}>
//           <Text style={{ color: 'white', fontSize:20 }}>INDEX</Text>
//           <View style={{ flexDirection: 'row', alignItems: 'center', gap: 15 }}>
//             <TouchableOpacity onPress={() => changeHeader()}>
//               <Text style={{ color: 'white', paddingLeft: 80, fontSize:20 }} >{`${header}`}</Text>
//             </TouchableOpacity>
//             <TouchableOpacity onPress={() => handleList()}>
//               <Image source={require('../../../assets/triangleDown.png')} style={{ width: 20, height: 20, tintColor: 'white' }} ></Image>
//             </TouchableOpacity>
//           </View>
//         </View>
//         <ScrollView contentContainerStyle={{ padding: 10, paddingBottom:200 }} >
//           {
//             indices[0].data.map((indices, index) => (
//               <View style={styles.indices} key={index}>
//                 {/* <ScrollView horizontal> */}
//                 <TouchableOpacity style={{ padding: 5, width: '60%' }} onPress={() => handleStockPress(indices)}>
//                   <Text style={{ color: 'blue', fontSize:20 }}>{indices.index}</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity>
//                   {
//                     header == 'CURRENT' ? <Text style={{fontSize:20, color:'black'}}>{indices.last}</Text> : null
//                   }
//                   {
//                     header == "% CHANGE" ? <Text style={{fontSize:20, color:'black'}}>{indices.percentChange}</Text> : null
//                   }
//                   {
//                     header == 'OPEN' ? <Text style={{fontSize:20, color:'black'}}>{indices.open}</Text> : null
//                   }
//                   {
//                     header == 'HIGH' ? <Text style={{fontSize:20, color:'black'}}>{indices.high}</Text> : null
//                   }
//                   {
//                     header == 'LOW' ? <Text style={{fontSize:20, color:'black'}}>{indices.low}</Text> : null
//                   }
//                   {
//                     header == 'PREV. CLOSE' ? <Text style={{fontSize:20, color:'black'}}>{indices.previousClose}</Text> : null
//                   }
//                   {
//                     header == 'PREV. DAY' ? <Text style={{fontSize:20, color:'black'}}>{indices.previousDay}</Text> : null
//                   }
//                   {
//                     header == '1 W Ago' ? <Text style={{fontSize:20, color:'black'}}>{indices.oneWeekAgo}</Text> : null
//                   }
//                   {
//                     header == '1 M Ago' ? <Text style={{fontSize:20, color:'black'}}>{indices.oneMonthAgo}</Text> : null
//                   }
//                   {
//                     header == '1 Y Ago' ? <Text style={{fontSize:20, color:'black'}}>{indices.oneYearAgo}</Text> : null
//                   }
//                   {
//                     header == '52 W High' ? <Text style={{fontSize:20, color:'black'}}>{indices.yearHigh}</Text> : null
//                   }
//                   {
//                     header == '52 W Low' ? <Text style={{fontSize:20, color:'black'}}>{indices.yearLow}</Text> : null
//                   }
//                 </TouchableOpacity>

//                 {/* </ScrollView> */}
//               </View>
//             ))
//           }
//         </ScrollView>
//       </View>
//       <View>
//         <Modal
//           animationType={'fade'}
//           transparent={true}
//           visible={showModal}
//         >
//           <View style={styles.modalContainer}>
//             <View style={styles.modalContent}>
//               <TouchableOpacity style={styles.closeModal} onPress={() => { setShowModal(!showModal); }}>
//                 <Image source={require('../../../assets/close.png')} style={styles.closeModalImg} ></Image>
//               </TouchableOpacity>

//               <Text style={{ position: 'absolute', top: 10, fontWeight: 'bold', fontSize: 20 }}>Select</Text>
//               <View >
//                 {
//                   headers.map((header) => (
//                     <TouchableOpacity
//                       style={[styles.option, selectedOption === header && styles.selectedOption]}
//                       onPress={() => handleOptionPress(header)}
//                     >
//                       <Text style={styles.optionText}>{header}</Text>
//                     </TouchableOpacity>
//                   ))
//                 }
//               </View>
//             </View>
//           </View>
//         </Modal>
//       </View>
//     </View>
//   );
// }