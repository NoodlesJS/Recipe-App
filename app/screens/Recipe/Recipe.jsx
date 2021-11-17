import React, { useState, useEffect } from 'react'
import { View, Text, ImageBackground, FlatList } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import Constants from 'expo-constants'
import tw from 'tailwind-rn'

import { extraStyles } from '../../styles/extraStyles'
import { BackButton, Ingredient } from '../../components'

export const Recipe = ({navigation, route}) => {
  const [currentRecipe, setCurrentRecipe] = useState(null)
  const [recipeItems, setRecipeItems] = useState(null);

  useEffect(() => {
    const { recipe } = route.params
    setCurrentRecipe(recipe)
  }, [])

  useEffect(() => {
    currentRecipe && getRecipeItems()
  }, [currentRecipe])

  const getRecipeItems = () => {
    let recipeItemsBreakdown = []
    for(let i = 0; i < 20; i++) {
      currentRecipe[`strIngredient${i}`] && recipeItemsBreakdown.push(
        {
          ingredient: currentRecipe[`strIngredient${i}`], 
          quantity: currentRecipe[`strMeasure${i}`],
          id: i
        }
      )
    }
    setRecipeItems(recipeItemsBreakdown)
  }

  const headerView = () => {
    return (
      <>
        <ImageBackground
          source={{uri: currentRecipe?.strMealThumb}}
          style={[tw('h-72 w-full'), {marginTop: Constants.statusBarHeight}]}
          resizeMode="cover"
        >
          <LinearGradient
            style={tw('p-6 h-full w-full')}
            colors={['rgba(0,0,0,0.75)', 'transparent']}
            start={{x:0, y:0}}
            end={{x:0, y:0.5}}
          >
            <BackButton
              onPress={() => navigation.goBack()}
            />
          </LinearGradient>
        </ImageBackground>
        <View style={tw('flex-1 px-6 bg-gray-50')}>
          <Text style={[tw('pt-6 text-2xl text-gray-900'), extraStyles.fontB]}>{currentRecipe?.strMeal}</Text>
          <Text style={[tw('text-lg text-gray-500'), extraStyles.fontR]}>{currentRecipe?.strArea}</Text>
          <View style={tw('self-start mt-2 py-0.5 px-2 bg-gray-900 bg-opacity-75 rounded-full')}>
            <Text style={[tw('text-sm text-white'), extraStyles.fontR]}>{currentRecipe?.strCategory}</Text>
          </View>
          <View style={tw('mt-9')}>
            <View style={tw('flex-row justify-between items-center mb-4')}>
              <Text style={[tw('text-xl text-gray-900'), extraStyles.fontB]}>Ingredients</Text>
              <Text style={[tw('text-sm text-gray-500'), extraStyles.fontR]}>{`${recipeItems?.length} items`}</Text>
            </View>
            {recipeItems && recipeItems.map(item => <Ingredient ingredient={item} key={item.id}/>)}
          </View>
        </View>
      </>
    )
  }

  return (
    <FlatList 
      ListHeaderComponent={headerView()}
    />
  )
}
