import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import styles from './style';

export default function Navbar() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Taskmanager</Text>
      <StatusBar style="auto" />
    </View>
  );
}