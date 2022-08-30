import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import { styles } from './style'

import { Participant } from '../../components/Participant'

export function Home(){
  const [participantes, setParticipantes] = useState<string[]>([])
  const [participanteName, setParticipanteName] = useState('')

    function handleParticipantAdd(){
      if(participantes.includes(participanteName)){
        return Alert.alert("Participante Existe","Já existe um participante com esse nome na lista");
      }

        setParticipantes(prevState => [...prevState, participanteName])
        setParticipanteName('');
    }

    function handleParticipantRemove(name: string) {
      Alert.alert("Remover", `Remover o participante ${name}?`, [
        {
          text: 'Sim',
          onPress: () => setParticipantes(prevState => prevState.filter(participante => participante !== name))
        },
        {
          text: 'Não',
          style: 'cancel'
        }
      ])
    }

    
    
  return (
    
    <View style={styles.container}>
    <Text style={styles.eventName}>Nome do evento</Text>
    <Text style={styles.eventDate}>Sexta 4 de novembro de 2022</Text>
    
    <View style={styles.form}>

    <TextInput style={styles.input}
    placeholder="Nome do Participante"
    placeholderTextColor="#6B6B6B"
    onChangeText={setParticipanteName}
    value={participanteName}/>


    <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
        <Text style={styles.buttonText}>
            +
        </Text>
    </TouchableOpacity>
    </View>
    <FlatList 
        data={participantes}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant 
            key={item} 
            name={item} 
            onRemove={() => handleParticipantRemove(item)} 
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.
          </Text>
        )}
      />
    </View>
    
  )
}