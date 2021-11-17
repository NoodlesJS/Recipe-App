import React from 'react'
import { View, Text } from 'react-native'
import tw from 'tailwind-rn'

import { extraStyles } from '../styles/extraStyles'

export const Ingredient = ({ingredient}) => {
  return (
    <View style={[tw('flex-row justify-between items-center w-full h-11 px-2 mb-2 bg-white rounded-md'), extraStyles.shadow_xs]}>
      <Text style={[tw('text-sm text-gray-900'), extraStyles.fontB]}>{ingredient.ingredient}</Text>
      <Text style={[tw('text-sm text-gray-900'), extraStyles.fontR]}>{ingredient.quantity}</Text>
    </View>
  )
}
