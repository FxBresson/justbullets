import React from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import MiddleTitle from '../components/MiddleTitle'
import { connect } from 'react-redux'
import { commons } from '../styles'
import moment from 'moment'

class MonthStatScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${moment.months()[navigation.state.params.month]}`,
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
    const history = navigation.getParam('history')

    return (
      <ScrollView style={[styles.container, commons.paddingPage]}>
        <Text>Trackers</Text>
        {history.trackers.map((tracker, i) => {
          let trackerInfos = this.props.trackers.find(e => e.id === tracker.id)
          return (
            <View key={i}>
              <MiddleTitle>{trackerInfos.title}</MiddleTitle>
              <View>{this._renderTrackerValue(i, tracker.value, trackerInfos.goal, trackerInfos.type)}</View>
            </View>
          )
        })}
      
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
