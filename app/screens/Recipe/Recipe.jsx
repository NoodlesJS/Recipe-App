import React from 'react'
import { View, Text } from 'react-native'
import tw from 'tailwind-rn'

import { extraStyles } from '../../styles/extraStyles'
import { BackButton } from '../../components'

export const Recipe = ({navigation, route}) => {
  return (
    <View style={tw('flex-1 justify-center items-center bg-gray-200')}>
      <BackButton
        onPress={() => navigation.goBack()}
      />
      <Text>Recipe page</Text>
    </View>
  )
}
