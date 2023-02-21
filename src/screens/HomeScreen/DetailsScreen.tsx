import {useFocusEffect} from '@react-navigation/native';
import React, {useCallback, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {storageKeys} from '../../constants';
import StorageHelper from '../../helpers/storage';

function DetailsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Details </Text>
    </View>
  );
}

export default DetailsScreen;
