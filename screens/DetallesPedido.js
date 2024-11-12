import React, {useState, useEffect } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Alert } from 'react-native'

import appFirebase from '../credenciales'
import {getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoc} from 'firebase/firestore'

const db = getFirestore(appFirebase)

export default function DetallesPedido(props) {

    const [pedido, setPedido] = useState({})

    const obtenerPedido = async(id)=>{
        try{
            const docRef = doc(db, 'pedidos', id)
            const docSnap = await getDoc(docRef)
            setPedido(docSnap.data())
        }
        catch{
            console.error(error)
        }
    }

    useEffect(()=>{
        obtenerPedido(props.route.params.pedidoId)
      },[])

    const deletePedido = async(id)=>{ 
        await deleteDoc(doc(db,'pedidos', id))
        Alert.alert('Exito', 'producto eliminado con exito')
        props.navigation.navigate('Pedidos')
      }

    return(
        <View>
            <Text style={styles.titulo}> Detalles del pedido </Text>

            <Text style={styles.sub}>Cliente: {pedido.cliente}</Text>
            <Text style={styles.sub}>Tipo: {pedido.tipo}</Text>
            <Text style={styles.sub}>Productos: {pedido.productos}</Text>
      
            <TouchableOpacity style={styles.BotonLista} onPress={()=>deletePedido(props.route.params.pedidoId)}>
                <Text style={styles.TextoNombre}>Eliminar</Text>
            </TouchableOpacity>
    </View>
    )
}

const styles = StyleSheet.create({
    titulo:{
      textAlign:'center',
      marginTop:10,
      marginBottom:10,
      fontSize:20
    },
    sub:{
      fontSize:16
    },
    
    TextoNombre:{
      fontSize:16,
      textAlign:'center',
      color:'white',
      
    },
    BotonLista:{
      backgroundColor:'red',
      borderBottomWidth:1,
      borderBottomColor:'#cccccc',
      marginBottom:3,
      padding:5,
      marginTop:5
    }
  })