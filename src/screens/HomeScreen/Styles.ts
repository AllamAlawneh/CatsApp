import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  catLiContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: 'center',
    padding: 16,
    backgroundColor: colors.primary,
    marginBottom: 16,
    borderRadius: 10,
  },
  imgStyle: {
    height: 25,
    width: 25,
  },
  catLiName: {
    marginLeft: 8,
    color: 'white',
    fontSize: 24,
  },
  catLiLeftContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
