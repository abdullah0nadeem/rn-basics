import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";

const PizzaTranslater = () => {
  const [text, setText] = useState("");

  return (
    <View>
      <TextInput
        style={{ padding: 8 }}
        placeholder="Type here to translate..."
        onChangeText={(newText) => setText(newText)}
        defaultValue={text}
      />
      <Text style={{ padding: 8, fontSize: 32 }}>
        {text
          .split(" ")
          .map((word) => word && "🍕")
          .join(" ")}
      </Text>
    </View>
  );
};

export default PizzaTranslater;
