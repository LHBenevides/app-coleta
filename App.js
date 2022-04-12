import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Coleta from './src/pages/Coleta'
import Os from './src/pages/Os'
import FormColeta from './src/pages/FormColeta'
import Details from './src/pages/Details'
import DetailsOs from './src/pages/DetailsOs'
import Login from './src/pages/Login'
import Feed from './src/pages/Feed'
import DataProvider from './src/context/data';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <DataProvider>
        <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen
            name='Login'
            component={Login}
            options={{
              headerStyle: {
                backgroundColor: "#003275"
              },
              headerTitle: "",
              headerShadowVisible: false
            }}
          />
          <Stack.Screen
            name='Feed'
            component={Feed}
            options={{
              headerStyle: {
                backgroundColor: "#003275"
              },
              headerTintColor: '#fff'
            }}
          />
          <Stack.Screen
            name='Coletas'
            component={Coleta}
            options={{
              headerStyle: {
                backgroundColor: "#003275"
              },
              headerTintColor: '#fff'
            }}
          />
          <Stack.Screen
            name='Os'
            component={Os}
            options={{
              headerStyle: {
                backgroundColor: "#003275"
              },
              headerTintColor: '#fff'
            }}
          />
          <Stack.Screen
            name='Realizar Coleta'
            component={FormColeta}
            options={{ headerTintColor: '#003275' }}
          />
          <Stack.Screen
            name='Detalhes Coleta'
            component={Details}
            options={{ headerTintColor: "#003275" }}
          />
          <Stack.Screen
            name='Detalhes Os'
            component={DetailsOs}
            options={{ headerTintColor: "#003275" }}
          />
        </Stack.Navigator>
      </DataProvider>
    </NavigationContainer>
  );
}


