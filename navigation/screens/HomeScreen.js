import * as React from 'react';
import { ImageBackground,StyleSheet,Image, View, Text, TouchableOpacity, ScrollViewComponent } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Carrousel from '../../assets/components/Carrousel';



const image ={uri:'https://imge.cloud/images/2022/06/08/rV3Akf.jpg'}



export default function HomeScreen({ navigation }) {
    return (
<SafeAreaView>
        <ScrollView>
        <View style={styles.container}>
         <ImageBackground source={image} resizeMode='cover' style={styles.image} >
         
         <Image source={require('../../assets/img/logo.png')} resizeMode='contain' style={styles.imageLogo} />
         <View >
         <Text style={styles.text}>"Find
          your perfect trip, designed by insiders who know and love
          their cities!".</Text>
          </View>
          <TouchableOpacity  onPress={()=> navigation.navigate('Cities')} style={styles.callToAction}>
             <Text style={styles.btnText}>Welcome to </Text>
             <Text style={styles.btnText}>Ancient Egypt</Text>
          </TouchableOpacity>
          <Carrousel/>
      </ImageBackground>  
      
        </View>
        </ScrollView>
        </SafeAreaView>
    );


}

const styles = StyleSheet.create({
    container: {
        flex:1,
      
      
    },
    imageLogo:{
     height:300,
     width:400,
     
    },
    image: {
      flex: 1,
      justifyContent: "flex-start",
      alignItems:'center',
      
    },
    text: {
        backgroundColor:'black',
       justifyContent:'center',
       alignContent:'center',
      color: "white",
      fontSize: 15,
      fontWeight: "bold",
      flexDirection:'column',
      textShadowColor:'orange',
      textShadowOffset:{width:-4, height:0},
      textShadowRadius:5,
      borderRadius:50,
      overflow:'hidden',
      width:400,
      height:50,
      textAlign:'center'
       },

       callToAction: {
        justifyContent: "center",
        alignItems:'center',
        backgroundColor: "orange",
        height:100,
        width:200,
        marginTop:20,
        borderRadius:50,
        textAlign:"center",
        marginBottom:20
      },

      btnText: {
        fontWeight:'bold',
        fontSize:20,
        
      }

       
  });