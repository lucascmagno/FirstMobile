import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

//importa a imagem ao app.js
import ImageViewer from './components/ImageViewer';
//importa o botao ao app.js
import Button from './components/Button';

const PlaceholderImage = require('./assets/images/backgroundImage.png');

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={PlaceholderImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button theme="primary" label={"Escolha uma foto"}/>
        <Button label={"Use esta foto"}/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  footerContainer: {
    flex: 1/3,
    alignItems: 'center',
  },
});