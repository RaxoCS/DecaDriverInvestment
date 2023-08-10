import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ImageGrid = () => {
  const images = [
    require('./media/CoinComparison.png'),
    require('./media/BeganToInvest.png'),
    require('./media/ConnectWithUs.png'),
    require('./media/FAQ.png'),
  ];

  const navigation = useNavigation(); // Obtenemos el objeto de navegación


  const handlePress = (index) => {
    if (index === 0) {
        // Navega a la pantalla de información cuando se presiona el tercer botón
      navigation.navigate('Info');
    } else if (index === 1) {
        // Abre la página web en el navegador predeterminado
        Linking.openURL('https://stonexbullion.com/en/');
    } else if (index === 2) {
        Linking.openURL('https://www.facebook.com/oscaralejandro.corderosoto');  
    } else {
        navigation.navigate('FAQ');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity style={styles.imageButton} onPress={() => handlePress(0)}>
          <Image source={images[0]} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.imageButton} onPress={() => handlePress(1)}>
          <Image source={images[1]} style={styles.image} />
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.imageButton} onPress={() => handlePress(2)}>
          <Image source={images[2]} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.imageButton} onPress={() => handlePress(3)}>
          <Image source={images[3]} style={styles.image} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  imageButton: {
    margin: 20,
    overflow: 'hidden',
  },
  image: {
    width: 120,
    height: 120,
  },
});

export default ImageGrid;