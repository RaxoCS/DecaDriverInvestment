import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';


const CoinComparison = () => {
  const navigation = useNavigation(); // Obtenemos el objeto de navegación

  const handleButtonPress = () => {
    // Lógica para la acción del botón (si es necesario)

    const [imageURL, setImageURL] = useState('');

    axios.get('http://127.0.0.1:5000/get_image')
      .then(response => {
        setImageURL(response.data); // Suponiendo que response.data es la URL de la imagen
      })
      .catch(error => {
        console.error('Error al obtener el enlace de la imagen:', error);
      });

  };

  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Text style={styles.title}>DecaDriver Investment</Text>
      </View>
      <View style={styles.gridContainer}>
        <View style={styles.gridRow}>
          <Image source={require('./media/Currency1.png')} style={styles.image} />
          <Image source={require('./media/Currency2.png')} style={styles.image} />
        </View>
        <View>
          {imageURL ? (
            <Image
              source={{ uri: imageURL }}
              style={{ width: 200, height: 200 }}
            />
          ) : (
            <Text>Cargando...</Text>
          )}
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.imageButton} onPress={() => handleButtonPress()}>
          <Image source={require('./media/Compare.png')} style={styles.image} />
        </TouchableOpacity>
      </View>
      <View style={styles.infoArea}>
        <Text style={styles.infoText}>
          The best coin exchange, and the best economy are Chines Yuan, based on the following variables.{'\n'}
          - PIB per year{'\n'}
          - GDP nominal per year{'\n'}
          - GDP per month{'\n'}
          - General Grow per year{'\n'}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#AEC1D0',
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
  gridContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  gridRow: {
    flexDirection: 'row',
  },
  imageButton: {
    marginHorizontal: 10,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#AEC1D0', // Color de fondo de los botones
    width: 120,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoArea: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#AEC1D0', // Color de fondo del área de información
  },
  infoText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'justify',
  },
});

export default CoinComparison;