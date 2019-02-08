import React from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { commons } from '../styles'
import MiddleTitle from '../components/MiddleTitle'

class StatsScreen extends React.Component {
  static navigationOptions = {
    title: 'Stats',
  }

  _renderTrackerValue(index, goal, type) {
    let goalText = goal !== null && goal !== undefined ? `/${goal}` : ''
    let value = this.props.today.find(e => e.id === index).value
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

  render() {
    return (
      <ScrollView style={[styles.container, commons.paddingPage]}>
        {this.props.trackers.filter(t => t.active === true).map((tracker, i) => {
          return (
            <View key={i}>
              <MiddleTitle>{tracker.title}</MiddleTitle>
              <View>{this._renderTrackerValue(i, tracker.goal, tracker.type)}</View>
            </View>
          )
        })}
      </ScrollView>
    )
  }
}

const mapStateToProps = state => {
  return ({ trackers, today, history } = state)
}

export default connect(mapStateToProps)(StatsScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
})
