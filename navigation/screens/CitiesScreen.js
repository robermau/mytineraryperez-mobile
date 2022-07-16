import * as React from 'react';
import { View, Text, Animated, TouchableOpacity, Image, TextInput, StyleSheet,ImageBackground } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import citiesActions from '../../assets/redux/actions/citiesActions'
import { createStackNavigator } from '@react-navigation/stack';




const backgroundImage ={uri:'https://imge.cloud/images/2022/06/08/rV3Akf.jpg'}






export default function CitiesScreen({ route, navigation }) {


    const [search, setSearch] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(citiesActions.getCities())
        dispatch(citiesActions.filterCities(search))

    }, [search]);

    const cityFilter = useSelector(store => store.citiesReducers.filter)


    let citySearch = cityFilter.filter(city => city.name.toLowerCase().startsWith(search.trim().toLowerCase()))
   



    return (
      
        <ImageBackground source={backgroundImage}   style={styles.backgroundImage} >
             <ScrollView>
    <View>
   
          <View>
      
            <View style={styles.container}>
                <TextInput style={{ width: 180,
        height: 40,
        margin: 60,
        borderWidth: 3,
        padding: 10,
        borderColor: 'black',
        backgroundColor: 'white'}}

                    placeholder='SEARCH'
                    onChangeText={(val) => setSearch(val)}

                />
                {citySearch.length > 0 ?


                    <Animated.FlatList data={citySearch}

                        keyExtractor={(item) => item._id}
                        renderItem={({ item }) => {
                            return (
                                <View>


                                    <View
                                        style={styles.card}
                                    >


                                        <Image  source={{ uri: item.image }} style={styles.imageContainer} />
                                        <Text style={styles.titulo}>{item.name}</Text>
                                     
                                        <TouchableOpacity  onPress={()=>{navigation.navigate('Details',{cityId:item._id})}}
                                                
                                            style={{ 
                                                backgroundColor: 'black',
                                                padding: 5,
                                                alignSelf: "center",
                                                borderRadius: 35,
                                                borderColor: 'black',
                                                
                                                
                                            }}
                                        >
                                            <Text style={{ fontSize: 25, textAlign: 'center', color: 'white', fontWeight: 'bold' }}>
                                                SEE MORE 
                                            </Text>


                                        </TouchableOpacity>

                                    </View>
                                </View>
                                
                            )
                        }}
                    />
                    :



                    <Animated.FlatList data={cityFilter}
                  
                    keyExtractor={(item) => item._id}
                    renderItem={({item})=>{
                     return (
                         <View>
              
                          
                          <View 
                          style={styles.card}
                          >
                                <Image  source={{uri:item.image}} style={styles.imageContainer}/>
                                   <Text style={styles.titulo}>{item.name}</Text>
                                 
                                   <TouchableOpacity
                           
                           style={{
                            backgroundColor: 'black',
                            padding: 5,
                            alignSelf: "center",
                            borderRadius: 35,
                            borderColor: 'black',
                            
                         }}
                           >
                            <Text style={{fontSize:25,textAlign: 'center',color: 'white',fontWeight: 'bold'}}>
                                    SEE MORE
                            </Text>
                             
                            
                           </TouchableOpacity>
                          
                          </View>
                          
                         </View>
                         
                     )
                    }}
                    />   

                }

            </View>
            
          
            </View>
           
            </View>
            </ScrollView>
            </ImageBackground>
            
    )
        } 


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
       
       
    },
    backgroundImage: {  
       flex:1,
     
       justifyContent: "center",
       
      },

    imageContainer: {
        marginTop:10,
        backgroundColor: "white",
       height:"60%",
       borderRadius: 35,
        borderColor: 'white',
        margin: 0,
       borderWidth: 3,

    },
   
    card: {
        backgroundColor: 'orange',
        marginTop: 15,
        borderWidth: 3,
        height:400,
        width: 275

    },
    titulo: {
        color: "black",
        fontSize:35,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: 'orange',
    },
    

});