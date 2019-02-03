import React from 'react'
import { StyleSheet, Text } from 'react-native'

export default class BigTitle extends React.Component {
  render() {
    const { children } = this.props
    return <Text style={styles.bigTitle}>{children}</Text>
  }
}

const styles = StyleSheet.create({
  bigTitle: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 24,
    textAlign: 'center',
  },
})
