import Constant from './Constant';
import AppDispatcher from './AppDispatcher';

const ItemActions = {
    addItem (itemName) {
        if (itemName.length >= 2) {
            let id = new Date().getTime();
            AppDispatcher.dispatch({
                type : Constant.ADD_ITEM, 
                payload : { id, itemName} // ES6 문법, 키와 값을 가리키는 변수가 같으면 명만 입력
            });
        }
    },
    deleteItem (id) {
        AppDispatcher.dispatch({
            type : Constant.DELETE_ITEM,
            payload : { id }
        });
    },
    changeName (itemName) {
        AppDispatcher.dispatch({
            type : Constant.CHANGE_NAME,
            payload : { itemName }
        });
    }
}

export default ItemActions;