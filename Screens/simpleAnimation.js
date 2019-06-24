import React, { Component } from "react";
import { View, Text, StyleSheet, Animated, Button } from "react-native";
import { tsExportAssignment } from "@babel/types";

export default class SimpleAnimation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeValue: new Animated.Value(0)
    };
  }

  _fadeAnimation = () => {
    // alert("Press Fade!");
    Animated.timing(this.state.fadeValue, {
      toValue: 1,
      duration: 1000
    }).start();
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>SimpleAnimation</Text>
        <Animated.View
          style={[styles.AnimatedView, { opacity: this.state.fadeValue }]}
        />
        <Button title="Press to Fade" onPress={this._fadeAnimation} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  AnimatedView: {
    width: 100,
    height: 100,
    backgroundColor: "#f00",
    margin: 20
  }
});
