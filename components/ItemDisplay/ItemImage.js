import React from 'react';
import {
  AppRegistry,
  asset,
  StyleSheet,
  Image
} from 'react-vr';

export default class ItemImage extends React.Component {
  render() {
    return (
      <Image
        source={{uri: 'some.jpg'}} //Set this to a prop later
      />
    );
  }
};

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('ItemImage', () => ItemImage);
