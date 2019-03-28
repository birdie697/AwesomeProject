import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';
import styles from './styleSheets';


  export default class LotsOfStyles extends Component {
    render() {
      return (
        <View>
          <Text />
          <Text />
          <Text style={styles.red}>just red</Text>
          <Text style={styles.bigBlue}>just bigBlue</Text>
          <Text style={[styles.bigBlue, styles.red]}>bigBlue, then red</Text>
          <Text style={[styles.red, styles.bigBlue]}>red, then bigBlue</Text>
          <Text style={styles.green}>just green</Text>
          <Text style={[styles.bigBlue, styles.green]}>bigBlue, then green</Text>
        </View>
      );
    }
  }

  AppRegistry.registerComponent('AwesomeProject', () => LotsOfStyles);
