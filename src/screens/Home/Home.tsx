import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import Btn from '../../components/Btn';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Home = (props: any) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <View>
      {isLoading ? (
        <View
          style={{
            backgroundColor: '#FF2B00',
            height: windowHeight,
            width: windowWidth,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={{width: 120, height: 200}}
              source={require('../../assets/piramal.png')}
            />

            {/* <Text
              style={{color: '#fff', textAlign: 'center', marginBottom: 20}}>
              <FontAwesome name="hand-peace-o" size={110} />
            </Text> */}

            <View style={{alignSelf: 'center'}}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 30,
                  fontFamily: 'serif',
                }}>
                Piramal
              </Text>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 18,
                  fontFamily: 'sans',
                }}>
                Realty
              </Text>
            </View>
          </View>
        </View>
      ) : (
        <View style={styles.container}>
          <View style={{marginBottom: 40}}>
            <Text
              style={{color: '#fff', textAlign: 'center', marginBottom: 20}}>
              <FontAwesome5 name="wifi" size={150} />
            </Text>

            <Text style={styles.heading}>
              Connect to Wifi for a Seamless Experience
            </Text>

            <Text
              style={{
                color: '#fff',
                textAlign: 'center',
                paddingHorizontal: 40,
              }}>
              Ensure your device is connected to Wi-Fi or Mobile Network for
              seamless usage
            </Text>
          </View>

          <Btn
            btnTextClr="#fff"
            title="Next"
            onPress={() => props.navigation.navigate('Login')}
          />
        </View>
      )}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    height: windowHeight,
    width: windowWidth,
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: 'center',
    padding: 100,
    backgroundColor: '#163848',
  },
  heading: {
    color: '#ffffff',
    fontSize: 34,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
});
