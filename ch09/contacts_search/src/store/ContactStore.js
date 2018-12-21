import {createStore, applyMiddleware } from 'redux';
import ContactReducer from '../reducers/ContactReducer';
import reduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import ContactActionCreator from '../actions/ContactActionCreator';

const Logger = (store) => {
    return (next) => {
        return (action) => {
            if (typeof(action !== 'undefined') && typeof(action !== 'function')) {
                console.log("### action : ", action);
            }
            next(action);
        }
    }
}

const composeEnhancers = composeWithDevTools(ContactActionCreator);

const ContactStore = createStore(ContactReducer, composeEnhancers(
    applyMiddleware(Logger, reduxThunk)
));

export default ContactStore;