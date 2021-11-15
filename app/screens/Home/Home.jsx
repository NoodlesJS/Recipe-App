import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import tw from 'tailwind-rn'
import { Feather } from '@expo/vector-icons';

import { extraStyles } from '../../styles/extraStyles';
import { dummyData } from '../../util/dummyData';
import { RecipeCard } from '../../components';

export const Home = ({navigation}) => {
  const [dummyData, setDummyData] = useState(null)

  useEffect(() => {
    getData()
  }, [])

  const getData = async() => {
    let data = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=g')
    let recipe = await data.json()
    setDummyData(recipe.meals)
  }

  return (
    <View style={tw('flex-1 bg-gray-50')}>
      {/* Header */}
      <View style={tw('pt-10 px-6 pb-6 bg-gray-200')}>
        <Text style={[tw('text-3xl text-gray-900'), extraStyles.fontM]}>Let's find you</Text>
        <Text style={[tw('text-3xl text-gray-900'), extraStyles.fontM]}>a delicious recipe</Text>
        <TouchableOpacity 
          style={tw('mt-4')} 
          activeOpacity={0.5} 
          onPress={() => navigation.navigate('Search')}
        >
          <View style={tw('flex-row justify-between items-center w-full h-12 px-4 rounded-lg bg-white')}>
            <Text style={[tw('text-lg text-gray-400')]}>Search recipe name</Text>
            <Feather name="search" size={24} color="#9CA3AF" />
          </View>
        </TouchableOpacity>
      </View>

      {/* Something Random */}
      <View style={tw('mt-9 px-6')}>
        <Text style={[tw('mb-4 text-xl text-gray-900'), extraStyles.fontB]}>Something random</Text>
        <FlatList 
          data={dummyData}
          renderItem={(item) => {
            return (
              <RecipeCard
                recipeItem={item.item}
                onPress={() => navigation.navigate('Recipe', {recipe: item.item})}
              />
            )
          }}
          keyExtractor={item => item.idMeal}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  )
}