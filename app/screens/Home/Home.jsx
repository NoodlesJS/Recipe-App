import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import tw from 'tailwind-rn'
import { Feather } from '@expo/vector-icons';

import { extraStyles } from '../../styles/extraStyles';
import { RecipeCard, RecipeCardLong } from '../../components';

export const Home = ({navigation}) => {
  const [latestRecipe, setLatestRecipe] = useState(null)
  const [randomRecipe, setRandomRecipe] = useState(null)

  useEffect(() => {
    getData()
  }, [])

  const getData = async() => {
    //need to manage data fail

    let latestRecipe = await fetch('https://www.themealdb.com/api/json/v2/9973533/latest.php')
    let randomRecipe = await fetch('https://www.themealdb.com/api/json/v2/9973533/randomselection.php')
    let latest = await latestRecipe.json()
    let random = await randomRecipe.json()
    setLatestRecipe(latest.meals.slice(0, 5))
    setRandomRecipe(random.meals.slice(0, 5))
  }

  const headerView = () => {
    return (
      <>
        <Text style={[tw('pt-9 mb-4 text-xl text-gray-900'), extraStyles.fontB]}>Something random</Text>
        <FlatList 
          data={randomRecipe}
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
          ListEmptyComponent={
            <ActivityIndicator />
          }
        />
        <Text style={[tw('mt-9 mb-4 text-xl text-gray-900'), extraStyles.fontB]}>Latest Recipes</Text>
      </>
    )
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
      <View style={tw('px-6')}>
        <FlatList
          data={latestRecipe}
          keyExtractor={item => item.idMeal}
          showsVerticalScrollIndicator={false}
          initialNumToRender={3}
          ListHeaderComponent={headerView()}
          renderItem={item => {
            return (
              <RecipeCardLong
                recipeItem={item.item}
                onPress={() => navigation.navigate('Recipe', {recipe: item.item})}
              />
            )
          }}
          ListFooterComponent={
            <View style={tw('mb-60')} />
          }
          ListEmptyComponent={
            <ActivityIndicator />
          }
        />
      </View>
      
    </View>
  )
}