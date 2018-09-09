import React, {Component} from 'react'
import {AppRegistry, Platform, StyleSheet, Text, View, TextInput, Button, AsyncStorage, Image, TouchableOpacity, ScrollView, ImageBackground, Dimensions, TouchableWithoutFeedback } from 'react-native'
import {Actions} from 'react-native-router-flux'
import Header from '../components/Header'
import Background from '../components/Background'
// import Sound from 'react-native-sound'

const { width, height } = Dimensions.get("window")


export default class Home extends Component {

  onPressPlay(){
    alert('play')
  }

  render (){
    return(
      <View>
        <Background>
        <Header />
        <View style={styles.myView}>
          <Text style={styles.textStyle1}>Hello</Text>
          <TouchableWithoutFeedback onPress={this.onPressPlay.bind(this)}>
            <View>
            <Image style={styles.bell} source={require('../images/reception-bell.jpg')} resizeMode="contain"/>
            </View>
          </TouchableWithoutFeedback>

          <Text style={styles.textStyle2}>Rings Today: </Text>
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
    marginTop: 30,
    marginBottom: 250,
    flex: 1,
  },
  bell:{
    width: 75,
    height: 75,
    flex:2
  },
  textStyle1:{
    color:'white',
  },
  textStyle2:{
    color:'white',
  }
})

module.exports = Home
