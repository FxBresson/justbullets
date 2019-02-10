import React from 'react'
import { View, Text } from 'react-native'
import MiddleTitle from '../components/MiddleTitle'
import RemoveIcon from '../components/RemoveIcon'

const HomeTrackerTitle = ({ tracker, deleteTracker }) => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'flex-end',
          marginBottom: 8,
        }}
      >
        <MiddleTitle>{tracker.title}</MiddleTitle>
        <RemoveIcon
          deleteTracker={() => {
            deleteTracker(tracker.id)
          }}
        />
      </View>
      <Text>{tracker.period}</Text>
    </View>
  )
}

export default HomeTrackerTitle
