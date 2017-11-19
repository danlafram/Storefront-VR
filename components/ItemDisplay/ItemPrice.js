import React from 'react';
import {
  AppRegistry,
  asset,
  StyleSheet,
  Text
} from 'react-vr';

export default class ItemPrice extends React.Component {
  render() {
    //The price should be set as a prop in the future
    return (
      <Text>
        $49.99
      </Text>
    );
  }
};

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('ItemPrice', () => ItemPrice);
