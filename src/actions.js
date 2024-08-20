// src/actions.js
export const loadDashboards = (dashboards) => ({
    type: 'LOAD_DASHBOARDS',
    payload: dashboards,
  });
  
  export const addWidget = (categoryId, widget) => ({
    type: 'ADD_WIDGET',
    payload: { categoryId, widget },
});
  
  export const removeWidget = (categoryId, widgetId) => ({
    type: 'REMOVE_WIDGET',
    payload: { categoryId, widgetId },
  });  