import React, {useContext, useRef, useState} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {CustomSwitch} from '../components/CustomSwitch';
import {HeaderTitle} from '../components/HeaderTitle';

import {styles} from '../theme/appTheme';
import {useForm} from '../hooks/useForm';
import {TextInput} from 'react-native';
import {ThemeContext} from '../context/themeContext/ThemeContext';

export const TextInputScreen = () => {
  const {form, onChange, isSubscribed} = useForm({
    name: '',
    email: '',
    phone: '',
    isSubscribed: false,
  });

  const {
    theme: {colors, dividerColor},
  } = useContext(ThemeContext);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={stylesScreen.container}>
      <ScrollView>
        <View style={styles.globalMargin}>
          <HeaderTitle title="Text Inputs" />

          <TextInput
            style={{
              ...stylesScreen.textInput,
              borderColor: dividerColor,
              color: colors.text,
            }}
            placeholder="name"
            placeholderTextColor={dividerColor}
            keyboardType="default"
            autoCorrect={false}
            autoCapitalize="words"
            onChangeText={value => onChange(value, 'name')}></TextInput>

          <TextInput
            style={{
              ...stylesScreen.textInput,
              borderColor: dividerColor,
              color: colors.text,
            }}
            placeholder="email"
            placeholderTextColor={dividerColor}
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            onSubmitEditing={() => {}}
            onChangeText={value => onChange(value, 'email')}></TextInput>

          <TextInput
            style={{
              ...stylesScreen.textInput,
              borderColor: dividerColor,
              color: colors.text,
            }}
            placeholder="phone"
            placeholderTextColor={dividerColor}
            keyboardType="number-pad"
            onChangeText={value => onChange(value, 'phone')}></TextInput>

          <View style={stylesScreen.switchRow}>
            <Text
              style={{...stylesScreen.switchText, flex: 1, color: colors.text}}>
              Suscribirme
            </Text>
            <CustomSwitch
              isOn={isSubscribed}
              onChange={value => onChange(value, 'isSubscribed')}
            />
          </View>

          <Text style={{fontSize: 20, color: colors.text}}>
            {JSON.stringify(form, null, 5)}
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
const stylesScreen = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInput: {
    height: 40,
    borderWidth: 2,
    borderRadius: 8,
    paddingLeft: 8,
    marginVertical: 8,
  },
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
