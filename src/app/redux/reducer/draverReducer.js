import { OPEN_DRAVER } from '../actions/draverActions';

const initialState = {
  open: false
};

const draverReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_DRAVER:
      return { ...state, open: action.open };

    
    default:
      return state;
  }
};

export default draverReducer;