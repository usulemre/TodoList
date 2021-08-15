import React, { useState } from "react";
import { TextInput, View, Button, StyleSheet, Modal } from "react-native";

const GoalInput = (props) => {
  const [input, setinput] = useState("");

  const addOnchandeText = (enteredText) => {
    setinput(enteredText);
  };

  const exit = () => {
    props.onAddGoal(input);
    setinput("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.container}>
        <TextInput
          style={styles.Textinput}
          placeholder="Deger girin"
          onChangeText={addOnchandeText}
          value={input}
        />
        <View style={styles.button}>
          <View style={{ width: "40%" }}>
            <Button title="Sil" color="red" onPress={props.onCancel} />
          </View>
          <View style={{ width: "40%" }}>
            <Button title="Tıklayın" onPress={exit} />
          </View>
        </View>
      </View>
    </Modal>
  );
};
export default GoalInput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  Textinput: {
    borderWidth: 1,
    width: "60%",
    padding: 5,
    marginBottom: 5,
  },
  button: {
    flexDirection: "row",
    width: "50%",
    justifyContent: "space-between",
  },
});
