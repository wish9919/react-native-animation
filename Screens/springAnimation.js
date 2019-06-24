import React, { Component } from "react";
import { View, Text, StyleSheet, Animated, Button } from "react-native";
import { tsExportAssignment } from "@babel/types";

export default class SpringAnimation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      springValue: new Animated.Value(0.3)
    };
  }

  _springAnimation = () => {
    Animated.spring(this.state.springValue, {
      toValue: 1,
      friction: 1
    }).start();
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Spring Animation</Text>
        <Animated.View
          style={[
            styles.AnimatedView,
            {
              transform: [{ scale: this.state.springValue }],
              alignSelf: "center"
            }
          ]}
        />
        <Button title="Press to Fade" onPress={this._springAnimation} />
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
