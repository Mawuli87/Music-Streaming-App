import AuthInputField from '@components/AuthInputField';
import AppInput from '@ui/AppInput';
import colors from '@utils/colors';
import {FC, useState} from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

interface Props {}

const SignUp: FC<Props> = props => {
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [errorInfo, setErrorInfo] = useState({
    name: '',
    email: '',
    password: '',
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.formContainer}>
        <AuthInputField
          placeholder="John Doe"
          label="Name"
          containerStyle={styles.marginBottom}
          onChange={text => {
            setUserInfo({...userInfo, name: text});
          }}
          errorMsg={errorInfo.name}
        />
        <AuthInputField
          placeholder="john@email.com"
          label="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          containerStyle={styles.marginBottom}
          onChange={text => {
            setUserInfo({...userInfo, email: text});
          }}
          errorMsg={errorInfo.email}
        />
        <AuthInputField
          placeholder="********"
          label="Password"
          autoCapitalize="none"
          secureTextEntry
          onChange={text => {
            setUserInfo({...userInfo, password: text});
          }}
          errorMsg={errorInfo.password}
        />
        <Button
          onPress={() => {
            if (!userInfo.name)
              return setErrorInfo({
                email: '',
                password: '',
                name: 'Name is missing!',
              });
            if (!userInfo.email)
              return setErrorInfo({
                name: '',
                password: '',
                email: 'Email is missing!',
              });
            if (!userInfo.password)
              return setErrorInfo({
                name: '',
                email: '',
                password: 'Password is missing!',
              });

            setErrorInfo({
              name: '',
              email: '',
              password: '',
            });
            console.log(userInfo);
          }}
          title="Sign up"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
  },
  formContainer: {
    width: '100%',
    paddingHorizontal: 15, // padding in the x direction (left and the right)
  },
  marginBottom: {
    marginBottom: 20,
  },
});

export default SignUp;
