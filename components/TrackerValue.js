import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class TrackerValue extends React.Component {
  render() {
    const { value, goal, type, week } = this.props
    let goalText = goal !== null && goal !== undefined ? `/${goal}` : ''
    let valueText = type === 'bool' ? (value ? 'Done' : 'Not Done') : value

    return (
      <View>
        <Text style={week && styles.week}>
          {valueText}
          {goalText}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    flex: 1,
  },
  week: {
    color: '#AAAAAA',
    textAlign: 'center',
    fontSize: 12,
  },
})
