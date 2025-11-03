// src/screens/HomeScreen.js
import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function HomeScreen() {
  const [tasks, setTasks] = useState([
    { id: '1', title: 'Buy groceries', completed: false },
    { id: '2', title: 'Finish project report', completed: true },
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Today</Text>

      <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={[styles.taskItem, item.completed && styles.completed]}>
            <Text style={styles.taskText}>{item.title}</Text>
          </View>
        )}
      />

      <TouchableOpacity style={styles.addButton}>
        <AntDesign name="plus" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    marginBottom: 15,
    color: '#111827',
  },
  taskItem: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 10,
    borderRadius: 14,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  completed: {
    opacity: 0.5,
  },
  taskText: {
    fontSize: 16,
  },
  addButton: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    backgroundColor: '#5B7BFE',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },
});
