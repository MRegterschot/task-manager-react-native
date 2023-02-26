import { StyleSheet } from 'react-native';
import colors from '../../assets/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },
  title: {
    display: 'flex',
    color: colors.accent,
    fontSize: 24,
    fontWeight: 'bold',
    justifyContent: 'flex-start',
    width: '80%',
  },
});

export default styles;