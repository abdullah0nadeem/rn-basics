import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

type CatProps = {
  name: string;
};

const Cat = (props: CatProps) => {
  const [isHungary, setIsHungary] = useState(true);

  return (
    <>
      <Text>
        Hello, I'm your {props.name}!, and I am {isHungary ? "Hungary" : "Full"}
      </Text>
      <Button
        onPress={() => setIsHungary(false)}
        title={isHungary ? "Please give me some food" : "Thank you!"}
        disabled={!isHungary}
        color={isHungary ? "indigo" : "gray"}
      />
    </>
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
