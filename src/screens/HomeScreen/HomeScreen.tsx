import {useFocusEffect} from '@react-navigation/native';
import React, {useCallback, useState} from 'react';
import {FlatList, View} from 'react-native';
import {storageKeys} from '../../constants';
import StorageHelper from '../../helpers/storage';

function HomeScreen() {
  const [cats, setCats] = useState([]);

  useFocusEffect(
    useCallback(() => {
      StorageHelper.getItem(storageKeys.catsKey).then(catsFromStorage => {
        console.log('res is', catsFromStorage);
        setCats(catsFromStorage);
      });
    }, []),
  );

  const renderCatItem = ({item}: {item: any}) => {
    return null;
  };

  return (
    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={cats}
        renderItem={renderCatItem}
      />
    </View>
  );
}

export default HomeScreen;
