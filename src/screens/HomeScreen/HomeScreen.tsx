import React, {useCallback, useState} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {storageKeys} from '../../constants';
import StorageHelper from '../../helpers/storage';
import styles from './Styles';
import {useFocusEffect} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

interface HomeScreenProps {
  route: any;
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

  const handleCatItemPress = () => {
    navigation.navigate('Details');
  };

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
    <View style={{flex: 1, marginTop: 15}}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}
        renderItem={renderCatItem}
      />
    </View>
  );
}

export default HomeScreen;
