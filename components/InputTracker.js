import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import MiddleTitle from './MiddleTitle'
import { Button } from 'react-native-elements'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { incrementTracker, decrementTracker } from '../action'
import { commons, button } from '../styles'

class InputTracker extends React.Component {
  render() {
    const { tracker, value } = this.props
    return (
      <View>
        <MiddleTitle>{tracker.title}</MiddleTitle>
        <View style={styles.form}>
          <Button
            title="-"
            buttonStyle={[commons.button, button.round]}
            onPress={() => {
              this.props.decrementTracker(tracker.id)
            }}
          />
          <View style={styles.inputWrapper}>
            <Text style={styles.input}>{value}</Text>
          </View>
          <Button
            buttonStyle={[commons.button, button.round]}
            title="+"
            onPress={() => {
              this.props.incrementTracker(tracker.id)
            }}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inputWrapper: {
    flex: 1,
    paddingLeft: 8,
    paddingRight: 8,
  },
  input: {
    textAlign: 'center',
    fontWeight: '700',
  },
})

const mapStateToProps = state => {
  return ({ trackers, today, history } = state)
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      incrementTracker,
      decrementTracker,
    },
    dispatch,
  )
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(InputTracker)
