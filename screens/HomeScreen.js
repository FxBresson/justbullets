import React from 'react'
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { commons, checkbox } from '../styles'
import InputTracker from '../components/InputTracker'

import {
  selectMood,
  incrementTracker,
  decrementTracker,
  toggleTracker,
  removeTracker,
} from '../action'

import { Button } from 'react-native-elements'
import HomeTrackerTitle from '../components/HomeTrackerTitle'
import HomeMood from '../components/HomeMood'
import HomeTrackerGoal from '../components/HomeTrackerGoal'
import HomeTrackerBool from '../components/HomeTrackerBool'

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Today',
  }

  _deleteTracker = id => {
    this.props.removeTracker(id)
  }

  _renderMoodTracker = (tracker, index) => (
    <View key={index}>
      <HomeTrackerTitle tracker={tracker} deleteTracker={this._deleteTracker} />
      <HomeMood
        value={this.props.today.find(e => e.id === index).value}
        onPress={this.props.selectMood}
        index={index}
      />
    </View>
  )

  _renderGoalTracker = (tracker, index) => (
    <View key={index}>
      <HomeTrackerTitle tracker={tracker} deleteTracker={this._deleteTracker} />
      <HomeTrackerGoal
        tracker={tracker}
        index={index}
        decrementTracker={this.props.decrementTracker}
        incrementTracker={this.props.incrementTracker}
        curr={this.props.today.find(e => e.id === index).value}
      />
    </View>
  )

  handleBoolCheckbox(trackerId) {
    this.props.toggleTracker(trackerId)
  }

  _renderBoolTracker(tracker, index) {
    let value = this.props.today.find(e => e.id === index).value

    return (
      <View key={index}>
        <HomeTrackerTitle
          tracker={tracker}
          deleteTracker={this._deleteTracker}
        />
        <HomeTrackerBool
          value={this.props.today.find(e => e.id === index).value}
          onPress={this.props.toggleTracker}
        />
        <TouchableOpacity
          style={[
            checkbox.default,
            checkbox.toggleWrapper,
            value && checkbox.check,
            value && checkbox.toggleWrapperCheck,
          ]}
          onPress={() => {
            this.handleBoolCheckbox(index)
          }}
        >
          <View
            style={[
              checkbox.default,
              checkbox.toggle,
              value && checkbox.toggleCheck,
            ]}
          />
        </TouchableOpacity>
      </View>
    )
  }

  _renderInputTracker(tracker, index) {
    let value = this.props.today.find(e => e.id === index).value
    return (
      <InputTracker
        tracker={tracker}
        key={index}
        value={value}
        deleteTracker={this._deleteTracker}
      />
    )
  }

  render() {
    const { navigate } = this.props.navigation

    return (
      <View style={[styles.container]}>
        <ScrollView
          style={[styles.container]}
          contentContainerStyle={[styles.contentContainer, commons.paddingPage]}
        >
          {this.props.trackers
            .filter(t => t.active === true)
            .map((tracker, i) => {
              switch (tracker.type) {
                case 'mood':
                  return this._renderMoodTracker(tracker, i)
                case 'bool':
                  return this._renderBoolTracker(tracker, i)
                case 'normal':
                  if (tracker.goal !== null) {
                    return this._renderGoalTracker(tracker, i)
                  } else {
                    return this._renderInputTracker(tracker, i)
                  }
                default:
                  return null
              }
            })}
        </ScrollView>
        <Button title="AddTracker" onPress={() => navigate('Add')} />
      </View>
    )
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      selectMood,
      incrementTracker,
      decrementTracker,
      toggleTracker,
      removeTracker,
    },
    dispatch,
  )

const mapStateToProps = state => {
  return ({ trackers, today, history } = state)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
})
