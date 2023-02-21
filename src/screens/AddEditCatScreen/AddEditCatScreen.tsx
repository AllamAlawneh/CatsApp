import React, {useState} from 'react';
import {View, ScrollView} from 'react-native';
import Input from '../../components/Input/Input';
import styles from './Styles';
import {StackNavigationProp} from '@react-navigation/stack';
import Button from '../../components/Button/Button';
import ScreenLoading from '../../components/ScreenLoading/ScreenLoading';
import {RouteProp} from '@react-navigation/native';

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
  const [formState, setFormState] = useState<FormState>({
    name: '',
    age: '',
    peer: '',
    color: '',
  });
  const [loading, setLoading] = useState<boolean>(false);

  const addCat = () => {
    setLoading(true);
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
          onChange={val => setFormState(oldVal => ({...oldVal, peer: val}))}
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
