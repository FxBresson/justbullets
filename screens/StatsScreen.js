import React from 'react'
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import { connect } from 'react-redux'
import { commons, button } from '../styles'
import MiddleTitle from '../components/MiddleTitle'
import moment from 'moment'
import { Button } from 'react-native-elements'

class StatsScreen extends React.Component {
  static navigationOptions = {
    title: 'Stats',
  }

  render() {
    const { navigate } = this.props.navigation

    let year = this.props.history.year[this.props.history.year.length - 1]

    return (
      <ScrollView style={[styles.container, commons.paddingPage]}>
        <MiddleTitle align="center">{year.value}</MiddleTitle>
        <View style={styles.monthWrapper}>
          {moment.monthsShort().map((monthName, i) => {
            if (year.children[i] !== undefined) {
              return (
                <View style={button.wrapper} key={i}>
                  <Button
                    buttonStyle={[commons.button]}
                    title={monthName}
                    onPress={() =>
                      navigate('Month', {
                        monthNumber: i,
                        history: year.children[i],
                      })
                    }
                  />
                </View>
              )
            } else {
              return (
                <View style={button.wrapper} key={i}>
                  <Button
                    buttonStyle={[commons.button, button.disabled]}
                    title={monthName}
                  />
                </View>
              )
            }
          })}
        </View>
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
  month: {
    width: '33%',
  },
  monthWrapper: { flexDirection: 'row', flexWrap: 'wrap', marginTop: 24 },
})
