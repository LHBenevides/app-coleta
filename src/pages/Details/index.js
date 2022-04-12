import React, { useState} from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import styles from './style'


export default function Details({ navigation, route }) {

  const [data, setData] = useState(route.params.data)
  

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Informações da Coleta:</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={({ item }) => {
          return (
            <View style={styles.lista}>
              <Text style={styles.texto}>
                {`Protocolo: ${item.id}`}
              </Text>
              <Text style={styles.texto}>
                {`Cliente: ${item.cliente}`}
              </Text>
              <Text style={styles.texto}>
                {`Endereço: ${item.endereco.rua}, ${item.endereco.numero}, ${item.endereco.bairro} - ${item.endereco.cidade} - ${item.endereco.estado}`}
              </Text>
              <Text style={styles.texto}>
                {`Contato: (${item.contato.ddd}) ${item.contato.telefone}`}
              </Text>
              <Text style={styles.texto}>
                {`Setor: ${item.setor}`}
              </Text>
              {item.status
              ?
              <Text style={{color:"green", fontSize: 16}}>Coleta Realizada!</Text>
              :
              <TouchableOpacity
              style={styles.buttonDetails}
              onPress={() =>
                navigation.navigate("Realizar Coleta", {
                  data: [item]
                })
              }
            >
              <Text style={styles.iconButton}>Realizar Coleta</Text>
            </TouchableOpacity>
              }

            </View>
          )
        }}
      />


    </View>
  )
}