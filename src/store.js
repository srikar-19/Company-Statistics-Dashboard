// src/store.js
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Defaults to localStorage for web
import dashboardData from './dashboardData.json';

// Initial state
const initialState = dashboardData;

// Dashboard reducer
function dashboardReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOAD_DASHBOARDS':
      return {
        ...state,
        dashboards: action.payload,
      };
    case 'ADD_WIDGET':
      return {
        ...state,
        dashboards: state.dashboards.map((category) =>
          category.id === action.payload.categoryId
            ? {
                ...category,
                widgets: [...category.widgets, action.payload.widget],
              }
            : category
        ),
      };
    case 'REMOVE_WIDGET':
      return {
        ...state,
        dashboards: state.dashboards.map((category) =>
          category.id === action.payload.categoryId
            ? {
                ...category,
                widgets: category.widgets.filter((w) => w.id !== action.payload.widgetId),
              }
            : category
        ),
      };
    default:
      return state;
  }
}

// Persist configuration
const persistConfig = {
  key: 'root',
  storage,
};

// Persisted reducer
const persistedReducer = persistReducer(persistConfig, dashboardReducer);

// Create the Redux store with the persisted reducer
const store = createStore(persistedReducer);

// Create a persistor instance
const persistor = persistStore(store);

export { store, persistor };