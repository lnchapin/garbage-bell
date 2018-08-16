import React, {Component} from 'react';
import {AppRegistry, Platform, StyleSheet, Text, View, Dimensions, ImageBackground} from 'react-native';
const { height, width } = Dimensions.get("window");

export default class Background extends Component {
  render() {
    return (
      <ImageBackground
        source={require('../images/gradient.png')}
          style={styles.Background}
      >

      <View style={styles.ViewContainer}>
      {this.props.children}
      </View>
      </ImageBackground>
    );
  }
}

const styles=StyleSheet.create({
  ViewContainer:{
    flex:1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  Background:{
    width: width,
    height: height
  }
})

module.exports = Background
