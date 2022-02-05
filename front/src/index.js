import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserStore from "./store/UserStore";
import DeviceStore from "./store/DeviceStore";
import {Provider} from "react-redux";
import {store} from "./redux/store";

export const Context = createContext(null)

ReactDOM.render(
    <Provider store={store}>
        <Context.Provider value={{
            user: new UserStore(),
            device: new DeviceStore(),
        }}>
            <App/>
        </Context.Provider>
    </Provider>,
    document.getElementById('root')
);

