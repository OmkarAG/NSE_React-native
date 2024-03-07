import { useNavigation } from "@react-navigation/native";
import { ScrollView, TouchableOpacity, View } from "react-native"
import { Text } from "react-native-paper";
import { Header } from "../../header/Header";
import { DerivativesTabs } from "../../Tabs/derivatives/DerivativesTabs";
import { style } from "./styles";
import { useState } from "react";
import { Gainers } from "../../gainers/Gainers";
import { EquityDerivatives } from "../../equityDerivatives/EquityDerivatives";
import { CurrencyDerivatives } from "../../currencyDerivatives/CurrencyDerivatives";
import { CommodityDerivatives } from "../../commodityDerivatives/CommodityDerivatives";
import { InterestRateDerivatives } from "../../interestRateDerivatives/InterestRateDerivatives";

export const Derivatives = () => {
  const [activeTab, setActiveTab] = useState('Equity')

  const navigation = useNavigation()

  return (
    <View>
      <Header componentName="Derivatives" navigation={navigation} />
      <View style={style.tabsContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{backgroundColor:"#B0B0B040",}}>
          {/* <DerivativesTabs /> */}
          <TouchableOpacity style={[style.tab, activeTab == "Equity" ? style.activeTab : null]} onPress={() => setActiveTab('Equity')}>
            <Text style={[ activeTab == "Equity" ? style.activeTabText : null]}>Equity Derivatives</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[style.tab, activeTab == "Currency" ? style.activeTab : null]} onPress={() => setActiveTab('Currency')}>
            <Text style={[ activeTab == "Currency" ? style.activeTabText : null]}>Currency Derivatives</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[style.tab, activeTab == "Commodity" ? style.activeTab : null]} onPress={() => setActiveTab('Commodity')}>
            <Text style={[ activeTab == "Commodity" ? style.activeTabText : null]}>Commodity Derivatives</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[style.tab, activeTab == "Interest" ? style.activeTab : null]} onPress={() => setActiveTab('Interest')}>
            <Text style={[ activeTab == "Interest" ? style.activeTabText : null]}>Interest Rate Derivatives</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <View>
        {
          activeTab=='Equity'?
          <EquityDerivatives/>:null
        }
        {
          activeTab=='Currency'?
          <CurrencyDerivatives/>:null
        }
        {
          activeTab=='Commodity'?
          <CommodityDerivatives/>:null
        }
        {
          activeTab=='Interest'?
          <InterestRateDerivatives/>:null
        }
      </View>
    </View>
  );
}