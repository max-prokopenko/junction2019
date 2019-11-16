import {createStackNavigator} from 'react-navigation-stack';

import DashboardView from '../views/DashboardView';

const MainRouter = createStackNavigator({
    DashboardView: {
      screen: DashboardView
    }, 
});

export default MainRouter;