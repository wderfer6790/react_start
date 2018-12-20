import Constant from '../Constant';

const TimeActionCreator = {
    /**
     * 비동기 처리를 위한 함수, 실제 액션을 전달하는 함수는 
     * 이 함수 안에서 비동기처리 결과에 따라 다시 디스패치 한다.
     */
    asyncChangeTime() {
        return (dispatch, getState) => {
            let {currentTime} = getState();
            // 미들웨어에 처리를 하라고 전달
            dispatch({type:"change time start", prevTime:currentTime});

            setTimeout(() => {
                // 성공한 경우 정상적인 디스패치
                dispatch(this.changeTime()); 
            }, 2000);
        }
    },
    changeTime () {
        return { type : Constant.CHANGE_TIME };
    }
}

export default TimeActionCreator;