import React from 'react'
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import tw from 'tailwind-rn'
import { extraStyles } from '../styles/extraStyles'

export const RecipeCard = ({recipeItem, onPress}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={onPress}
    >
      <ImageBackground
        source={{uri: recipeItem.strMealThumb}}
        resizeMode="cover"
        style={tw('w-52 h-64 mr-2 rounded-xl overflow-hidden')}
        imageStyle={tw('rounded-xl')}
      >
        <LinearGradient
          style={tw('justify-between p-4 h-full w-full rounded-xl')}
          colors={['transparent', '#000000']}
          start={{x:0, y:0}}
          end={{x:0, y:1.2}}
        >
          <View style={tw('self-start py-0.5 px-2 bg-gray-900 bg-opacity-75 rounded-full')}>
            <Text style={[tw('text-sm text-white'), extraStyles.fontB]}>{recipeItem.strCategory}</Text>
          </View>
          <Text style={[tw('text-sm text-white'), extraStyles.fontB]}>{recipeItem.strMeal}</Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  )
}
