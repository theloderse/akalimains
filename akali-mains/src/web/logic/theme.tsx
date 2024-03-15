// THEME STATE.

// Initial State
const initialState = {
  theme: 'dark'
};

// Action Types
const TOGGLE_THEME = 'TOGGLE_THEME';

// Reducer
const themeReducer = (state = initialState, action: { type: any; }) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light'
      };
    default:
      return state;
  }
};

// Action Creator
export const toggleTheme = () => {
  return { type: TOGGLE_THEME };
};

export default themeReducer;