import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { Camera as CameraIcon, Repeat } from 'lucide-react-native';

export default function CameraScreen() {
  // const [facing, setFacing] = useState<CameraType>('back');
  // const [permission, requestPermission] = useCameraPermissions();

  // if (!permission) {
  //   return <View />;
  // }

  // if (!permission.granted) {
  //   return (
  //     <View style={styles.container}>
  //       <Text style={styles.message}>We need camera access to extract colors from your surroundings</Text>
  //       <TouchableOpacity style={styles.button} onPress={requestPermission}>
  //         <Text style={styles.buttonText}>Grant Permission</Text>
  //       </TouchableOpacity>
  //     </View>
  //   );
  // }

  return (
    <View style={styles.container}>
      <View style={styles.camera} 
      // facing={facing}
      >
        <View style={styles.overlay}>
          <Text style={styles.overlayText}>Point camera at colors to capture</Text>
        </View>
        <View style={styles.controls}>
          <TouchableOpacity
            style={styles.captureButton}
            onPress={() => {/* Implement color capture */}}>
            <CameraIcon color="#ffffff" size={32} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.flipButton}
            // onPress={() => setFacing(current => (current === 'back' ? 'front' : 'back'))}
            >
            <Repeat color="#ffffff" size={24} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  camera: {
    flex: 1,
  },
  message: {
    fontFamily: 'Inter_400Regular',
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center',
    margin: 20,
  },
  button: {
    backgroundColor: '#6366f1',
    padding: 16,
    borderRadius: 8,
    margin: 20,
  },
  buttonText: {
    fontFamily: 'Inter_600SemiBold',
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 60,
    left: 0,
    right: 0,
    padding: 20,
    alignItems: 'center',
  },
  overlayText: {
    fontFamily: 'Inter_600SemiBold',
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
    padding: 12,
    borderRadius: 8,
  },
  controls: {
    position: 'absolute',
    bottom: 40,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  captureButton: {
    backgroundColor: '#6366f1',
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  flipButton: {
    backgroundColor: 'rgba(255,255,255,0.3)',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});