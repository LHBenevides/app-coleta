import React, { useState, useEffect } from 'react'
import { ScrollView, KeyboardAvoidingView, TouchableOpacity, Text } from 'react-native'
import Input from '../../components/Input';
import firebase from '../../config/firebaseConfig'
import styles from "./style"
import { Formik } from 'formik';
import * as Yup from 'yup'
import { Image, View, Platform, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import ButtonNative from '../../components/ButtonNative'

export default function FormColeta({ navigation, route }) {
  const db = firebase.firestore()
  const [dataOs, setDataOs] = useState(route.params.data)
  const [image, setImage] = useState(null);
  const idColeta = dataOs[0].id

  const formSchema = Yup.object().shape({
    responsavel: Yup.string()
      .min(2, 'Insira seu nome completo!*')
      .required('Campo obrigátorio*'),
    volume: Yup.number()
      .min(1, 'Insira um valor válido!*')
      .required('Campo obrigátorio*'),
    quantidade: Yup.number()
      .min(1, 'Insira um valor válido!*')
      .required('Campo obrigátorio*'),
  });

  const pickImage = async () => {
    
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    // console.log(result);
    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  function editStatus(id) {
    db.collection("coletas").doc(id).update({
      status: true
    })
  }

  function addColeta(values) {
    if (values)
      db.collection("os").add({
        responsavel: values.responsavel,
        volume: values.volume,
        quantidade: values.quantidade,
        campo: values.campo
      })
    editStatus(idColeta);
    navigation.navigate('Feed')
  }

  return (
    //   <Text style={styles.titulo}>CNPJ | Cliente | Protocolo</Text>
    <KeyboardAvoidingView
      style={styles.container}>
      <Formik
        validationSchema={formSchema}
        initialValues={{ responsavel: '', volume: '', quantidade: '', campo: '' }}
      // onSubmit={values => addColeta(values)}
      >
        {({ handleChange, values, errors }) => (
          <>
            <ScrollView>
              <Input
                style={styles.input}
                value={values.responsavel}
                id="responsavel"
                label="Responsável"
                error={errors.responsavel}
                onChangeText={handleChange('responsavel')}
                type="text"
              />
              <Input
                style={styles.input}
                value={values.volume}
                type="number"
                keyboardType="numeric"
                id="volume"
                label="Volume"
                error={errors.volume}
                onChangeText={handleChange('volume')}
              />
              <Input
                style={styles.input}
                value={values.quantidade}
                type="number"
                keyboardType="numeric"
                id="quantidade"
                label="Quantidade de Amostras"
                error={errors.quantidade}
                onChangeText={handleChange('quantidade')}
              />
              <Input
                style={styles.input}
                value={values.campo}
                keyboardType="numeric"
                id="campo"
                label="Observações"
                onChangeText={handleChange('campo')}
              />
              <View style={{flex: 1, alignItems: 'center',justifyContent: 'center'}}>
                <ButtonNative
                  title="Escolha o arquivo"
                  onPress={pickImage} />
                {image && <Image source={{ uri: image }} style={{ width: 200, height: 200, borderRadius: 5, marginTop: 15 }} />}
              </View>
            </ScrollView>
            {errors.responsavel || errors.quantidade || errors.volume || values.responsavel === '' || image === null
              ?
              <TouchableOpacity
                style={styles.buttonColetaDisabled}
                disabled={true}
              >
                <Text style={styles.iconButtonColeta}>Finalizar</Text>
              </TouchableOpacity>
              :
              <TouchableOpacity
                style={styles.buttonColeta}
                disabled={false}
                onPress={() => addColeta(values)}
              >
                <Text style={styles.iconButtonColeta}>Finalizar</Text>
              </TouchableOpacity>
            }
          </>
        )}
      </Formik>
    </KeyboardAvoidingView>
  )
}
