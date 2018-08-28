import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button, AsyncStorage} from 'react-native';
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
            <TouchableOpacity>
              <Image style={styles.socialIcon} source={require('../images/tco.jpg')}/>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image style={styles.socialIcon} source={require('../images/tco.jpg')}/>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image style={styles.socialIcon} source={require('../images/tco.jpg')}/>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image style={styles.socialIcon} source={require('../images/tco.jpg')}/>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image style={styles.socialIcon} source={require('../images/tco.jpg')}/>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image style={styles.socialIcon} source={require('../images/tco.jpg')}/>
            </TouchableOpacity>
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
    margin: 5,
  }
})

module.exports = Links
