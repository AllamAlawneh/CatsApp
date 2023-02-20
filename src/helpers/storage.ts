import AsyncStorage from '@react-native-async-storage/async-storage';

export function saveItem(key: string, value: any) {
  try {
    if (typeof value !== 'string') {
      value = JSON.stringify(value);
    }

    AsyncStorage.setItem(key, value);
  } catch (error) {
    console.log('error in save item', error);
  }
}

export async function getItem(key: string) {
  try {
    let val = await AsyncStorage.getItem(key);
    return getData(val);
  } catch (error) {
    console.log('error in get item', error);
  }
}

function getData(data: any) {
  try {
    // if not strigified will excuten catch block.
    return JSON.parse(data);
  } catch (e) {
    return data;
  }
}
export default {
  saveItem,
  getItem,
};
