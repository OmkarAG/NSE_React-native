import { ScrollView, View,Text, TouchableOpacity } from "react-native"
import { Header } from "../../header/Header";
import { useNavigation } from "@react-navigation/native";
import { EquitiesTabs } from "../../Tabs/equities/Equities";
import { useState } from "react";
import { style } from "./styles";
import { Gainers } from "../../gainers/Gainers";
import { Losers } from "../../losers/Losers";
import { CommodityDerivatives } from "../../commodityDerivatives/CommodityDerivatives";

export const Equities = () => {
  const [activeTab, setActiveTab] = useState('Gainers')

  const navigation = useNavigation()

  return (
    <View>
      <Header componentName="Equities" navigation={navigation} />
      {/* <View style={{height:'100%'}}>
        <EquitiesTabs/>
      </View> */}

      <View style={style.tabsContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ backgroundColor: "#B0B0B040", }}>
          {/* <DerivativesTabs /> */}
          <TouchableOpacity style={[style.tab, activeTab == "Gainers" ? style.activeTab : null]} onPress={() => setActiveTab('Gainers')}>
            <Text style={[ activeTab == "Gainers" ? style.activeTabText : null]}>Gainers</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[style.tab, activeTab == "Losers" ? style.activeTab : null]} onPress={() => setActiveTab('Losers')}>
            <Text style={[ activeTab == "Losers" ? style.activeTabText : null]}>Losers</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[style.tab, activeTab == "Top Turnover" ? style.activeTab : null]} onPress={() => setActiveTab('Top Turnover')}>
            <Text style={[ activeTab == "Top Turnover" ? style.activeTabText : null]}>Top Turnover</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[style.tab, activeTab == "52 weeks high" ? style.activeTab : null]} onPress={() => setActiveTab('52 weeks high')}>
            <Text style={[ activeTab == "52 weeks high" ? style.activeTabText : null]}>52 weeks high</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[style.tab, activeTab == "52 weeks low" ? style.activeTab : null]} onPress={() => setActiveTab('52 weeks low')}>
            <Text style={[ activeTab == "52 weeks low" ? style.activeTabText : null]}>52 weeks low</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      <View>
      {
          activeTab=='Gainers'?
          <Gainers/>:null
        }
        {
          activeTab=='Losers'?
          <Losers/>:null
        }
        {
          activeTab=='Top Turnover'?
          <Losers/>:null
        }
        {
          activeTab=='52 weeks high'?
          <Losers/>:null
        }
        {
          activeTab=='52 weeks low'?
          <Losers/>:null
        }
      </View>

    </View>
  );
}