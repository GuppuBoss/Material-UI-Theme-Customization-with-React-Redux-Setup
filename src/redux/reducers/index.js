import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import counter from './counter';
import { createBrowserHistory } from 'history'
const history = createBrowserHistory();

export default combineReducers({
    router: connectRouter(history),
    counter,
});
