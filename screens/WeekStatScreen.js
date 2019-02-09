import React from 'react'
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import MiddleTitle from '../components/MiddleTitle'
import TrackerValue from '../components/TrackerValue'
import { connect } from 'react-redux'
import { commons } from '../styles'
import moment from 'moment'

class WeekStatScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Week n°${navigation.state.params.weekNumber}`,
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
    const weekHistory = navigation.getParam('history')
    const dayTrackers = this.props.trackers.filter(e => e.period === 'day')

    let daysName = moment.weekdaysMin();
    daysName.push(daysName.shift())

    return (
      <ScrollView style={[styles.container, commons.paddingPage]}>
        <View>
          <Text>Trackers</Text>
          {weekHistory.trackers.map((tracker, i) => {
            let trackerInfos = this.props.trackers.find(e => e.id === tracker.id)
            return (
              <View key={i}>
                <MiddleTitle>{trackerInfos.title}</MiddleTitle>
                <TrackerValue value={tracker.value} goal={trackerInfos.goal} type={trackerInfos.type} />
              </View>
            )
          })}
        </View>
          {/* {daysName.map((dayName, i) => { */}
          {/* {weekHistory.children.map((day, i) => { */}
        <MiddleTitle><Text>Trackers</Text></MiddleTitle>
        <ScrollView horizontal={true} style>
          <View>
            <View><Text> </Text></View>
            {dayTrackers.map((tracker, i)=>{
              return (
                <View key={i}>
                  <Text>{tracker.title}</Text>
                </View>
              )
            })}
          </View>
          {daysName.map((dayName, i) => {
            return (
              <View key={i}>
                <View><Text>{dayName}</Text></View>
                {weekHistory.children[i] !== undefined && weekHistory.children[i].trackers !== undefined ?
                  weekHistory.children[i].trackers.map((tracker, j) => {
                    let trackerInfos = dayTrackers.find(e => e.id === tracker.id)
                    return (
                      <View key={j}>
                        <TrackerValue value={tracker.value} goal={trackerInfos.goal} type={trackerInfos.type} />
                      </View>
                    )
                  })
                :
                  <View></View>
                }
              </View>
            )
          })}
          
        </ScrollView>
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
})
