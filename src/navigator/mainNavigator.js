import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import CbSplashScreen1183500Navigator from '../features/CbSplashScreen1183500/navigator';
import HomeScreen2183499Navigator from '../features/HomeScreen2183499/navigator';
import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
    CbSplashScreen1183500: {
      screen: CbSplashScreen1183500Navigator
    },
    
    HomeScreen2183499: {
      screen: HomeScreen2183499Navigator
    },
    
    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: "CbSplashScreen1183500"
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
