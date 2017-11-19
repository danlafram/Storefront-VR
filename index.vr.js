import React from 'react';
import {
  AppRegistry,
  asset,
  StyleSheet,
  Pano,
  Text,
  View,
  Model,
  AmbientLight,
} from 'react-vr';

import Welcome from './components/Onboard/Welcome';
import Vans from './components/Items/Vans';
import ItemContainer from './components/ItemDisplay/ItemTitle';

export default class StorefrontVR extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('chess-world.jpg')}/>
        <AmbientLight intensity={ 2.6 }  />
        {/* <Model
          style={{ transform: [ {translate: [0, 0, -3]}, {scale: 0.05 }, {rotateY: -130}, {rotateX: 20}, {rotateZ: -10} ], }}
          source={{
            obj: asset('under armour shoe1.obj'),
            //mtl: asset('vans.mtl'),
          }}
          lit={true}
        /> */}
        <ItemContainer style={styles.itemContainer} />
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
