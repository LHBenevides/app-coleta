import React, { useState, useContext } from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import styles from './style'
import { DataContext } from '../../context/data';

export default function DetailsOs({ navigation, route }) {


  const [dataOs, setData] = useState(route.params.data)
  const { data } = useContext(DataContext);


  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Informações da OS:</Text>
      <Text style={styles.texto}>
        {`Protocolo: ${data[0].id}`}
      </Text>
      <Text style={styles.texto}>
        {`Cliente: ${data[0].cliente}`}
      </Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={dataOs}
        renderItem={({ item }) => {
          return (
            <View style={styles.lista}>
              <Text style={styles.texto}>
                {`Responsável: ${item.responsavel}`}
              </Text>
              <Text style={styles.texto}>
                {`Quantidade: ${item.quantidade}`}
              </Text>
              <Text style={styles.texto}>
                {`Volume: ${item.volume}`}
              </Text>
              <Text style={styles.texto}>
                {`Campo: ${item.campo}`}
              </Text>

              <TouchableOpacity
                style={styles.buttonDetails}
                onPress={() =>
                  navigation.navigate("Feed")
                }
              >
                <Text style={styles.iconButton}>Voltar</Text>
              </TouchableOpacity>
            </View>
          )
        }}
      />
    </View>
  )
}