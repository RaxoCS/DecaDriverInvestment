import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const FAQ = () => {
  const navigation = useNavigation(); // Obtenemos el objeto de navegación

  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Text style={styles.title}>DecaDriver Investment</Text>
      </View>
      <View style={localStyles.infoContainer}>
        <Text style={localStyles.infoText}>FAQ</Text>
        <Text>Texto adicional aquí.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  contentContainer: {
    flex: 1,
    backgroundColor: '#AEC1D0', // Color de fondo de la información
  },
});

const localStyles = StyleSheet.create({
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#AEC1D0',
  },
  infoText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default FAQ;