import React, {useEffect, useLayoutEffect, useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import styles from './Styles';
import StorageHelper from '../../helpers/storage';
import {storageKeys} from '../../constants';
import EditIcon from '../../navigation/Views/EditIcon';

interface CatDetailsProps {
  navigation: StackNavigationProp<any>;
  route: RouteProp<any>;
}

function CatDetails({navigation, route}: CatDetailsProps) {
  const catDetails: CatItem = route.params?.catDetails;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <EditIcon onPress={goToEditCat} />,
    });
  }, []);

  const goToEditCat = () => {
    navigation.navigate('AddEditCatScreen', {catId: catDetails.id});
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollViewContaine}
        showsVerticalScrollIndicator={false}>
        <View style={styles.detailsItemContainer}>
          <Text style={styles.detailsItemTitle}>{'Name'}</Text>
          <Text style={styles.detailsItemValue}>{catDetails.name}</Text>
        </View>

        <View style={styles.detailsItemContainer}>
          <Text style={styles.detailsItemTitle}>{'Age'}</Text>
          <Text style={styles.detailsItemValue}>{catDetails.age}</Text>
        </View>

        <View style={styles.detailsItemContainer}>
          <Text style={styles.detailsItemTitle}>{'breed'}</Text>
          <Text style={styles.detailsItemValue}>{catDetails.breed}</Text>
        </View>

        <View style={styles.detailsItemContainer}>
          <Text style={styles.detailsItemTitle}>{'Color'}</Text>
          <Text style={styles.detailsItemValue}>{catDetails.color}</Text>
        </View>

        <View style={styles.detailsItemContainer}>
          <Text style={styles.detailsItemTitle}>{'Vaccine name'}</Text>
          <Text style={styles.detailsItemValue}>{catDetails.vaccine}</Text>
        </View>

        <View style={styles.detailsItemContainer}>
          <Text style={styles.detailsItemTitle}>{'Description'}</Text>
          <Text style={styles.detailsItemValue}>{catDetails.description}</Text>
        </View>
      </ScrollView>
    </View>
  );
}

export default CatDetails;
