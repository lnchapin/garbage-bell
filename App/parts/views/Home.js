import React, {Component} from 'react'
import {AppRegistry, Platform, StyleSheet, Text, View, TextInput, Button, AsyncStorage, Image, TouchableOpacity, ScrollView, ImageBackground, Dimensions } from 'react-native'
import {Actions} from 'react-native-router-flux'
import Header from '../components/Header'
import Background from '../components/Background'

const { width, height } = Dimensions.get("window")

export default class Home extends Component {

  render (){
    return(
      <View>
        <Background>
        <Header />
        <View style={styles.myView}>
          <Text style={styles.textStyle}>Hello</Text>
          <TouchableOpacity>
            <Image style={styles.bell} source={require('../images/reception-bell.jpg')} resizeMode="contain"/>
          </TouchableOpacity>
          <Text style={styles.textStyle}>Rings Today: </Text>
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
    marginTop: 20,
  },
  bell:{
    width: 75
  },
  textStyle:{

  }
})

module.exports = Home
