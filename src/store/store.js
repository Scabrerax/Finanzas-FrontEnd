import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import thunk from 'redux-thunk';
import { alertaReducer } from '../reducers/alertaReducer';

import { authReducer } from '../reducers/authReducer'
import { modalMsgReducer } from '../reducers/modalMsgReducer';
import { modalReducer } from '../reducers/modalReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const reducers = combineReducers({
    auth: authReducer,
    modal: modalReducer,
    alerta: alertaReducer,
    modalMsg: modalMsgReducer
})

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )

)

