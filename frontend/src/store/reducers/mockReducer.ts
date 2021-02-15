import * as types from '../actionTypes';
import mockData from '../../data/mock';

const initialState = {
  data: mockData,
  selectedServer: 0,
  selectedChannel: 0
};
const mockReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.SELECT_SERVER:
      return { ...state, selectedServer: action.payload.selectedServer };
    case types.SELECT_CHANNEL:
      console.log('in reducer', action);
      return { ...state, selectedChannel: action.payload.selectedChannel };
    default:
      return state;
  }
};

export default mockReducer;
