import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  inputText: {
    color: colors.black,
  },
});

export default styles;
