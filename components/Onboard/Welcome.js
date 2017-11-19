import React from 'react';
import {
  AppRegistry,
  asset,
  StyleSheet,
  Pano,
  Text,
  View,
} from 'react-vr';

export default class Welcome extends React.Component {
  render() {
    return (
      <View>
        <Text
          style={styles.container}>
          Welcome to StorefrontVR.
        </Text>
        <Text
          style={styles.container}>
          Go ahead, take a look around!
        </Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#777879',
    fontSize: 0.3,
    layoutOrigin: [0.5, 0.5],
    paddingLeft: 0.2,
    paddingRight: 0.2,
    textAlign: 'center',
    textAlignVertical: 'center',
    transform: [{translate: [0, 0, -5]}],
  }
});

AppRegistry.registerComponent('Welcome', () => Welcome);
