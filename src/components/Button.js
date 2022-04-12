import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import db from '../config/firebaseConfig'
// import styles from '../pages/Coleta/style'


const Button = ({ disabled, Children, style, onPress }) => {

  // const [submit, setSubmit] = useState(false)

  // console.log(error)

  // useEffect(() => {
  //   function handleSubmit() {
  //     if (error === {}) {
  //       console.log(error)
  //       setSubmit(true)
  //     } else {
  //       // console.log(error)
  //       setSubmit(false)
  //     }
  //   }
  //   handleSubmit()
  // }, [error, submit])


  // function addColeta() {
  //   if (submit)
  //     if (value) {
  //       db.collection("os").add({
  //         responsavel: value.responsavel,
  //         volume: value.volume,
  //         quantidade: value.quantidade,
  //         campo: value.campo
  //       })
  //       navigation.navigate('Coletas')
  //     }
  // }

  // console.log(submit)
  return (
    <View>
      <TouchableOpacity
        style={style}
        disabled={disabled}
        onPress={onPress}

      >
        <Text style={styles.iconButtonColeta}>{Children}</Text>
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
  buttonNovaColeta: {
    width: "45%",
    padding: 15,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto"
  },
  buttonNovaColetaDisabled: {
    width: "45%",
    padding: 15,
    backgroundColor: "#f5f5f5",
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto"
  },
  iconButton: {
    color: "#003275",
    fontSize: 15,
    fontWeight: "bold"
  },
  buttonDisabled: {
    width: 200,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#808080",
    borderRadius: 50,
    marginTop: 15
  },
})

export default Button