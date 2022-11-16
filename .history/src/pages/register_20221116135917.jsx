import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Dimensions,
  Keyboard,
  Button
} from 'react-native';
import backgroundPicture from '../images/bg1.gpg'
import backgroundPicture2 from '../assets/banner1.jpg'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { auth } from './config';

const Stack = createNativeStackNavigator();

import { Icon } from 'react-native-elements';



export default function LoginPage({navigation}) {
  const [uid, setUid] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPass] = React.useState('');
  const [user, setUser] = React.useState('');



  const register = ({ navigation }) => {

    createUserWithEmailAndPassword(auth, email, password).then(async (userCredential) => {

      const displayName = uid;
      setUser(() => ({ ...userCredential.user }));

      updateProfile(auth.currentUser, { displayName: displayName }).then().catch();
      alert(displayName + "successfully")
      navigation.push('Home')
    }).catch((error) => {
      alert(error);
      console.log(error)
    })

  }





  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <Image
            style={{ flex: 1, width: null, marginTop: -400, resizeMode: "contain" }}
            source={backgroundPicture}
          />
          <Image
            style={{ flex: 1, width: null, marginTop: -900, resizeMode: "contain" }}
            source={backgroundPicture2}
          />
        </View>
        <Animatable.Text
          style={styles.titleText}
          animation='fadeInUp'
          delay={1200}
        >EAT
        </Animatable.Text>
        <View style={styles.bottomView}>
          <Text style={styles.loginText}>Register</Text>
          <View style={styles.inputView}>
            <Icon
              style={styles.inputIcon}
              name='person'
              type='ionicons'
              color='#FA4A0C'
            />
            <TextInput
              style={styles.input}
              placeholder='Username'
              autoCapitalize='none'
              keyboardType='email-address'
              textContentType='emailAddress'
              onChangeText={(uid) => setUid(uid)}
            />
          </View>
          <View style={styles.inputView}>
            <Icon
              style={styles.inputIcon}
              name='person'
              type='ionicons'
              color='#FA4A0C'
            />
            <TextInput
              style={styles.input}
              placeholder='Email'
              autoCapitalize='none'
              keyboardType='email-address'
              textContentType='emailAddress'
              onChangeText={(email) => setEmail(email)}
            />
          </View>
          <View style={styles.inputView}>
            <Icon
              style={styles.inputIcon}
              name='lock'
              type='ionicons'
              color='#FA4A0C'
            />
            <TextInput
              style={styles.input}
              placeholder='Password'
              onChangeText={(pass) => setPass(pass)}
              secureTextEntry={true}
              autoCapitalize='none'
            />
          </View>
          <Text style={styles.fpText}>Forgot Password?</Text>
          <TouchableOpacity style={styles.loginButton}>
            onPress={register}
            <Text style={styles.loginButtonText}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.account}
            onPress={() => navigation.push('Login')}
          >
            <Text style={styles.txtAccount}>Have an account click here</Text>
          </TouchableOpacity>
  
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'FA4A0C',


  },
  titleText: {
    position: 'absolute',
    top: Dimensions.get('screen').height * 0.1,
    alignSelf: 'center',
    color: '#fff',
    fontFamily: 'SourceSansProBold',
    fontSize: 60,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
  },
  bottomView: {
    backgroundColor: 'black',
    opacity: 0.95,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 1,
    paddingBottom: 80,
    paddingHorizontal: 20,
  },
  loginText: {
    fontFamily: 'SourceSansProBold',
    fontSize: 24,
    marginTop: 12,
    marginBottom: 4,
  },
  inputView: {
    height: 40,
    borderRadius: 10,
    backgroundColor: '#f1f3f6',
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputIcon: {
    paddingHorizontal: 8,
  },
  input: {
    height: 40,
    flex: 1,
    fontFamily: 'SourceSansProRegular',
    fontSize: 16,
    color: '#333',
  },
  loginButton: {
    backgroundColor: '#FA4A0C',
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 10,
  },
  loginButtonText: {
    color: '#fff',
    fontFamily: 'SourceSansProBold',
    alignSelf: 'center',
    fontSize: 18,
  },
  registerText: {
    alignSelf: 'center',
    marginTop: 12,
    fontFamily: 'SourceSansProRegular',
    fontSize: 16,
    color: 'white'
  },
  fpText: {
    marginTop: 10,
    alignSelf: 'flex-end',
    fontFamily: 'SourceSansProBold',
    fontSize: 16,
    color: '#5352ed',
  },
});



