import {createStackNavigator} from 'react-navigation-stack';

import DashboardView from '../views/DashboardView';
import PlannerView from '../views/PlannerView';
import PhyView from '../views/PhyView';

const MainRouter = createStackNavigator({
    DashboardView: {
      screen: DashboardView
    }, 
    PlannerView: {
      screen: PlannerView
    }, 
    PhyView: {
      screen: PhyView
    }, 
});

export default MainRouter;