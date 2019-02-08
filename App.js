import React from 'react'
import { Platform, StatusBar, StyleSheet, View } from 'react-native'
import { AppLoading, Asset, Font, Icon } from 'expo'
import AppNavigator from './navigation/AppNavigator'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers/index'

const defaultState = {
  trackers: [
    {
      id: 4,
      title: "Comment ça va aujourd'hui ?",
      type: 'mood',
      period: 'day',
      goal: null,
    },
    {
      id: 0,
      title: 'Invoquer Satan',
      type: 'normal',
      period: 'week',
      goal: 2,
    },
    {
      id: 1,
      title: 'Nourrir Toothless',
      type: 'normal',
      period: 'day',
      goal: null,
    },
    {
      id: 2,
      title: 'Règles',
      type: 'normal',
      period: 'day',
      goal: 1,
    },
    {
      id: 3,
      title: 'Cinéma',
      type: 'normal',
      period: 'month',
      goal: 4,
    },
  ],
  today: [],
}

defaultState.today = defaultState.trackers.map(tracker => {
  return {
    id: tracker.id,
    value: tracker.type === 'normal' ? 0 : '',
  }
})

const store = createStore(rootReducer, defaultState)

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  }

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      )
    } else {
      return (
        <Provider store={store}>
          <View style={styles.container}>
            {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
            <AppNavigator />
          </View>
        </Provider>
      )
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      }),
    ])
  }

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error)
  }

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
