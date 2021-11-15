import React from 'react'
import { TouchableOpacity } from 'react-native'
import tw from 'tailwind-rn'
import { Feather } from '@expo/vector-icons'
import { extraStyles } from '../styles/extraStyles'

export const BackButton = ({onPress}) => {
  return (
    <TouchableOpacity
      style={[tw('h-10 w-10 justify-center items-center rounded-xl bg-white'), extraStyles.shadow_sm]}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <Feather name="arrow-left" size={24} color="#111827" />
    </TouchableOpacity>
  )
}
