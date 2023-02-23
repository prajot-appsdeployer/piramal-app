import {TextInput} from 'react-native';
import React from 'react';

const InputField = (props: any) => {
  return (
    <TextInput
      {...props}
      style={{
        width: 300,
        backgroundColor: props.fieldBg,
        marginBottom: 20,
        borderRadius: 11,
        paddingLeft: 14,
      }}
    />
  );
};

export default InputField;
