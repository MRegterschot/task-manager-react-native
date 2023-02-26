import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import styles from './style';

export default function Navbar() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Taskmanager</Text>
      <FontAwesomeIcon icon={faUser} size={30} color="#fff" />
      <StatusBar style='light'/>
    </View>
  );
}