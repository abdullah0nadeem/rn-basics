import React from "react";
import { Text } from "react-native";

const getFullName = (firstName: string, lastName: string) => {
  return `${firstName} ${lastName}`;
};

const Cat = () => {
  const name = "Meow";
  return <Text>Hello, I'm your {getFullName("Meow", "Meow")}!</Text>;
};

export default Cat;
