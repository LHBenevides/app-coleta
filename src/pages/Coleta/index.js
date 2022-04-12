import React, { useContext } from 'react';
import { FontAwesome } from "@expo/vector-icons";
import styles from './style'
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native'
import { DataContext } from '../../context/data';

export default function Coleta({ navigation }) {
  const { data } = useContext(DataContext);
  if (data.length === 0) {
    return <Text style={{ fontSize: 16 }}>Não há coletas disponíveis</Text>
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Remetente | Cliente | Cidade</Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={({ item }) => {
            return (
              <View style={styles.coleta}>
                <TouchableOpacity
                  style={styles.deleteColeta}
                >
                  <FontAwesome
                    name="star"
                    size={23}
                    color="#003275"
                  >
                  </FontAwesome>
                </TouchableOpacity>
                <Text
                  style={styles.descriptionColeta}
                  onPress={() =>
                    navigation.navigate("Detalhes Coleta", {
                      data: [item]
                    })
                  }
                >
                  {`${item.remetente} | ${item.cliente} | ${item.endereco.cidade}`}
                </Text>
              </View>
            )
          }}
        />
      </View>
    )
  }
}