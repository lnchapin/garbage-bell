Error.stackTraceLimit = 40
import React, {Component} from 'react';
import {AppRegistry, Platform, StyleSheet, Text, View, TextInput, Button} from 'react-native';
import { Actions, Router, Scene, Tabs } from 'react-native-router-flux';
import Sign_in from './parts/views/Sign_in';
import Sign_up from './parts/views/Sign_up';
import Stats from './parts/views/Stats';
import Home from './parts/views/Home';
import Links from './parts/views/Links';
import Settings from './parts/views/Settings';


export default class App extends React.Component {
  render() {
    return (
      <Router>

        <Scene  key="root">
           {/* <Scene key="Sign_in" hideNavBar={true} component={Sign_in} initial={true} />
           <Scene key="Sign_up" hideNavBar={true} component={Sign_up} initial={false} /> */}

          <Scene key="inApp" tabs={true} hideNavBar={true}>
            <Scene key="Stats" hideNavBar={true} component={Stats} initial={false} />
            <Scene key="Home" hideNavBar={true} component={Home} initial={true} />
            <Scene key="Links" hideNavBar={true} component={Links} initial={false} />
          </Scene>
          {/* <Scene key="Settings" hideNavBar={true} component={Settings} initial={false} /> */}
          </Scene>
      </Router>
    );
  }
}
