import React from "react";

import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const List = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={props.onDelete.bind(this, props.id)}
    >
      <View style={styles.listItem}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default List;

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: "#ccc",
    padding: 10,
    margin: 5,
    borderWidth: 1,
  },
});
