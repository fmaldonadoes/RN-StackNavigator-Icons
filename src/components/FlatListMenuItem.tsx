import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import {MenuItem} from '../interfaces/appInterfaces';

interface Props {
  menuItem: MenuItem;
}

export const FlatListMenuItem = ({menuItem}: Props) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => navigation.navigate<any>(menuItem.component)}>
      <View style={styles.container}>
        <Icon name={menuItem.icon} color="gray" size={24} />

        <Text style={styles.itemText}>{menuItem.name}</Text>

        <View style={{flex: 1}} />

        <Icon name="chevron-forward-outline" color="gray" size={24} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {flexDirection: 'row', alignItems: 'center'},
  itemText: {
    marginLeft: 8,
    fontSize: 18,
  },
});
