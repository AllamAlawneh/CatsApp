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
    height: 200,
    width: 200,
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
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 30,
  },
  noDataTxt: {
    color: colors.black,
    fontSize: 28,
    textAlign: 'center',
    marginBottom: 30,
  },
});

export default styles;
