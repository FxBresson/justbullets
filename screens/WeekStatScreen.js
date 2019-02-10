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
import { commons } from '../styles'
import moment from 'moment'

class WeekStatScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Week n°${navigation.state.params.weekNumber}`,
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
    const weekHistory = navigation.getParam('history')
    const dayTrackers = this.props.trackers.filter(e => e.period === 'day')

    let daysName = moment.weekdaysMin()
    daysName.push(daysName.shift())

    return (
      <ScrollView style={[styles.container, commons.paddingPage]}>
        <View>
          <BigTitle>Week's Trackers</BigTitle>
          {weekHistory.trackers.map((tracker, i) => {
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
        {/* {daysName.map((dayName, i) => { */}
        {/* {weekHistory.children.map((day, i) => { */}

        {/* DAYS TRACKER */}
        <View style={{ marginTop: 50 }}>
          <BigTitle>Day's Trackers</BigTitle>
          <View>
            {/* DAYS */}
            <View style={styles.row}>
              {daysName.map((dayName, i) => (
                <Text key={i} style={[styles.column, styles.day]}>
                  {dayName.toUpperCase()}
                </Text>
              ))}
            </View>
            {dayTrackers.map((tracker, idTracker) => {
              return (
                <View key={idTracker}>
                  {/* TRACKER NAME */}
                  <MiddleTitle>{tracker.title}</MiddleTitle>

                  {/* TRACKER VALUE BY DAY */}
                  <View style={styles.row}>
                    {daysName.map((dayName, idDay) => {
                      if (
                        weekHistory.children[idDay] !== undefined &&
                        weekHistory.children[idDay].trackers !== undefined
                      ) {
                        return (
                          <View key={idDay} style={styles.column}>
                            {weekHistory.children[idDay].trackers
                              .filter(t => {
                                return t.id === idTracker
                              })
                              .map((tracker, idTracker) => {
                                let trackerInfos = dayTrackers.find(
                                  e => e.id === tracker.id,
                                )
                                return (
                                  <TrackerValue
                                    value={tracker.value}
                                    goal={trackerInfos.goal}
                                    type={trackerInfos.type}
                                    key={idTracker}
                                    week
                                  />
                                )
                              })}
                          </View>
                        )
                      } else return <View key={idDay} style={styles.column} />
                    })}
                  </View>
                </View>
              )
            })}
          </View>
        </View>
      </ScrollView>
    )
  }
}

const mapStateToProps = state => {
  return ({ trackers } = state)
}

export default connect(mapStateToProps)(WeekStatScreen)

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
  day: {
    color: '#AAAAAA',
    textAlign: 'center',
  },
})
