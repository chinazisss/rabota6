import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from './styles';

export default function App() {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    loadNotes();
  }, []);

  const loadNotes = async () => {
    try {
      const savedNotes = await AsyncStorage.getItem('@notes');
      if (savedNotes !== null) {
        setNotes(JSON.parse(savedNotes));
      }
    } catch (error) {
      console.log('Ошибка загрузки', error);
    }
  };

 
  const saveNotesToStorage = async (updatedNotes) => {
    try {
      await AsyncStorage.setItem('@notes', JSON.stringify(updatedNotes));
    } catch (error) {
      console.log('Ошибка сохранения', error);
    }
  };

  const addNote = () => {
    if (title.trim() === '' || text.trim() === '') return;
    const newNote = { id: Date.now().toString(), title, text };
    const updatedNotes = [newNote, ...notes];
    
    setNotes(updatedNotes);
    saveNotesToStorage(updatedNotes); 
    setTitle('');
    setText('');
  };

  const deleteNote = (id) => {
    const updatedNotes = notes.filter(note => note.id !== id);
    setNotes(updatedNotes);
    saveNotesToStorage(updatedNotes); 
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Заголовок заметки" value={title} onChangeText={setTitle} />
      <TextInput style={styles.input} placeholder="Текст заметки" value={text} onChangeText={setText} multiline />
      <TouchableOpacity style={styles.button} onPress={addNote}>
        <Text style={styles.buttonText}>Добавить заметку</Text>
      </TouchableOpacity>

      <FlatList
        data={notes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.noteItem}>
            <Text style={styles.noteTitle}>{item.title}</Text>
            <Text style={styles.noteText}>{item.text}</Text>
            <TouchableOpacity onPress={() => deleteNote(item.id)}>
              <Text style={styles.deleteText}>Удалить</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}