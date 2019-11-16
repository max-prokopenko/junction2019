import {createAppContainer} from 'react-navigation';

import MainRouter from './src/config/router';

const App = createAppContainer(MainRouter);

export default App;
