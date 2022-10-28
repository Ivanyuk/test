import { configureStore } from '@reduxjs/toolkit';

import propertiesReducer from './reducer/propertiesReducer';
import draverReducer from './reducer/draverReducer';

export const store = configureStore({
  reducer: {
    properties: propertiesReducer,
    draverReducer
  },
});
