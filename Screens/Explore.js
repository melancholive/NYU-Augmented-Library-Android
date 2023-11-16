import React, {useState} from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
} from 'react-native';
import ScreenTemplate from "./screenTemplate";
import styles from "./styles/General";


export default function Explore() {
  const [searchQuery, setSearchQuery] = useState('');
  const bords1={borderTopLeftRadius:15,borderBottomLeftRadius:15};
  const bords2={borderTopRightRadius:15,borderBottomRightRadius:15};
  return(
    <ScreenTemplate contentContainerStyle={styles.scrollView}>
      <ScrollView>
        <Text style={{fontSize:40,alignSelf:'center'}}>Explore</Text>
        <View style={{width: 300,alignSelf: 'center'}}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TextInput
              style={{flex: 1,height: 30,paddingLeft: 7,borderWidth: 1,borderColor: 'gray',...bords1,...styles.searchBar}}
              placeholder="Search..."
              onChangeText={text=>setSearchQuery(text)}
              value={searchQuery}
            ></TextInput>
            <Button title="Search" style={{flex: 1,...bords2}}></Button>
          </View>
        </View>
        <View style={styles.exploreBox}><Text>Books & More</Text></View>
        <View style={styles.exploreBox}><Text>Articles and Databases</Text></View>
        <View style={styles.exploreBox}><Text>Course Reserve</Text></View>
      </ScrollView>
    </ScreenTemplate>
  )
}



