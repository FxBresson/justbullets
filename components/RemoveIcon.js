import React from 'react'
import { CheckBox, Button, Icon } from 'react-native-elements'

const RemoveIcon = ({ deleteTracker }) => (
  <Icon name="remove-circle-outline" onPress={deleteTracker} color="red" />
)

export default RemoveIcon
