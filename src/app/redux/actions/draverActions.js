export const OPEN_DRAVER = 'DRAVER/OPEN_DRAVER';

export const openForm = (open) => {
  return (dispatch) => {
    dispatch({ type: OPEN_DRAVER, open: open })
  }
}