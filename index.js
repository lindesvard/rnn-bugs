import {Navigation} from 'react-native-navigation';
import Home from './src/screens/Home';
import Stack from './src/screens/Stack';
import Modal from './src/screens/Modal';
import Tab from './src/screens/Tab';
import {setTabs} from './src/navigation';

Navigation.registerComponent('Home', () => Home);
Navigation.registerComponent('Stack', () => Stack);
Navigation.registerComponent('Modal', () => Modal);
Navigation.registerComponent('Tab1', () => Tab);
Navigation.registerComponent('Tab2', () => Tab);
Navigation.registerComponent('Tab3', () => Tab);
Navigation.registerComponent('Tab4', () => Tab);
Navigation.registerComponent('Tab5', () => Tab);
Navigation.registerComponent('Tab6', () => Tab);
Navigation.registerComponent('Tab7', () => Tab);
Navigation.registerComponent('Tab8', () => Tab);

Navigation.events().registerAppLaunchedListener(() => {
  setTabs();
});
