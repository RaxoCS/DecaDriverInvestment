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
        <View style={styles.container}>
      <Text style={styles.heading}>Beta version 0.1</Text>
      <Text style={styles.subheading}>Developed by:</Text>
      <View style={styles.list}>
        <Text style={styles.listItem}>Cordero Soto Oscar</Text>
        <Text style={styles.listItem}>Jimenez Vargas Roberto</Text>
        <Text style={styles.listItem}>Rodriguez Gomez Daniel</Text>
        <Text style={styles.listItem}>Santacruz Estrada Jesus</Text>
        <Text style={styles.listItem}>Serrato Contreras Jaime</Text>
      </View>
      <Text style={styles.subheading}>Version currently on deploy and maintenance</Text>
      <Text style={styles.paragraph}>The used methods are:</Text>
      <View style={styles.list}>
        <Text style={styles.listItem}>Random Forest</Text>
        <Text style={styles.listItem}>Arima</Text>
        <Text style={styles.listItem}>RNA (Neural Network) for the AI system</Text>
      </View>
    </View>
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
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subheading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
  paragraph: {
    fontSize: 16,
    marginTop: 5,
    textAlign: 'center',
  },
  list: {
    marginTop: 5,
    textAlign: 'center',
  },
  listItem: {
    fontSize: 14,
    marginBottom: 5,
    textAlign: 'center',
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