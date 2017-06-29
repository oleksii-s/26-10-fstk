import ActionTypes from "./ActionTypes";
import PhonesDispatcher from "./PhonesDispatcher";

const Actions = {
  addItem(text) {
    PhonesDispatcher.dispatch({
      type: ActionTypes.ADD_ITEM,
      text,
    });
  },
  removeItem(text) {
    PhonesDispatcher.dispatch({
      type: ActionTypes.REMOVE_ITEM,
      text,
    });
  }
};

export default Actions;
