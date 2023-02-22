import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scrollViewContaine: {
    paddingHorizontal: 16,
  },
  detailsItemContainer: {
    marginTop: 16,
  },
  detailsItemTitle: {
    color: colors.black,
    fontSize: 24,
    fontWeight: 'bold',
  },
  detailsItemValue: {
    color: colors.black,
    fontSize: 16,
  },
});

export default styles;
