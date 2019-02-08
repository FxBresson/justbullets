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

import { 
  selectMood,
  incrementTracker,
  decrementTracker
} from '../action'

import { MonoText } from '../components/StyledText';

import { CheckBox } from 'react-native-elements'



class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  _renderMoodTracker(tracker, index) {
    return (
      <View key={index}>
        <Text>{tracker.title}</Text>
        <View style={{flexDirection:'row'}}>
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

  handleCheckbox(isChecked, trackerId) {
    if (isChecked) {
      this.props.decrementTracker(trackerId)
    } else {
      this.props.incrementTracker(trackerId)
    }
  }

  _renderGoalTracker(tracker, index) {
    let curr = this.props.today.find((e) => e.id === index).value
    let checkboxes = []
    for (let i = 1; i <= tracker.goal; i++) {
        let checked = i <= curr
        let canPress = i <= curr + 1
        checkboxes.push(
          <CheckBox
            key={i}
            checked={checked}
            onPress={() => {if(canPress) this.handleCheckbox(checked, index)}}

          />
        )
    }

    return (
      <View key={index}>
        <Text>{tracker.title}</Text>
        <View style={{flexDirection:'row'}}>
          {checkboxes}
        </View>
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
    const {navigate} = this.props.navigation;

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
        <Button
          title="AddTracker"
          onPress={() => navigate('Add')}
        />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    selectMood,
    incrementTracker,
    decrementTracker
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
