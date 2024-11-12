import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import Pedidos from './screens/Pedidos';
import CrearPedido from './screens/CrearPedido';
import DetallesPedido from './screens/DetallesPedido';

export default function App() {

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>

      <Stack.Screen
        name="Pedidos"
        component={Pedidos}
        options={{
          title: 'PEDIDOS',
          headerTitleAlign: 'center',
          headerStyle: { backgroundColor: '#8B1874' },
          headerTintColor: 'white',
        }} 
      />

      <Stack.Screen
        name="Crear"
        component={CrearPedido}
        options={{
          title: 'CREAR PEDIDOS',
          headerTitleAlign: 'center',
          headerStyle: { backgroundColor: '#8B1874' },
          headerTintColor: 'white',
        }} 
      />

      <Stack.Screen
        name="Detalles"
        component={DetallesPedido}
        options={{
          title: 'DETALLES DE PEDIDO',
          headerTitleAlign: 'center',
          headerStyle: { backgroundColor: '#8B1874' },
          headerTintColor: 'white',
        }} 
      />

    </Stack.Navigator>
  );
}


  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
