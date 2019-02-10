import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

import { checkbox } from '../styles'

const HomeTrackerGoal = ({
  tracker,
  curr,
  index,
  decrementTracker,
  incrementTracker,
}) => {
  let checkboxes = []
  for (let i = 1; i <= tracker.goal; i++) {
    let checked = i <= curr
    checkboxes.push(
      <TouchableOpacity
        style={[checkbox.default, checkbox.round, checked && checkbox.check]}
        key={i}
        onPress={() =>
          checked ? decrementTracker(index) : incrementTracker(index)
        }
      >
        <Text style={[checkbox.text, checked && checkbox.textCheck]}>{i}</Text>
      </TouchableOpacity>,
    )
  }

  return (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>{checkboxes}</View>
  )
}

export default HomeTrackerGoal
