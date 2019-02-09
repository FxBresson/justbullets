import React from 'react'
import { StyleSheet, Text } from 'react-native'

export default class MiddleTitle extends React.Component {
  render() {
    const { children, align = 'left' } = this.props
    return (
      <Text style={[styles.middleTitle, { textAlign: align }]}>{children}</Text>
    )
  }
}

const styles = StyleSheet.create({
  middleTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginTop: 16,
    textAlign: 'left',
    flex: 1,
  },
})
