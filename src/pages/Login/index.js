import React, { useState, useEffect } from 'react'
import { View, Text, KeyboardAvoidingView, Image } from 'react-native'
import firebase from "../../config/firebaseConfig"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import Input from '../../components/Input'
import Button from '../../components/Button'
import styles from "./style"
import { Formik } from 'formik';
import * as Yup from 'yup'

export default function Login({ navigation }) {

  const [errorLogin, setErrorLogin] = useState("");

  const loginFirebase = (email, password) => {
    console.log(email, password)
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        let user = userCredential.user;
        navigation.navigate("Feed")
      })
      .catch((error) => {
        setErrorLogin(true)
        let errorCode = error.code;
        let errorMessage = error.message;
      });
  }

  const validationSchema = Yup.object().shape({
    email: Yup
      .string()
      .email()
      .required("Email é obrigatório*"),
    password: Yup
      .string()
      .required("Insira sua senha*")
      .matches(
        /^[A-Za-z]\w{5,19}$/,
        "senha deve conter apenas letras, no minimo 6 caracteres, e no máximo 20."
      ),
  });


  return (
    <KeyboardAvoidingView
      style={styles.container}
    >
      <Image
        style={styles.image}
        source={require("../../../assets/logo_loglife.png")}
      />
      <Formik
        validationSchema={validationSchema}
        initialValues={{ email: '', password: '', }}
      // onSubmit={values => addColeta(values)}
      >
        {({ handleChange, values, errors }) => (
          <>
            <Input
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#808080"
              type="text"
              error={errors.email}
              onChangeText={handleChange('email')}
              value={values.email}
            />
            <Input
              style={styles.input}
              placeholder="Senha"
              placeholderTextColor="#808080"
              secureTextEntry={true}
              type="text"
              error={errors.password}
              onChangeText={handleChange('password')}
              value={values.password}
            />

            {errorLogin === true
              ?
              <View style={styles.contentAlert}>
                <MaterialCommunityIcons
                  name='alert-circle'
                  size={24}
                  color="#bdbdbd"
                />
                <Text style={styles.alert}>Email ou senha inválidos</Text>
              </View>
              :
              <View />
            }
            {errors.email | errors.password | values.email === "" || values.password === ""
              ?
              <Button
                style={styles.buttonDisabled}
                disabled={true}
                Children="Login"
              ></Button>
              :
              <Button
                style={styles.button}
                disabled={false}
                Children="Login"
                onPress={() => loginFirebase(values.email, values.password)}
              ></Button>
            }
          </>
        )}
      </Formik>
    </KeyboardAvoidingView>
  )
}

