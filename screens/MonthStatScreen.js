import React from 'react'
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import MiddleTitle from '../components/MiddleTitle'
import TrackerValue from '../components/TrackerValue'
import { connect } from 'react-redux'
import { commons } from '../styles'
import moment from 'moment'

class MonthStatScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${moment.months()[navigation.state.params.monthNumber]}`,
  });

  _renderTrackerValue(index, value, goal, type) {
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

  render() {

    const { navigation } = this.props;
    const monthHistory = navigation.getParam('history')

    return (
      <ScrollView style={[styles.container, commons.paddingPage]}>
        <View>
          <Text>Trackers</Text>
          {monthHistory.trackers.map((tracker, i) => {
            let trackerInfos = this.props.trackers.find(e => e.id === tracker.id)
            return (
              <View key={i}>
                <MiddleTitle>{trackerInfos.title}</MiddleTitle>
                <TrackerValue value={tracker.value} goal={trackerInfos.goal} type={trackerInfos.type} />
              </View>
            )
          })}
        </View>
        <View>
          {monthHistory.children.map((week, i) => {
            return (
              <TouchableOpacity key={i} 
                onPress={() => navigation.navigate('Week', {
                  weekNumber: week.value,
                  history: week
                })}
              >
                <Text>Week n°{week.value}</Text>
              </TouchableOpacity>
            )
          })}
        </View>
      </ScrollView>
    )
  }
}

const mapStateToProps = state => {
  return ({ trackers } = state)
}

export default connect(mapStateToProps)(MonthStatScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
})
