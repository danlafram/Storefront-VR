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
    this.state = {
      animatedX = new Animated.Value(1.5)
    };
  }

  componentDidMount() {
  }

  render() {
    const AnimatedModel = Animated.createAnimatedComponent(Model);
    return (
      <Scene
        style={{
          transform: [
            {translateX: this.animatedX},
            {translateY: 0},
            {translateZ: 15}
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
              {translate: [0, -20, -30]},
              { scale : 0.15 }
              ]
          }}
        />
      </Scene>
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
