import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button
} from 'react-native';
import { WebBrowser } from 'expo';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import { selectMood } from '../action'

import { MonoText } from '../components/StyledText';

class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  _renderMoodTracker(tracker, index) {
    return (
      <View key={index}>
        <Text>{tracker.title}</Text>
        <View>
          <Button onPress={() => this.props.selectMood(index, "happy")} 
                  title="Happy">
          </Button>
          <Button onPress={() => this.props.selectMood(index, "sad")} 
                  title="Sad">
          </Button>
          <Button onPress={() => this.props.selectMood(index, "neutral")} 
                  title="Neutral">
          </Button>
          <Button onPress={() => this.props.selectMood(index, "angry")} 
                  title="Angry">
          </Button>
          <Button onPress={() => this.props.selectMood(index, "confused")} 
                  title="Confused/Frustrated">
          </Button>
        </View>
      </View>
    )
  }

  _renderGoalTracker(tracker, index) {
    return (
      <View key={index}>
        <Text>{tracker.title}</Text>
      </View>
    )
  }

  _renderInputTracker(tracker, index) {
    return (
      <View key={index}>
        <Text>{tracker.title}</Text>
      </View>
    )
  }

  _renderBoolTracker(tracker, index) {
    return (
      <View key={index}>
        <Text>{tracker.title}</Text>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

          {this.props.trackers.map((tracker, i) => {
            
            if (tracker.type === "mood") {
              return this._renderMoodTracker(tracker, i)
            } else {
              if (tracker.goal !== null) {
                return this._renderGoalTracker(tracker, i)
              } else {
                return this._renderInputTracker(tracker, i)
              }
            }
            
          })}

        </ScrollView>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    selectMood,
  }, dispatch)
);

const mapStateToProps = (state) => {
  return { trackers, today, history } = state
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  }
});
