import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'


const Input = ({ placeholder, placeholderTextColor, value, onChangeText, error, id, label, type, secureTextEntry, style, keyboardType}) => {


  return (
    <View>
      <Text
        style={styles.label}>{label}</Text>
      <TextInput
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        error={error}
        id={id}
        style={style}
        type={type}
        keyboardType ={keyboardType}
        secureTextEntry={secureTextEntry}
      />
      <Text style={{ color: "red", marginLeft: 20, marginTop: 3}}>{error}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    width: "90%",
    marginTop: 10,
    padding: 10,
    height: 50,
    borderBottomWidth: 2,
    // borderBottomColor: "#003275",
    marginLeft: "auto",
    marginRight: "auto",
  },
  label: {
    fontSize: 16,
    width: "90%",
    marginTop: 20,
    marginLeft: 20,
    color: "#003275"
  },
})

export default Input