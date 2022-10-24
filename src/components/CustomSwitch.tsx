import React, {useState} from 'react';
import {Platform, Switch} from 'react-native';

interface Props {
  isOn: boolean;
  onChange: (value: boolean) => void;
}

export const CustomSwitch = ({isOn, onChange}: Props) => {
  const [isEnabled, setIsEnabled] = useState(isOn);
  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
    onChange(!isEnabled);
  };

  return (
    <Switch
      trackColor={{false: '#D9D9DB', true: 'green'}}
      thumbColor={Platform.OS == 'android' ? '#5858D6' : ''}
      ios_backgroundColor="gray"
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
};
