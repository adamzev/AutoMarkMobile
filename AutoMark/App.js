import React from 'react';
import { RNCamera, FaceDetector } from 'react-native-camera';
import { StyleSheet, Text, View } from 'react-native';




export default class App extends React.Component {
  takePicture() {
    this.camera.capture()
       .then((data) => console.log(data))
       .catch(err => console.error(err));
  }
  render() {
    return (
      <View style={styles.container}>
        <Camera
          ref={(cam) => {
              this.camera = cam;
            }}
            style={styles.preview}
            aspect={Camera.constants.Aspect.fill}>
            <Text style={styles.capture} onPress={this.takePicture.bind(this)}>
                  [CAPTURE]
              </Text>
        </Camera>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
