import React, { Component } from "react";
import { View, Text, StyleSheet, Animated, Easing } from "react-native";

//pie chart
import Pie from "react-native-pie";

export default class TestAnimation extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Pie
          radius={50}
          innerRadius={40}
          series={[60]}
          colors={["#f00"]}
          backgroundColor="#ddd"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
