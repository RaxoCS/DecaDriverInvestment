import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ImageGrid from './ImageGrid';
import CoinComparison from './CoinComparison';
import Connect from './Connect';
import FAQ from './FAQ';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Info" component={CoinComparison} options={{ headerShown: false }} />
        <Stack.Screen name="Connect" component={Connect} options={{ headerShown: false }} />
        <Stack.Screen name="FAQ" component={FAQ} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Text style={styles.title}>DecaDriver Investment</Text>
      </View>
      <ImageGrid />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#AEC1D0', // Color de fondo de la aplicación
  },
  banner: {
    height: 75,
    width: '100%',
    backgroundColor: '#0E223A', // Color del banner
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white', // Color del texto del título
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default App;
