import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  View,
} from 'react-native';
import React from 'react';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Btn = (props: any) => {
  return (
    <TouchableOpacity {...props} style={styles.button}>
      <Text style={{color: '#fff'}}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default Btn;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FF2B00',
    padding: 12,
    alignItems: 'center',
    width: 300,
    borderRadius: 8,
  },
});
