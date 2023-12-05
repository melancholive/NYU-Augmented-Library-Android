import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import { WelcomeScreen, Services, SearchScreen, About,SignIn,Explore, ReserveScreen, ARVision, PickTime } from "./index";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RoomReservationStack from "./ScreenStacks/RoomReservationStack";
import Icon from "react-native-vector-icons/AntDesign";

const Tab = createBottomTabNavigator();


const screenOptions = (route, color) => {
    let iconName;

    switch (route.name) {
        case 'Home':
            iconName = 'home';
            break;
        case 'Browse':
            iconName = 'appstore-o';
            break;
        case 'Library':
            iconName = 'folder1';
            break;
        default:
            break;
    }

    return <Icon name={iconName} color={color} size={24} />;
};

const Stack = createStackNavigator();

const ExploreStack = () => {
  return (
    <Stack.Navigator initialRouteName="Explore">
      <Stack.Screen name="Explore" component={Explore} />
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
};

export default function App() {
    const stackDefault = { headerShown: false };
    return (
    <NavigationContainer>

        <Tab.Navigator
            screenOptions={
                ({route}) => ({
                    tabBarIcon: ({color}) => screenOptions(route, color),
                })
            }>
            <Tab.Screen name={"Home"} component={Explore} />
            <Tab.Screen name={"Reserve"} component={ReserveScreen} />
            <Tab.Screen name={"Search"} component={SearchScreen} />
        </Tab.Navigator>
    </NavigationContainer>
    );
}





