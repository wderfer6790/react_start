import { Dispatcher } from "flux";

export default new Dispatcher(); 

/* 
디스패처를 재정의 해서 로깅기능 추가
import { Dispatcher } from 'flux';
import Constant from './Constant';

//export default new Dispatcher();

class AppDispatcher extends Dispatcher {
    dispatch(action) {
        super.dispatch(action);
        if (action.type !== Constant.CHANGE_NAME) {
            console.log(`## dispatch : ${action.type}, ${JSON.stringify(action.payload)}`)
        }
    }
}
export default new AppDispatcher(); 
*/