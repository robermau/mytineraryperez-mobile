import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createNativeStackNavigator} from '@react-navigation/native-stack'

// Screens
import HomeScreen from './screens/HomeScreen';
import CitiesScreen from './screens/CitiesScreen';
import DetailsScreen from './screens/DetailsScreen';
import LoginScreen from './screens/LoginScreen';
import ActivityScreen from './screens/ActivityScreen'


const CitiesStackNavigator = createNativeStackNavigator()
const homeName = "Home";
const citiesName = "Cities";
const DetailsName = "Details";
const LoginName = "Login";

function MyStack() {

  return (
    <CitiesStackNavigator.Navigator  initialRouteName="CitiesScreen">
         
<CitiesStackNavigator.Screen
options={{headerShown:false}}
 name="CitiesScreen"
 component={CitiesScreen}
/>
<CitiesStackNavigator.Screen
name="Details"
component={DetailsScreen}/>
<CitiesStackNavigator.Screen
name="Activitys"
component={ActivityScreen}/>
<CitiesStackNavigator.Screen
name="Login"
component={LoginScreen}/>
  
</CitiesStackNavigator.Navigator>


  

   
      

  )
}







//Screen names


const Tab = createBottomTabNavigator();

 export default function MainContainer({navigation}) {
  return (
    
   
      <Tab.Navigator 
      
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
            
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === citiesName) {
              iconName = focused ? 'map' : 'map-sharp';

            
            }else if (rn === LoginName) {
              iconName = focused ? 'people-outline' : 'people-outline';
            }
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarLabelStyle={{
          activeTintColor: 'grey',
          inactiveTintColor: 'black',
          labelStyle: { paddingBottom: 10, fontSize: 10},
          style: { padding: 10, height: 70, },
          
        }}>

        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={citiesName} component={MyStack} />
        <Tab.Screen name={LoginName} component={LoginScreen} />
       


      </Tab.Navigator>
   
   
  );
}

