import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { createAppContainer, createStackNavigator } from "react-navigation";

//screens
import SimpleAnimation from "./Screens/simpleAnimation";
import MoveAnimation from "./Screens/moveAnimation";
import SpringAnimation from "./Screens/springAnimation";
import TestAnimations from "./Screens/TestAnimation";

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
            onPress={() => this.props.navigation.navigate("SimpleAnimation")} //-----------------------------Simple animation Button
          />
        </View>
        <View style={styles.Buttons}>
          <Button
            color="#0e0"
            title="Moving Animation"
            onPress={() => this.props.navigation.navigate("MoveAnimation")} //-----------------------------Moving animation Button
          />
        </View>
        <View style={styles.Buttons}>
          <Button
            color="#FF2323"
            title="Spring Animation"
            onPress={() => this.props.navigation.navigate("SpringAnimation")} //-----------------------------Spring Animation animation Button
          />
        </View>
        <View style={styles.Buttons}>
          <Button
            color="#fbbc05"
            title="Test Animation"
            onPress={() => this.props.navigation.navigate("TestAnimations")} //-----------------------------Test animation Button
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
    MoveAnimation: MoveAnimation,
    SpringAnimation: SpringAnimation,
    TestAnimations: TestAnimations
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
