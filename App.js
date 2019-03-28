import React, {Component} from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import {CloudMess,ListenMess} from './src/components'
import {RootStack} from './src/configs'
export default class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="black" animated={true}/>
        <RootStack/>
        <CloudMess/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color :'black'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
