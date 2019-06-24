import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Button,
  Easing,
  Dimensions
} from "react-native";

//dimensions -------------
const { width, height } = Dimensions.get("window");

export default class MoveAnimation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      xValue: new Animated.Value(0)
    };
  }

  _moveAnimation = () => {
    // alert("move animation!");
    Animated.timing(this.state.xValue, {
      toValue: 200,
      duration: 1000,
      easing: Easing.linear,
      //   easing: Easing.back()
      //   easing: Easing.circle
      easing: Easing.cubic
    }).start(() =>
      Animated.timing(this.state.xValue, {
        toValue: 0,
        duration: 1000,
        easing: Easing.linear
      }).start(() => {
        this._moveAnimation();
      })
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>Moving Animation</Text>
        <Animated.View
          style={[styles.AnimatedView, { left: this.state.xValue }]}
        />
        <Button title="Press to Move" onPress={this._moveAnimation} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: "center"
  },
  AnimatedView: {
    width: 100,
    height: 100,
    backgroundColor: "#f00",
    margin: 20
  }
});
