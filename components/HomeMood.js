import React from 'react'
import { View } from 'react-native'
import { button, checkbox } from '../styles'
import { Button } from 'react-native-elements'

const moods = {
  happy: 'Happy',
  sad: 'Sad',
  neutral: 'Neutral',
  angry: 'Angry',
  frustrated: 'Frustrated',
  confused: 'Confused',
}

const HomeMood = ({ value, onPress, index }) => {
  return (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
      {Object.keys(moods).map((mood, i) => {
        return (
          <View key={i} style={button.wrapper}>
            <Button
              titleStyle={[checkbox.text, value === mood && checkbox.textCheck]}
              buttonStyle={[checkbox.default, value === mood && checkbox.check]}
              onPress={() => onPress(index, mood)}
              title={moods[mood]}
            />
          </View>
        )
      })}
    </View>
  )
}

export default HomeMood
