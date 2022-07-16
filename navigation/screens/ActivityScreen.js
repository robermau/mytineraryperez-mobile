import { View, Text } from 'react-native'
import React from 'react'

const ActivityScreen = ({ route, navigation }) => {

    const id = route.params.itineraries
    console.log(id)
  return (
    <View>
      <Text>ActivityScreen</Text>
    </View>
  )
}

export default ActivityScreen