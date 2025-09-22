import React from "react";
import { StyleSheet, Text, View } from "react-native";

const EmptyNotes = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>No notes yet 📄</Text>
      <Text style={styles.subtitle}>Start by adding your first note!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 18,
    color: "#666",
  },
});

export default EmptyNotes;
