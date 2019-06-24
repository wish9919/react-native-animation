/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button } from "react-native";
import { createAppContainer, createStackNavigator } from "react-navigation";

//screens
import SimpleAnimation from "./Screens/simpleAnimation";
import MoveAnimation from "./Screens/moveAnimation";

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}

class Home extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.Buttons}>
          <Button
            title="Simple Animation"
            onPress={() => this.props.navigation.navigate("SimpleAnimation")} //-----------------------------simple animation Button
          />
        </View>
        <View style={styles.Buttons}>
          <Button
            title="Moving Animation"
            onPress={() => this.props.navigation.navigate("MoveAnimation")} //-----------------------------moving animation Button
          />
        </View>
      </View>
    );
  }
}

const stackNavigator = createStackNavigator(
  {
    Home: Home,
    SimpleAnimation: SimpleAnimation,
    MoveAnimation: MoveAnimation
  }
  // {
  //   initialRouteName: "SimpleAnimation"
  // }
);

const AppContainer = createAppContainer(stackNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  Buttons: {
    margin: 10
  }
});
