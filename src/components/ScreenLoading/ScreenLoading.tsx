import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import colors from '../../theme/colors';
import styles from './Styles';

function ScreenLoading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={colors.primary} />
    </View>
  );
}

export default ScreenLoading;
