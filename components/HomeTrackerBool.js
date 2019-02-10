import React from 'react'
import { TouchableOpacity, View } from 'react-native'

import { checkbox } from '../styles'

const HomeTrackerBool = ({ value, onPress, index }) => {
  return (
    <TouchableOpacity
      style={[
        checkbox.default,
        checkbox.toggleWrapper,
        value && checkbox.check,
        value && checkbox.toggleWrapperCheck,
      ]}
      onPress={() => {
        onPress(index)
      }}
    >
      <View
        style={[
          checkbox.default,
          checkbox.toggle,
          value && checkbox.toggleCheck,
        ]}
      />
    </TouchableOpacity>
  )
}

export default HomeTrackerBool
