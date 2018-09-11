import React, {Component} from 'react'
import {AppRegistry, Platform, StyleSheet, Text, View, TextInput, Button, AsyncStorage, Image, TouchableOpacity, ScrollView, ImageBackground, Dimensions, TouchableWithoutFeedback } from 'react-native'
import {Actions} from 'react-native-router-flux'
import Header from '../components/Header'
import Background from '../components/Background'
import Sound from 'react-native-sound'

const { width, height } = Dimensions.get("window")
const requireAudio = require('./ding.wav')


export default class Home extends Component {

  onPressPlay(){
    const s = new Sound(requireAudio, (e) => {
      if (e) {
        alert('error', e);
        return;
      }
      s.play();
      });
  }

  render (){
    return(
      <View>
        <Background>
        <Header />
        <View style={styles.myView}>
          <Text style={styles.textStyle1}>Hello `Name from DB`</Text>
          <TouchableWithoutFeedback onPress={this.onPressPlay.bind(this)}>
            <View>
            <Image style={styles.bell} source={require('../images/reception-bell.jpg')} resizeMode="contain"/>
            </View>
          </TouchableWithoutFeedback>

          <Text style={styles.textStyle2}>Rings Today: `from DB`</Text>
        </View>

      </Background>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  myView: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent:'center',
    padding: 5,
    marginTop: 50,
    marginBottom: 250,
    flex: 1,
  },
  bell:{
    flex:2
  },
  textStyle1:{
    color:'white',
    paddingBottom: 20,
    paddingTop: 30,
    fontSize: 24,
    fontFamily: 'arial'
  },
  textStyle2:{
    color:'white',
    paddingTop: 20,
    fontSize: 24
  }
})

module.exports = Home
