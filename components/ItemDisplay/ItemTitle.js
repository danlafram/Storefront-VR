import React from 'react';
import {
  AppRegistry,
  asset,
  StyleSheet,
  Text
} from 'react-vr';

export default class ItemTitle extends React.Component {
  render() {
    //The title should be set as a prop in the future
    return (
      <Text>
        Underarmour Shoe V1
      </Text>
    );
  }
};

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('ItemTitle', () => ItemTitle);
