import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import tw from 'tailwind-rn'

import { extraStyles } from '../styles/extraStyles'

export const RecipeCardLong = ({recipeItem, onPress}) => {
  return (
    <View style={tw('px-1')}>
      <TouchableOpacity 
        onPress={onPress}
        activeOpacity={0.5}
        style={[tw('flex-row w-full h-32 mb-2 bg-white rounded-xl'), extraStyles.shadow_sm]}
      >
        <Image
          style={[tw('w-2/5 h-32 rounded-l-xl')]}
          source={{uri: recipeItem.strMealThumb}}
          resizeMode="cover"
        />
        <View style={tw('justify-between w-3/5 p-3')}>
          <View>
            <Text style={[tw('text-sm text-gray-900'), extraStyles.fontB]}>{recipeItem.strMeal}</Text>
            <Text style={[tw('text-xs text-gray-500'), extraStyles.fontR]}>{recipeItem.strArea}</Text>
          </View>
          <View style={tw('self-start py-0.5 px-2 bg-gray-900 bg-opacity-75 rounded-full')}>
            <Text style={[tw('text-xs text-white'), extraStyles.fontR]}>{recipeItem.strCategory}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}
