import React from 'react';
import Intro from './cmp/intro';
import SignUp from './cmp/signup';
import Login from './cmp/login';
import Forgot from './cmp/forgot';
import Otp from './cmp/otp';
import Drawer from './cmp/drawer';

import { NavigationContainer as Container } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const { Navigator, Screen } = createNativeStackNavigator();
import {Provider} from 'react-redux';
import store from './redux/store';

const App = ()=>{
  return (
      <Provider store={store}>
        <Container>
          <Navigator>
            <Screen name="Intro" component={Intro} options={{headerShown: false}} />
            <Screen name="sign-up" component={SignUp} options={{title: 'Create An Account'}} />
            <Screen name="login" component={Login} options={{title: 'Sign In Your Account'}} />
            <Screen name="forgot" component={Forgot} options={{title: 'Forgot Password'}} />
            <Screen name="otp" component={Otp} options={{title: 'Verification'}} />
            <Screen name="drawer" component={Drawer} options={{headerShown: false}} />
          </Navigator>
        </Container>
      </Provider>
  );
}

export default App;
