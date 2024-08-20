import { dashboardData } from "../dashboardData";

const loadStateFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem('dashboardState');
        if (serializedState === null) {
            return dashboardData;
        }
        return JSON.parse(serializedState);
    } catch (e) {
        console.warn("Could not load state from local storage", e);
        return dashboardData;
    }
};

const saveStateToLocalStorage = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('dashboardState', serializedState);
    } catch (e) {
        console.warn("Could not save state to local storage", e);
    }
};

const initialState = loadStateFromLocalStorage();

const dashboardReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case 'ADD_WIDGET':
            newState = {
                ...state,
                categories: state.categories.map(category =>
                    category.id === action.payload.categoryId
                        ? {
                            ...category,
                            widgets: [...category.widgets, action.payload.widget]
                        }
                        : category
                )
            };
            saveStateToLocalStorage(newState);
            return newState;
        case 'REMOVE_WIDGET':
            newState = {
                ...state,
                categories: state.categories.map(category =>
                    category.id === action.payload.categoryId
                        ? {
                            ...category,
                            widgets: category.widgets.filter(
                                widget => widget.id !== action.payload.widgetId
                            )
                        }
                        : category
                )
            };
            saveStateToLocalStorage(newState);
            return newState;
        default:
            return state;
    }
};

export default dashboardReducer;