import { StyleSheet } from 'react-native';
import colors from '../../assets/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10%',
    paddingTop: 40,
    flexDirection: 'row',
  },
  title: {
    display: 'flex',
    color: colors.accent,
    fontSize: 24,
    fontWeight: 'bold',
    justifyContent: 'flex-start',
  },
});

export default styles;