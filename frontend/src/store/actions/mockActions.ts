import { SELECT_CHANNEL } from '../actionTypes/index';

export const selectChannel = (selectedChannel: number) => {
  return async (dispatch: any) => {
    console.log('in thunk', selectedChannel);
    dispatch({ type: SELECT_CHANNEL, payload: { selectedChannel } });
  };
};
