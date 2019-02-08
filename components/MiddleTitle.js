import React from 'react'
import { StyleSheet, Text } from 'react-native'

export default class MiddleTitle extends React.Component {
  render() {
    const { children } = this.props
    return <Text style={styles.bigTitle}>{children}</Text>
  }
}

const styles = StyleSheet.create({
  bigTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginTop: 16,
    textAlign: 'left',
  },
})
