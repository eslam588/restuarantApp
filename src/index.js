import React,{Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom"
import { Provider } from 'react-redux';
import store from './redux/index'
import "./i18n/config"

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Suspense>
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>      
                    <App />
                </Provider>
            </BrowserRouter>
        </React.StrictMode>
    </Suspense>
);

