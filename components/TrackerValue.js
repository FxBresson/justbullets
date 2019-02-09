import React from 'react'
import { View, Text } from 'react-native'

export default class TrackerValue extends React.Component {
  render() {
    const { value, goal, type } = this.props
    let goalText = goal !== null && goal !== undefined ? `/${goal}` : ''
    let valueText = type === 'bool' ? value ? 'Done' : 'Not Done' : value

    return (
      <View>
          <Text>
            {valueText}
            {goalText}
          </Text>
      </View>
    )
  }
}