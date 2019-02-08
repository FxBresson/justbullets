export const addTracker = (tracker) => ({
  type: 'ADD_TRACKER',
  newTracker: tracker,
});

export const removeTracker = (trackerId) => ({
  type: 'REMOVE_TRACKER',
  trackerId: trackerId
});

export const incrementTracker = (trackerId) => ({
  type: 'INCREMENT_TRACKER',
  trackerId: trackerId
}) 

export const decrementTracker = (trackerId) => ({
  type: 'DECREMENT_TRACKER',
  trackerId: trackerId
}) 

export const toggleTracker = (trackerId) => ({
  type: 'TOGGLE_TRACKER',
  trackerId: trackerId
})

export const setValueTracker = (trackerId, value) => ({
  type: 'SET_VALUE',
  trackerId: trackerId,
  value: value
})

export const selectMood = (trackerId, mood) => ({
  type: 'SELECT_MOOD',
  trackerId: trackerId,
  mood: mood
})

export const saveDay = (trackerList) => ({
  type: 'SAVE_DAY',
  trackerList: trackerList
})

