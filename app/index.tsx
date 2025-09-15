import React from "react";
import { SectionList, StyleSheet, Text } from "react-native";

const RNBSectionList = () => {
  const data = [
    { title: "N", data: ["Name 1", "Name 2", "Name 3", "Name 4", "Name 5"] },
    {
      title: "J",
      data: [
        "J Name 1",
        "J Name 2",
        "Name 3",
        "J Name 4",
        "J Name 5",
        "J Name 6",
        "J Name 7",
        "Name 8",
        "J Name 9",
        "J Name 10",
      ],
    },
  ];

  return (
    <SectionList
      sections={data}
      renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
      renderSectionHeader={({ section }) => (
        <Text style={styles.section}>{section.title}</Text>
      )}
      keyExtractor={(item) => `key-${item}`}
    />
  );
};

const styles = StyleSheet.create({
  section: {
    padding: 8,
    backgroundColor: "lightgray",
  },
  item: {
    margin: 8,
    fontSize: 18,
  },
});

export default RNBSectionList;
