import React, { useState, useEffect } from 'react';
import firebase from '../../config/firebaseConfig';
import { FontAwesome } from "@expo/vector-icons";
import styles from './style'
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native'
// import { DataContext } from '../../context/data';


export default function Os({ navigation }) {

  const db = firebase.firestore()
  const [OsInfo, setOsInfo] = useState([])
  // const { data } = useContext(DataContext);

  useEffect(() => {
    db.collection("os").onSnapshot((query) => {
      const list = []
      query.forEach((doc) => {
        list.push({
          ...doc.data(),
          // id: doc.id,
        })
      })
      setOsInfo(list)
    })
  }, [])


  if (OsInfo.length === 0) {
    return <Text style={{ fontSize: 16 }}>Não há OS disponíveis</Text>
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Responsavel | Cliente | Cidade</Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={OsInfo}
          renderItem={({ item }) => {
            return (
              <View style={styles.coleta}>
                <TouchableOpacity
                  style={styles.deleteColeta}
                >
                  <FontAwesome
                    name="check"
                    size={23}
                    color="#003275"
                  >
                  </FontAwesome>
                </TouchableOpacity>
                <Text
                  style={styles.descriptionColeta}
                  onPress={() =>
                    navigation.navigate("Detalhes Os", {
                      data: [item]
                    })
                  }
                >
                  {`${item.responsavel}  `}
                </Text>
              </View>
            )
          }}
        />
      </View>
    )
  }
}