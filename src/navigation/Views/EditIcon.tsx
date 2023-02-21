import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import colors from '../../theme/colors';

interface EditIconProps {
  onPress: () => void;
}

function EditIcon({onPress}: EditIconProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View pointerEvents="none">
        <Icon color={colors.black} size={25} name="pencil" />
      </View>
    </TouchableOpacity>
  );
}

export default EditIcon;
