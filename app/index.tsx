import React from "react";
import { Text, TextInput, View } from "react-native";

const getFullName = (firstName: string, lastName: string) => {
  return `${firstName} ${lastName}`;
};

const Cat = () => {
  const name = "Meow";
  return <Text>Hello, I'm your {getFullName("Meow", "Meow")}!</Text>;
};

const CustomCat = () => {
  return (
    <View>
      <Text>Hello, I'm a cat!</Text>
      <TextInput
        style={{
          height: 50,
          borderColor: "gray",
          borderWidth: 1,
        }}
        defaultValue="Name me!"
      />
    </View>
  );
};

const Cafe = () => {
  return (
    <View>
      <Cat />
      <Cat />
      <Cat />
    </View>
  );
};

export default Cafe;
