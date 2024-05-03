import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import React, { useState } from 'react';

export default function App() {

  const [tareas, setTareas] = useState([]);
  const [tareaActual, setTareaActual] = useState('');

  const handleChange = (text) => {
    setTareaActual(text);
  };

  const agregacion = () => {
    if (tareaActual.trim() !== '') {
      setTareas([...tareas, tareaActual]);
      setTareaActual('');
    }
  };

  const eliminacion = (index) => {
    const nuevasTareas = [...tareas];
    nuevasTareas.splice(index, 1);
    setTareas(nuevasTareas);
  };

  return (
    <View style={styles.container}>
      <Text>Por Dennis Gonzalez</Text>
      <Text></Text>
      <Text>Listado:</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={tareaActual}
          onChangeText={handleChange}
          placeholder="Para agregar una nueva tarea:"
        />
        <TouchableOpacity style={styles.botoncito} onPress={agregacion}>
          <Text>Agregar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.tareasContainer}> 
        <FlatList
          data={tareas}
          renderItem={({ item, index }) => (
            <View style={styles.tarea}> 
              <Text>{item}</Text>
              <TouchableOpacity onPress={() => eliminacion(index)} style={styles.eliminar}>
                <Text style={styles.eliminarTexaco}>Eliminar</Text>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    width: '80%',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
    width: '80%',
  },
  botoncito: {
    backgroundColor: 'lightgreen',
    padding: 10,
    borderRadius:7,
  },
  tareasContainer: {
    backgroundColor: 'gray',
    marginTop: 20,
    width: '80%',
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
  },
  tarea: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderWidth: 1,
    padding: 5,
    borderColor: 'white',
  },
  eliminar: {
    marginLeft: 10,
    backgroundColor: 'red',
    padding: 5,
    borderRadius: 7,
  },
  eliminarTexaco: {
    color: 'white',
  },
});