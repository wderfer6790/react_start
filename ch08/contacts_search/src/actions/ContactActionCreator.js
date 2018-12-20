import Constant from "../Constant";
import axios from 'axios';

const BASEURL = "";

const ContactActionCreator = {
    changeName(name) {
        return { type: Constant.CHANGE_NAME, payload: { name } }
    },
    changeShowAddContact(isShow) {
        return { type: Constant.CHANGE_SHOW_ADD_CONTACT, payload: { showAddContact : isShow } }
    },
    changeIsLoading(isLoading) {
        return { type: Constant.CHANGE_ISLOADING, payload: { isLoading } }
    },
    searchContactRequest(name) {
        return {type : Constant.SEARCH_REQUEST, payload : { name }};
    },
    searchContactSuccess(contacts) {
        return {type : Constant.SEARCH_SUCCESS, payload : {contacts}};
    },
    searchContactFail() {
        return {type : Constant.SEARCH_FAIL};
    },
    asyncSearchContact() {
        return (dispatch, getState) => {
            let { name } = getState();

            dispatch(this.changeName(name));
            dispatch(this.changeIsLoading(true));

            axios
                .get(BASEURL + "contacts_long/search/" + name)
                .then((response) => {
                    dispatch(this.searchContactSuccess(response.data));
                })
                .catch((error) => {
                    dispatch(this.searchContactFail());
                });
        }
    },
    asyncAddContact(name, tel, address) {
        return (dispatch, getState) => {
            dispatch(this.changeName(name));
            dispatch(this.changeIsLoading(true));

            axios
                .post(BASEURL + "/contacts", {name, tel, address})
                .then((response) => {
                    dispatch(this.changeShowAddContact(false));
                    dispatch(this.changeIsLoading(false));

                    if (response.data.status === "success") {
                        dispatch(this.asyncSearchContact());
                    }
                })
                .catch((error) => {
                    dispatch(this.changeIsLoading(false));
                });
        }
    },
    asyncDeleteContact(no) {
        return (dispatch)=> {
            dispatch(this.changeIsLoading(true));
            axios
                .delete(BASEURL+'/contacts/'+no)
                .then((response)=> {
                    dispatch(this.changeIsLoading(false));
                    dispatch(this.asyncSearchContact());
                })
                .catch((error)=> {
                    dispatch(this.changeIsLoading(false));
                });    
        }
    }
};

export default ContactActionCreator;