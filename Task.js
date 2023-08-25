// Task.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Task = ({ task, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.taskContainer}>
        <Text>{task}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
});

export default Task;
