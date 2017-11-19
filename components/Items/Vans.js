import React from 'react';
import {
  AppRegistry,
  asset,
  StyleSheet,
  Model,
} from 'react-vr';

export default class Vans extends React.Component {
  render() {
    return (
      <Model
        source={{
          obj: asset('vans.obj'),
          mtl: asset('vans.mtl'),
        }}
        lit={true}
      />
    );
  }
};

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('Vans', () => Vans);
