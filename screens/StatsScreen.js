import React from 'react';
import { 
  View,
  Text,
  ScrollView, 
  StyleSheet 
} from 'react-native';
import { connect } from 'react-redux'


class StatsScreen extends React.Component {
  static navigationOptions = {
    title: 'Stats',
  };

  _renderTrackerValue(index, goal) {
    let goalText = goal !== null ? `/${goal}` : ''
    return (
      <View>
        <Text>{this.props.today.find((e) => e.id === index).value}{goalText}</Text>
      </View>
    )
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        {this.props.trackers.map((tracker, i) => {
          return (
            <View key={i}>
              <Text>{tracker.title}</Text>
              <View>
                {this._renderTrackerValue(i, tracker.goal)}
              </View>
            </View>
          )
        })}
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => {
  return { trackers, today, history } = state
};

export default connect(mapStateToProps)(StatsScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
