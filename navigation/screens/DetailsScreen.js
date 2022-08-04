import * as React from 'react';
import { View, Text, Animated, TouchableOpacity, Image, TextInput, StyleSheet, ImageBackground } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import itinerariesActions from '../../assets/redux/actions/itinerariesActions';
import citiesActions from '../../assets/redux/actions/citiesActions';







const backgroundImage = { uri: 'https://imge.cloud/images/2022/06/08/rV3Akf.jpg' }



export default function DetailsScreen({ route, navigation }) {

    const id = route.params.cityId


    const dispatch = useDispatch();
    useEffect(() => {

      const res=   dispatch(citiesActions.getOneCity(id))
console.log(res) 
        dispatch(itinerariesActions.findItinerariesFromCity(id))

        // eslint-disable-next-line
    }, [])

    const city = useSelector(store => store.citiesReducers.oneCity)

    const itineraries = useSelector(store => store.itinerariesReducer.getItinerariesFromCity)
    console.log(itineraries)

    return (
        <ImageBackground source={backgroundImage} style={styles.backgroundImage} >
            <ScrollView>



                <View style={styles.container}>
                    <View style={styles.card}>


                        <Image source={{ uri: city.image }} style={styles.imageContainer} />
                        <Text style={styles.titulo}>{city.name}</Text>
                        <Text style={{ fontSize: 25, textAlign: 'center', color: 'white', fontWeight: 'bold' }}>
                            Population :  {city.population}
                        </Text>
                        <Text style={{ fontSize: 15, textAlign: 'center', color: 'white', fontWeight: 'bold' }}>{city.description}</Text>
                    </View>

                    <Animated.FlatList data={itineraries}

                        keyExtractor={(item) => item._id}
                        renderItem={({ item}) => {
                            
                            return (
                                <View style={styles.Itinieraries}>
                                    <Text style={styles.TextItinerary}>{item.nameItinerary} </Text>
                                    <View style={styles.TextPerson}>
                                        <Image source={{ uri: item.imagePerson }} style={styles.imgPerson} />
                                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}> {item.namePerson}</Text>
                                    </View>
                                    <Text> Duration:{item.duration}</Text>
                                    <Text> Likes:🤍0</Text>
                                    <Text> Price:💵💵💵{item.price}</Text>
                                    <Text> {item.hashtags}</Text>
                                    <TouchableOpacity  onPress={()=>{navigation.navigate('Activitys',{itineraries:item._id})}}
                                                
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

                                


                            )

                                    

                        }}
                    />



                </View>
            </ScrollView>
        </ImageBackground >
    )
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",


    },
    backgroundImage: {
        flex: 1,
        justifyContent: "center",

    },

    imageContainer: {
        marginTop: 10,
        backgroundColor: "white",
        height: "30%",
        borderRadius: 35,
        borderColor: 'white',
        margin: 0,
        borderWidth: 3,

    },

    card: {
        backgroundColor: 'orange',
        marginTop: 15,
        borderWidth: 3,
        height: 400,
        width: 300,
        textAlign: "center",
        borderRadius: 50,
        padding: 10,


    },
    titulo: {
        color: "black",
        fontSize: 42,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: 'orange',
    },

    Itinieraries: {
        flex: 1,
        alignItems: "center",

        marginTop: 10,
        width: 350,
        height:350,
        borderColor: "black",
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 55,
        borderWidth: 5,
    },
    imgPerson: {
        width: 100,
        height: 100,
        marginTop: 10,
        borderRadius: 50,

    },
    TextItinerary: {
        fontSize: 20,
        textAlign: 'center',
        color: 'black',
        fontWeight: 'bold',



    },
    TextPerson: {
        backgroundColor: "orange",
        width: 340,
        alignItems: "center",
    },

    imageActivity: {
        width: 200,
        height: 200
    }

})