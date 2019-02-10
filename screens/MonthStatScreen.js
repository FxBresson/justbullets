import React from 'react'
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import MiddleTitle from '../components/MiddleTitle'
import BigTitle from '../components/BigTitle'
import TrackerValue from '../components/TrackerValue'
import { connect } from 'react-redux'
import { commons, button } from '../styles'
import moment from 'moment'
import { Button } from 'react-native-elements'

class MonthStatScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${moment.months()[navigation.state.params.monthNumber]}`,
  })

  _renderTrackerValue(index, value, goal, type) {
    let goalText = goal !== null && goal !== undefined ? `/${goal}` : ''
    let valueText = type === 'bool' ? (value ? 'Done' : 'Not Done') : value
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
    const { navigation } = this.props
    const monthHistory = navigation.getParam('history')

    return (
      <ScrollView style={[styles.container, commons.paddingPage]}>
        <View>
          <BigTitle>Month's Trackers</BigTitle>
          {monthHistory.trackers.map((tracker, i) => {
            let trackerInfos = this.props.trackers.find(
              e => e.id === tracker.id,
            )
            return (
              <View
                key={i}
                style={{ flexDirection: 'row', alignItems: 'flex-end' }}
              >
                <MiddleTitle>{trackerInfos.title}</MiddleTitle>
                <TrackerValue
                  value={tracker.value}
                  goal={trackerInfos.goal}
                  type={trackerInfos.type}
                />
              </View>
            )
          })}
        </View>
        <View style={{ marginTop: 50 }}>
          <BigTitle align="center">Weeks</BigTitle>
          {monthHistory.children.map((week, i) => {
            return (
              <View style={button.wrapper} key={i}>
                <Button
                  buttonStyle={[commons.button]}
                  title={`Week n°${week.value}`}
                  onPress={() =>
                    navigation.navigate('Week', {
                      weekNumber: week.value,
                      history: week,
                    })
                  }
                />
              </View>
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
