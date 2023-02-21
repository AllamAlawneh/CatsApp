import React, {useEffect, useState} from 'react';
import {View, ScrollView} from 'react-native';
import Input from '../../components/Input/Input';
import styles from './Styles';
import {StackNavigationProp} from '@react-navigation/stack';
import Button from '../../components/Button/Button';
import ScreenLoading from '../../components/ScreenLoading/ScreenLoading';
import {RouteProp} from '@react-navigation/native';
import StorageHelper from '../../helpers/storage';
import {storageKeys} from '../../constants';
import {Alert} from 'react-native';

interface AddEditCatScreenProps {
  navigation: StackNavigationProp<any>;
  route: RouteProp<any>;
}
type FormState = {
  name: string;
  age: string;
  peer: string;
  color: string;
};

function AddEditCatScreen({navigation, route}: AddEditCatScreenProps) {
  // for editing.
  const catId = route.params?.catId;

  const [formState, setFormState] = useState<FormState>({
    name: '',
    age: '',
    peer: '',
    color: '',
  });
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (catId) {
      StorageHelper.getItem(storageKeys.catsKey).then(cats => {
        const catById: CatItem = cats.find((it: CatItem) => it.id == catId);
        setFormState({
          name: catById.name,
          age: catById.age,
          color: catById.color,
          peer: catById.peer,
        });
      });
    }
  }, [catId]);

  const addCat = async () => {
    try {
      setLoading(true);
      const cats = await StorageHelper.getItem(storageKeys.catsKey);
      // edit cat.
      if (catId) {
        const catIndex = cats.findIndex((it: CatItem) => it.id == catId);
        cats[catIndex] = {
          ...cats[catIndex],
          name: formState.name,
          age: formState.age,
          color: formState.color,
          peer: formState.peer,
        };
        StorageHelper.saveItem(storageKeys.catsKey, cats);
        setLoading(false);
        navigation.popToTop();
        return;
      }

      const newCat: CatItem = {
        id: new Date().getTime(),
        name: formState.name,
        age: formState.age,
        peer: formState.peer,
        color: formState.color,
      };
      if (cats == null) {
        StorageHelper.saveItem(storageKeys.catsKey, [newCat]);
      } else {
        cats.push(newCat);
        StorageHelper.saveItem(storageKeys.catsKey, cats);
      }

      setLoading(false);
      navigation.popToTop();
    } catch (error) {
      console.log('Error in add cat', error);
      setLoading(false);
      Alert.alert(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollViewContainer}
        showsVerticalScrollIndicator={false}>
        <Input
          containerStyle={styles.marginTop16}
          onChange={val => setFormState(oldVal => ({...oldVal, name: val}))}
          value={formState?.name as string}
          placeholder="Name"
        />

        <Input
          containerStyle={styles.marginTop16}
          onChange={val => setFormState(oldVal => ({...oldVal, age: val}))}
          value={formState?.age as string}
          placeholder="Age"
        />

        <Input
          containerStyle={styles.marginTop16}
          onChange={val => setFormState(oldVal => ({...oldVal, peer: val}))}
          value={formState?.peer as string}
          placeholder="Peer"
        />

        <Input
          containerStyle={styles.marginTop16}
          onChange={val => setFormState(oldVal => ({...oldVal, color: val}))}
          value={formState?.color as string}
          placeholder="Color"
        />

        <Button
          containerStyle={styles.marginTop16}
          title="Save"
          onPress={addCat}
        />
      </ScrollView>

      {loading ? <ScreenLoading /> : null}
    </View>
  );
}

export default AddEditCatScreen;
