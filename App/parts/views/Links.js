import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button, AsyncStorage, TouchableOpacity, Image, Linking} from 'react-native';
import {Actions} from 'react-native-router-flux'
import Sign_up from './Sign_up'
import Home from './Home'
import Header from '../components/Header'
import Background from '../components/Background'


export default class Links extends Component {

  render (){
    return(
      <View>
        <Background>
        <Header />
        <View style={styles.myView}>
          <Text>Links Page</Text>
          <View style={styles.socialLinks}>
            <View style={styles.columns}>
            <TouchableOpacity>
              <Image style={styles.socialIcon} source={require('../images/TCOrough.png')}/>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image style={styles.socialIcon} source={require('../images/Patreon.png')}/>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image style={styles.socialIcon} source={require('../images/facebook.png')}/>
            </TouchableOpacity>
          </View>
          <View style={styles.columns}>
            <TouchableOpacity>
              <Image style={styles.socialIcon} source={require('../images/instagram.png')}/>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image style={styles.socialIcon} source={require('../images/twitter.png')}/>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image style={styles.socialIcon} source={require('../images/settings.png')}/>
            </TouchableOpacity>
          </View>
          </View>
        </View>
      </Background>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  myView: {
    justifyContent:'center',
    alignItems: 'center',
    padding: 5,
    marginTop: 20,
  },
  socialLinks:{
    margin: 5,
  },
  socialIcon:{
    borderRadius: 5,
    width: 50,
    height: 50,
    margin: 5,
  },
  columns:{
    flexDirection: 'row',
  }
})

module.exports = Links
