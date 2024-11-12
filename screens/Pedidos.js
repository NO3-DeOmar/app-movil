import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import appFirebase from '../credenciales'
import {getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoc} from 'firebase/firestore'

const db = getFirestore(appFirebase)

export default function Pedidos(props) {

    const [lista, setLista] = useState([])

    useEffect(() => {
        const getLista = async()=>{
            try {
                const querySnapshot = await getDocs(collection(db, 'pedidos'))
                const docs = []
                querySnapshot.forEach((doc)=>{
                    const {cliente, tipo, productos} = doc.data()
                    docs.push({
                        id:doc.id,
                        cliente,
                        tipo,
                        productos,
                    })
                })
                setLista(docs);
            } catch (error) {
                console.log(error);
            }
        }
        getLista()
    }, [lista])

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View>
                    <Text style={styles.TextoTitulo}>Pedidos</Text>
                </View>

                <View>
                    {
                        lista.map((list)=>(
                            <TouchableOpacity key={list.id} style={styles.BotonLista} 
            onPress={()=>props.navigation.navigate('Detalles',{pedidoId:list.id})}>
                                <Text style={styles.TextoNombre}>-{list.cliente}</Text>
                            </TouchableOpacity>
                        ))
                    }
                </View>

            </ScrollView>

            <TouchableOpacity style={styles.Boton} onPress={()=>props.navigation.navigate('Crear')} >
                <Text style={styles.TextoBoton}>Nuevo Pedido</Text>
            </TouchableOpacity>   
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollContainer: {
        padding: 20,  // Opcional: ajuste de padding para el contenido
    },
    Boton: {
        backgroundColor: 'purple',
        height: 50,
        borderColor: 'black',
        borderWidth: 1,
        justifyContent: 'center', // Centrado vertical del texto
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
    TextoBoton: {
        fontSize: 20,
        textAlign: 'center',
        color: 'white'
    },
    TextoTitulo: {
        textAlign: 'center',
        fontSize: 20,
    },
    TextoNombre:{
        fontSize:16
    },
    BotonLista:{
        backgroundColor:'#DDDDDD',
        borderBottomWidth:1,
        borderBottomColor:'#cccccc',
        marginBottom:3,
        padding:5
    }
});
