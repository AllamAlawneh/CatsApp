import React, {useCallback, useState} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {storageKeys} from '../../constants';
import StorageHelper from '../../helpers/storage';
import styles from './Styles';
import {useFocusEffect} from '@react-navigation/native';

interface HomeScreenProps {
  navigation: any;
}

function HomeScreen({navigation}: HomeScreenProps) {
  const [cats, setCats] = useState<CatItem[]>([]);

  useFocusEffect(
    useCallback(() => {
      StorageHelper.getItem(storageKeys.catsKey).then(catsFromStorage => {
        setCats(catsFromStorage);
      });
    }, []),
  );

  const deleteCatItem = (index: number) => {
    const clonedCats = [...cats];
    clonedCats.splice(index, 1);
    setCats(clonedCats);

    StorageHelper.saveItem(storageKeys.catsKey, clonedCats);
  };

  const handleCatItemPress = () => {};

  const renderCatItem = ({item, index}: {item: CatItem; index: number}) => {
    return (
      <View style={styles.catLiContainer}>
        <TouchableOpacity
          style={styles.catLiLeftContainer}
          activeOpacity={1}
          onPress={handleCatItemPress}>
          <Image
            resizeMode="contain"
            style={styles.imgStyle}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/616/616430.png',
            }}
          />

          <Text style={styles.catLiName}>{'cat 1'}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => deleteCatItem(index)}>
          <Image
            resizeMode="contain"
            style={styles.imgStyle}
            source={{
              uri: 'https://w1.pngwing.com/pngs/431/160/png-transparent-icon-design-trash-red-line-area-material-rectangle-thumbnail.png',
            }}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <Text style={{color: 'black'}}>Home screen</Text>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={cats}
        renderItem={renderCatItem}
      />
    </View>
  );
}

export default HomeScreen;
