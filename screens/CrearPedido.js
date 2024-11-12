import React, {useState } from 'react'
import { Text, StyleSheet, View, ScrollView, TextInput, Button, Alert } from 'react-native'

import appFirebase from '../credenciales'
import {getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoc} from 'firebase/firestore'

const db = getFirestore(appFirebase)

export default function CrearPedido(props){

  const initialState = {
    cliente:'',
    tipo:'',
    productos:''
  }

  const [state, setState] = useState(initialState)

  const handleChangeText = (value, name)=>{
    setState({...state,[name]:value})
  }

  const savePedido = async()=>{

    try{
      await addDoc(collection(db, 'pedidos'),{
        ...state
      })

      Alert.alert('Alerta', 'Pedido guardado')
      props.navigation.navigate('Pedidos')
    }
    catch (error){
      console.error('No se pudo guardar el pedido', error);
    }

  }


    return(
      <ScrollView style={styles.container}>
        <Text style={styles.titulo}>Crear Pedido</Text>

        <View style={styles.inputgroup}>
          <TextInput placeholder='Cliente' onChangeText={(value)=>handleChangeText(value, 'cliente')} 
          value={state.cliente}  />
        </View>


        <View style={styles.inputgroup}>
          <TextInput placeholder='Tipo de pedido' onChangeText={(value)=>handleChangeText(value, 'tipo')} 
          value={state.tipo}  />
        </View>

        
        <View style={styles.inputgroup}>
          <TextInput placeholder='Productos' onChangeText={(value)=>handleChangeText(value, 'productos')} 
          value={state.productos}  />
        </View>

        <View>
          <Button title='Guardar Pedido' color='purple' onPress={savePedido} />
        </View>

      </ScrollView>
    );
}

const styles = StyleSheet.create({
        titulo:{
          textAlign:'center',
          fontSize:18,
          marginTop:12,
          marginBottom:20
        },  
        container:{
          flex:1,
          padding:35,
        },  
        inputgroup:{
          flex:1,
          padding:0,
          marginBottom:20,
          borderBottomWidth:1,
          borderBottomColor:'#cccccc'
        },
});