import React from 'react';
import {
  AppRegistry,
  asset,
  StyleSheet,
  Pano,
  Text,
  View,
  Model,
  Animated
} from 'react-vr';

import { Easing } from 'react-native';

export default class StorefrontVR extends React.Component {

  constructor() {
    super();
    this.state = { spin: new Animated.Value(0) };
  }

  componentDidMount() {
    Animated.timing(
      this.state.spin,
      {
        toValue: 1,
        duration: 3000,
        easing: Easing.ease
      }
    ).start();
  }

  render() {
    const spin = this.state.spin.interpolate({
      inputRange: [0, 360],
      outputRange: ['0deg', '360deg']
    })
    const AnimatedModel = Animated.createAnimatedComponent(Model);
    return (
      <View>
        <Pano source={asset('chess-world.jpg')} />
        <AnimatedModel
        wireframe={false}
          source={{
          obj: asset('vans.obj'),
          mtl: asset('vans.mtl')
          }}
          style={{
            transform: [
              {translate: [0, -20, -30]},
              { scale : 0.15 }
              ]
          }}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection: 'column',
    width: 2,
    transform: [{translate: [-1, 1, -5]}],
  },
});

AppRegistry.registerComponent('StorefrontVR', () => StorefrontVR);
