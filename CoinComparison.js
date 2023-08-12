import React, { useState } from 'react';
import axios from 'axios';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CoinComparison = () => {
  const navigation = useNavigation(); // Obtenemos el objeto de navegación
  const [showImage, setShowImage] = useState(false);
  const [showText, setShowText] = useState(false);
  const [imageURL, setImageURL] = useState('');

  axios.get('http://127.0.0.1:5000/get_image')
      .then(response => {
        setImageURL(response.data); // Suponiendo que response.data es la URL de la imagen
      })
      .catch(error => {
        console.Log(' ', error);
      });

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
      {showImage && (
      <Image source={require('./media/Graphic.png')} style={styles.resultImage} />
      )}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.imageButton}
          onPress={() => { setShowImage(true) // Actualiza el estado para mostrar la imagen y el texto
                           setShowText(true)}} 
        >
          <Image source={require('./media/Compare.png')} style={styles.image} />
        </TouchableOpacity>

      </View>
      <View style={styles.infoArea}>
        {showText && (
        <Text style={styles.infoText}>
          The best coin exchange, and the best economy are Chinese Yuan, based on the following variables.{'\n'}
          - PIB per year{'\n'}
          - GDP nominal per year{'\n'}
          - GDP per month{'\n'}
          - General Grow per year{'\n'}
        </Text>
        )}
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
    paddingVertical: 10,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 1,
  },
  gridRow: {
    flexDirection: 'row',
    
  },
  imageButton: {
    marginHorizontal: 10,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#AEC1D0', // Color de fondo de los botones
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoArea: {
    paddingHorizontal: 20,
    paddingVertical: 0,
    backgroundColor: '#AEC1D0', // Color de fondo del área de información
  },
  infoText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'justify',
  },
  resultImage: {
    width: 370,
    height: 310,
    alignSelf: 'center'
  },  
});

export default CoinComparison;