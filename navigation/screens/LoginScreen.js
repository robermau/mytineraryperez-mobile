import * as React from 'react';
import { View, Text, Image,StyleSheet } from 'react-native';

export default function LoginScreen({ navigation }) {
    return (
        <View style={styles.container}>

          <Image source={require('../../assets/img/notfound.png')} resizeMode='contain' style={styles.imageLogo}/>
          <Text style={styles.btnText}> UNDER CONSTRUCTION </Text>
          </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
      
      
    },
    imageLogo:{
     height:300,
     width:400,
    },
      btnText: {
        fontWeight:'bold',
        fontSize:30,
        
      }
     
    })