import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:colors.white
  },
  scrollViewContainer: {
    paddingHorizontal: 16,
  },
  marginTop16: {
    marginTop: 16,
  },
  descriptionInput:{
    marginTop: 16,
    height:130,
  }
});

export default styles;
