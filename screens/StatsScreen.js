import React from 'react'
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { commons } from '../styles'
import MiddleTitle from '../components/MiddleTitle'
import moment from 'moment'

class StatsScreen extends React.Component {
  static navigationOptions = {
    title: 'Stats',
  }

  render() {
    const { navigate } = this.props.navigation

    let year = this.props.history.year[this.props.history.year.length-1]

    return (
      <ScrollView style={[styles.container, commons.paddingPage]}>
        <Text>{year.value}</Text>
        {moment.monthsShort().map((monthName, i) => {
          return (
            <TouchableOpacity key={i} 
                  onPress={() => navigate('Month', {
                    month: i,
                    history: year.children[i]
                  })}
            >
              <Text>{monthName}</Text>
            </TouchableOpacity>
          )
        })
        }

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
