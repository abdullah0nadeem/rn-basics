import React from "react";
import { Image, ScrollView, useWindowDimensions } from "react-native";

const logo = {
  uri: "https://reactnative.dev/img/tiny_logo.png",
  width: 64,
  height: 64,
};

const RNBScrollView = () => {
  const { width } = useWindowDimensions();
  return (
    <ScrollView style={{ width: width }}>
      <Image source={logo} style={{ margin: 8 }} />
      <Image source={logo} style={{ margin: 8 }} />
      <Image source={logo} style={{ margin: 8 }} />
      <Image source={logo} style={{ margin: 8 }} />
    </ScrollView>
  );
};

export default RNBScrollView;
