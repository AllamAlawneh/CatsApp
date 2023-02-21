import {StyleSheet} from 'react-native';

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
    padding:16,
    backgroundColor:'red',
    marginBottom:16,
    borderRadius:10
  },
  imgStyle: {
    height: 25,
    width: 25,
  },
  catLiName: {
    marginLeft: 8,
    color: 'blue',
    fontSize: 16,
  },
  catLiLeftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
