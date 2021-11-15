import React, { useEffect, useRef } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import tw from 'tailwind-rn'
import { Feather } from '@expo/vector-icons'

import { extraStyles } from '../../styles/extraStyles'
import { BackButton } from '../../components/BackButton'

export const Search = ({navigation}) => {
  const inputRef = useRef()
  useEffect(() => {
    inputRef.current.focus()
  }, [])
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
          />
          <TouchableOpacity
            activeOpacity={0.5}
          >
            <Feather name="search" size={24} color="#9CA3AF" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
