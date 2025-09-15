import React from "react";
import { Image, Text, TextInput, View } from "react-native";

type CatProps = {
  name: string;
};

const Cat = (props: CatProps) => {
  return (
    <View>
      {/* <Image
        src="https://reactnative.dev/docs/assets/p_cat1.png"
        style={{
          width: 200,
          height: 200,
        }}
      /> */}

      <Image
        source={{ uri: "https://reactnative.dev/docs/assets/p_cat1.png" }}
        style={{
          width: 200,
          height: 200,
        }}
      />
      <Text>Hello, I'm your {props.name}!</Text>
    </View>
  );
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
