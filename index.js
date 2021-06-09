import {Navigation} from 'react-native-navigation';
import Home from './src/screens/Home';
import Stack from './src/screens/Stack';
import Modal from './src/screens/Modal';
import {setRoot} from './src/navigation';

Navigation.registerComponent('Home', () => Home);
Navigation.registerComponent('Stack', () => Stack);
Navigation.registerComponent('Modal', () => Modal);

Navigation.events().registerAppLaunchedListener(() => {
  console.log('setroor');
  setRoot('Home');
});
