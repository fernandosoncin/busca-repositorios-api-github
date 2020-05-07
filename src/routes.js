import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import User from './pages/User';
import Repository from './pages/Repository';

const Routes = createAppContainer(
  createStackNavigator({
    Main,
    User,
    Repository,
  }, {
    defaultNavigationOptions: {
      headerTittleAlign: 'center',
      headerBackTitleVisible: false,
      headerStyle: {
        backgroundColor: '#7bd9c1',
      },
      headerTintColor: '#FFF',
    },
  }),
);

export default Routes;