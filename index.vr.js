import React from 'react';
import {
  AppRegistry,
  asset,
  StyleSheet,
  Pano,
  Text,
  View,
  Model,
  Animated,
  Scene
} from 'react-vr';

import { Easing } from 'react-native';

export default class StorefrontVR extends React.Component {

  constructor() {
    super();
    this.state = { spin: new Animated.Value(0) };
  }

  componentDidMount() {
    this.spinAnimation();
  }

  spinAnimation() {
    this.state.spin.setValue(0);
    Animated.timing(
      this.state.spin,
      {
       toValue: 1,
       duration: 3000,
       easing: Easing.linear
      }
    ).start( () => this.spinAnimation() );
  }

  render() {
    const spin = this.state.spin.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    });
    const AnimatedModel = Animated.createAnimatedComponent(Model);
    return (
      <View 
        style={{
          transform: [
            {rotateY: -180}
          ]
        }}>
        <Pano source={asset('chess-world.jpg')} />
        <AnimatedModel
        wireframe={false}
          source={{
          obj: asset('vans.obj'),
          mtl: asset('vans.mtl')
          }}
          style={{
            transform: [
              {translate: [28, -15, 150]},
              { scale : 0.15 }
              ]
          }}
        />
        <AnimatedModel
        wireframe={false}
          source={{
          obj: asset('vans-v2.obj'),
          mtl: asset('vans-v2.mtl')
          }}
          style={{
            transform: [
              {translate: [-24, -15, 150]},
              { scale : 0.15 }
              ]
          }}
        />
        <AnimatedModel
          source={{
          obj: asset('vans.obj'),
          mtl: asset('vans.mtl')
          }}
          style={{
            transform: [
              {translate: [-30, -20, 5]},
              {rotateY: spin},
              {scale : 0.15}
              ]
          }}
          wireframe={false}
        />
      </View>
    );
  }
};

AppRegistry.registerComponent('StorefrontVR', () => StorefrontVR);
