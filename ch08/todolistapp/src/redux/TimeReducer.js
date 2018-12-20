import Constant from "../Constant";

const initialState = {
    currentTime : new Date()
}

const TimeReducer = (currentTime = initialState.currentTime, action) => {
    if (action.type === Constant.CHANGE_TIME) {
        return new Date();
    } else {
        return currentTime;
    }
}

export default TimeReducer;