import React from 'react';
import {
  AppRegistry,
  asset,
  StyleSheet,
  Text
} from 'react-vr';

export default class ItemDescription extends React.Component {
  render() {
    return (
      <Text>
        This is a short description of an item for the picture above. It's a new Underarmour shoe. Click on it to view it in 3D.
      </Text>
    );
  }
};

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('ItemDescription', () => ItemDescription);
