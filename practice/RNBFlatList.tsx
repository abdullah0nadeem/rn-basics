import React from "react";
import { FlatList, StyleSheet, Text } from "react-native";

const RNBFlatList = () => {
  const data = [
    "Name 1",
    "Name 2",
    "Name 3",
    "Name 4",
    "Name 5",
    "Name 6",
    "Name 7",
    "Name 8",
    "Name 9",
    "Name 10",
  ];

  return (
    <FlatList
      data={data}
      renderItem={(item) => <Text style={styles.item}>{item.item}</Text>}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    margin: 8,
    fontSize: 18,
  },
});

export default RNBFlatList;
