import React from "react";
import { Text, TextInput, View } from "react-native";

type CatProps = {
  name: string;
};

const Cat = (props: CatProps) => {
  return <Text>Hello, I'm your {props.name}!</Text>;
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
      <Cat name="Meow" />
      <Cat name="Jerry" />
      <Cat name="Tom" />
    </View>
  );
};

export default Cafe;
