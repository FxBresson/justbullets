import React from 'react'
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { WebBrowser } from 'expo'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { commons, button, checkbox } from '../styles'
import MiddleTitle from '../components/MiddleTitle'
import InputTracker from '../components/InputTracker'

import {
  selectMood,
  incrementTracker,
  decrementTracker,
  toggleTracker,
} from '../action'

import { CheckBox, Button } from 'react-native-elements'

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Today',
  }

  _renderMoodTracker(tracker, index) {
    let value = this.props.today.find(e => e.id === index).value
    return (
      <View key={index}>
        <MiddleTitle>{tracker.title}</MiddleTitle>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          <Button
            buttonStyle={[commons.button, value === 'happy' && button.check]}
            onPress={() => this.props.selectMood(index, 'happy')}
            title="Happy"
          />
          <Button
            buttonStyle={[commons.button, value === 'sad' && button.check]}
            onPress={() => this.props.selectMood(index, 'sad')}
            title="Sad"
          />
          <Button
            buttonStyle={[commons.button, value === 'neutral' && button.check]}
            onPress={() => this.props.selectMood(index, 'neutral')}
            title="Neutral"
          />
          <Button
            buttonStyle={[commons.button, value === 'angry' && button.check]}
            onPress={() => this.props.selectMood(index, 'angry')}
            title="Angry"
          />
          <Button
            buttonStyle={[
              commons.button,
              value === 'frustrated' && button.check,
            ]}
            onPress={() => this.props.selectMood(index, 'frustrated')}
            title="Frustrated"
          />
          <Button
            buttonStyle={[commons.button, value === 'confused' && button.check]}
            onPress={() => this.props.selectMood(index, 'confused')}
            title="Confused"
          />
        </View>
      </View>
    )
  }

  handleGoalCheckbox(isChecked, trackerId) {
    if (isChecked) {
      this.props.decrementTracker(trackerId)
    } else {
      this.props.incrementTracker(trackerId)
    }
  }

  handleBoolCheckbox(trackerId) {
    this.props.toggleTracker(trackerId)
  }

  _renderGoalTracker(tracker, index) {
    let curr = this.props.today.find(e => e.id === index).value
    let checkboxes = []
    for (let i = 1; i <= tracker.goal; i++) {
      let checked = i <= curr
      let canPress = i <= curr + 1
      checkboxes.push(
        <TouchableOpacity
          style={[checkbox.default, checked && checkbox.check]}
          key={i}
          onPress={() => {
            if (canPress) {
              this.handleGoalCheckbox(checked, index)
            }
          }}
        >
          <Text style={[checkbox.text, checked && checkbox.textCheck]}>
            {i}
          </Text>
        </TouchableOpacity>,
      )
    }

    return (
      <View key={index}>
        <MiddleTitle>{tracker.title}</MiddleTitle>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {checkboxes}
        </View>
      </View>
    )
  }

  _renderBoolTracker(tracker, index) {
    let value = this.props.today.find(e => e.id === index).value

    return (
      <View key={index}>
        <MiddleTitle>{tracker.title}</MiddleTitle>
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
    return <InputTracker tracker={tracker} key={index} value={value} />
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
