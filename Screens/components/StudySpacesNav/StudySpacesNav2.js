import React from 'react';
import { View, Text, Button } from 'react-native';
import ScreenTemplate from '../../screenTemplate';
import styles from './StudySpacesStyle';


export default function StudySpacesNav2() {
    return (
      <ScreenTemplate>
        <View style={styles.headerContainer}>
            <Text style={styles.header}>Room Availability</Text>
        </View>
        <View style={styles.spaces}>
          <View style={styles.buttonContainer}>
            <Button 
                style={styles.buttons}
                title="Small Space (2-5 people)"
                color= "rgb(92, 92, 92)"
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
                title="Large Space(4-8 people)"
                color="rgb(92, 92, 92)"
                style={styles.buttons}
            />
          </View>
        </View>
      </ScreenTemplate>
    );
  }

