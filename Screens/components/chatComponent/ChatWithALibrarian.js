import React from 'react';
import {
  ScrollView,
  Text, View, Button, Alert
} from 'react-native';
import ScreenTemplate from "../../screenTemplate";
import style from "./chatStyles";

const chatWithALibrarian = () => {
    // buttons are not currently functional!!
    // alert consts are not used/do not work yet
    const chatAlert = () =>
        Alert.alert('Alert Title', 'My Alert Msg', [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            {text: 'OK', onPress: () => console.log('OK Pressed')},
        ]);
    const emailAlert = () =>
        Alert.alert('Alert Title', 'My Alert Msg', [
            {
                text: 'Ask me later',
                onPress: () => console.log('Ask me later pressed')
            }
        ]);
    return (
        <ScreenTemplate>
          <ScrollView>
            <View style={style.scrollStyle}>
                <Text style={style.title}>Chat with a Librarian</Text>
            </View>
              <View style={style.buttonContainer}>
                  <View style={style.button}>
                      <Text style={style.buttonTitle}>Chat</Text>
                      {/*<Button title={'Chat'} onPress={chatAlert}></Button>*/}
                  </View>
              </View>
              <View style={style.buttonContainer}>
                  <View style={style.button}>
                      <Text style={style.buttonTitle}>Email</Text>
                      {/*<Button title={'Email'} onPress={emailAlert}></Button>*/}
                  </View>
              </View>
          </ScrollView>
        </ScreenTemplate>
    );
};


export default chatWithALibrarian;
