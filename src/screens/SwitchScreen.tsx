import React, {useState} from 'react';
import {View, Switch, StyleSheet, Platform, Text} from 'react-native';
import {CustomSwitch} from '../components/CustomSwitch';
import {HeaderTitle} from '../components/HeaderTitle';

export const SwitchScreen = () => {
  const [state, setState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true,
  });

  const onChange = (value: boolean, field: keyof typeof state) => {
    setState({
      ...state,
      [field]: value,
    });
  };

  const {isActive, isHungry, isHappy} = state;

  return (
    <View style={{marginHorizontal: 20}}>
      <HeaderTitle title="Switches" />

      <View style={styles.switchRow}>
        <Text style={{...styles.switchText, flex: 1}}>isActive</Text>
        <CustomSwitch
          isOn={isActive}
          onChange={value => onChange(value, 'isActive')}
        />
      </View>

      <View style={styles.switchRow}>
        <Text style={{...styles.switchText, flex: 1}}>isHungry</Text>
        <CustomSwitch
          isOn={isHungry}
          onChange={value => onChange(value, 'isHungry')}
        />
      </View>

      <View style={styles.switchRow}>
        <Text style={{...styles.switchText, flex: 1}}>isHappy</Text>
        <CustomSwitch
          isOn={isHappy}
          onChange={value => onChange(value, 'isHappy')}
        />
      </View>

      <Text style={styles.switchText}>{JSON.stringify(state, null, 5)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 4,
  },
  switchText: {
    fontSize: 20,
  },
});
