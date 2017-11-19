import React from 'react';
import {
  AppRegistry,
  asset,
  StyleSheet,
  View
} from 'react-vr';
import ItemTitle from './ItemDisplay/ItemTitle';
import ItemImage from './ItemDisplay/ItemImage';
import ItemPrice from './ItemDisplay/ItemPrice';
import ItemDescription from './ItemDisplay/ItemDescription';


export default class ItemContainer extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ItemTitle />
        <ItemImage />
        <ItemPrice />
        <ItemDescription />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    width: 2,
    transform: [{trabslate: [0, 0, -5]}],
  },
});

AppRegistry.registerComponent('ItemContainer', () => ItemContainer);
