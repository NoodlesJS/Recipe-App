import React, { useEffect, useRef, useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native'
import tw from 'tailwind-rn'
import { Feather } from '@expo/vector-icons'

import { extraStyles } from '../../styles/extraStyles'
import { BackButton, RecipeCardLong } from '../../components'

export const Search = ({navigation}) => {
  const [searchItem, setSearchItem] = useState(null)
  const [recipes, setRecipes] = useState(null)
  const inputRef = useRef()

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  const getRecipeSearch = async() => {
    const recipeData = await fetch(`https://www.themealdb.com/api/json/v2/9973533/search.php?s=${searchItem}`)
    const searchRecipe = await recipeData.json()
    setRecipes(searchRecipe.meals)
  }

  return (
    <View style={tw('flex-1 bg-gray-50')}>
      <View style={tw('flex-row justify-between items-center pt-10 px-6 pb-6 bg-gray-200')}>
        <BackButton
          onPress={() => navigation.goBack()}
        />
        <View style={tw('flex-row justify-between items-center w-10/12 h-12 px-4 rounded-lg bg-white')}>
          <TextInput
            style={[tw('w-4/5 text-base self-center'), extraStyles.fontR]}
            placeholder="Search recipe name"
            autoFocus={true}
            ref={inputRef}
            onChangeText={(value) => {setSearchItem(value)}}
            onSubmitEditing={getRecipeSearch}
          />
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={getRecipeSearch}
          >
            <Feather name="search" size={24} color="#9CA3AF" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={tw('px-4')}>
        <FlatList
            data={recipes}
            keyExtractor={item => item.idMeal}
            showsVerticalScrollIndicator={false}
            renderItem={item => {
              return (
                <RecipeCardLong
                  recipeItem={item.item}
                  onPress={() => navigation.navigate('Recipe', {recipe: item.item})}
                />
              )
            }}
            ListHeaderComponent={
              <View style={tw('pt-6')} />
            }
            ListFooterComponent={
              <View style={tw('mb-40')} />
            }
          />
      </View>
    </View>
  )
}
