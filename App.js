import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, FlatList, Button } from "react-native";

import List from "./component/List";
import GoalInput from "./component/GoalInput";

export default function App() {
  const [add, setadd] = useState([]);
  const [oddMod, setoddMod] = useState(false);

  const addHandler = (goltTitle) => {
    setadd((currentGoals) => [
      ...currentGoals,
      {
        id: Math.random().toString(),
        value: goltTitle,
      },
    ]);
    setoddMod(false);
  };

  const deleteHandler = (goalId) => {
    setadd((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };

  const cancelHandler = () => {
    setoddMod(false);
  };

  return (
    <View style={{ padding: 40, marginVertical: 10 }}>
      <Button title="Yeni Ekle" onPress={() => setoddMod(true)} />
      <GoalInput
        visible={oddMod}
        onAddGoal={addHandler}
        onCancel={cancelHandler}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={add}
        renderItem={(itemData) => (
          <List
            id={itemData.item.id}
            onDelete={deleteHandler}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}
