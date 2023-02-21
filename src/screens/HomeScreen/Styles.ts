import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: 16,
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
    elevation: 2,
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
  noDataContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  noDataTxt: {
    color: colors.black,
    fontSize: 18,
    textAlign: 'center',
  },
});

export default styles;
