import { SET_PROPERTIES } from '../actions/propertiesActions';

const initialState = {
  list: [],
  selected: {
    id: null,
    project_name: '',
    user_id: null,
    project_description: '',
    modified_at: '',
    created_at: ''
  }
};

const propertiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROPERTIES:
      return { ...state, list: action.list };

    
    default:
      return state;
  }
};

export default propertiesReducer;