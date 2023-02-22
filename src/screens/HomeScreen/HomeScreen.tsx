import React, {useCallback, useLayoutEffect, useState} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {storageKeys} from '../../constants';
import StorageHelper from '../../helpers/storage';
import styles from './Styles';
import {useFocusEffect} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icons from 'react-native-vector-icons/Feather';
import colors from '../../theme/colors';
import {StackNavigationProp} from '@react-navigation/stack';
import AddIcon from '../../navigation/Views/AddIcon';

interface HomeScreenProps {
  navigation: StackNavigationProp<any>;
}

function HomeScreen({navigation}: HomeScreenProps) {
  const [cats, setCats] = useState<CatItem[]>([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <AddIcon onPress={goToAddCat} />,
    });
  }, []);

  useFocusEffect(
    useCallback(() => {
      StorageHelper.getItem(storageKeys.catsKey).then(catsFromStorage => {
        setCats(catsFromStorage);
      });
    }, []),
  );

  const goToAddCat = () => {
    navigation.navigate('AddEditCatScreen');
  };

  const deleteCatItem = (index: number) => {
    const clonedCats = [...cats];
    clonedCats.splice(index, 1);
    setCats(clonedCats);

    StorageHelper.saveItem(storageKeys.catsKey, clonedCats);
  };

  const handleCatItemPress = (item: CatItem) => {
    navigation.navigate('CatDetailsScreen', {catDetails: item});
  };

  const renderCatItem = ({item, index}: {item: CatItem; index: number}) => {
    return (
      <View style={styles.catLiContainer}>
        <TouchableOpacity
          style={styles.catLiLeftContainer}
          activeOpacity={1}
          onPress={() => handleCatItemPress(item)}>
          <Icon size={20} color={colors.white} name="cat" />
          <Text style={styles.catLiName}>{item.name}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => deleteCatItem(index)}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => deleteCatItem(index)}>
            <View pointerEvents="none">
              <Icons size={24} color={colors.red} name="trash-2" />
            </View>
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
    );
  };

  const renderEmptyView = () => {
    return (
      <View style={styles.noDataContainer}>
        <Text style={styles.noDataTxt}>{'No Cats ..!'}</Text>
        <Image
          resizeMode="contain"
          style={styles.imgStyle}
          source={{
            uri: 'https://st.depositphotos.com/1000507/56447/v/600/depositphotos_564474342-stock-illustration-cat-eyes-closed-confounded-pictorial.jpg',
          }}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={it => String(it.id)}
        showsVerticalScrollIndicator={false}
        data={cats}
        renderItem={renderCatItem}
        ListEmptyComponent={renderEmptyView}
      />
    </View>
  );
}

export default HomeScreen;
