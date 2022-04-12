import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from "./style"
import firebase from '../../config/firebaseConfig'


export default function Feed({ navigation }) {

  const db = firebase.firestore()

  function Logout() {
    removeOsLogout();
    editStatusLogout();
    firebase.auth().signOut().then(() => {
      navigation.navigate("Login")
    }).catch((error) => {
    });
  }


  function editStatusLogout() {
    db.collection("coletas")
      .doc("QdyvQDOhRh8qzaurSXZd").update({
        status: false
      }),
    db.collection("coletas")
    .doc("zk5fza2HQQ6JOUn3PcIR").update({
      status: false
    })
  }

function removeOsLogout() {
  db.collection('os').get().then(res => {
    res.forEach(element => {
      element.ref.delete();
    })
  })
  };


  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.buttonFeed}
        onPress={() => navigation.navigate('Coletas')}
      >
        <Text style={styles.textButtonFeed}>Coletas</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonFeed}
        onPress={() => navigation.navigate('Os')}
      >
        <Text style={styles.textButtonFeed} >OS Realizadas</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonFeed}
        onPress={Logout}
      >
        <Text style={styles.textButtonFeed} >Sair</Text>
      </TouchableOpacity>
    </View>
  )
}