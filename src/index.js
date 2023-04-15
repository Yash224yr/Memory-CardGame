import React, { Profiler } from 'react';
import ReactDOM from 'react-dom/client';
import Card from './CardGame/Card';
import Memory from './CardGame/Memory';
// import App from './Ecommerce/App';
// import Quiz from './Quiz/Quiz';
// import Home from './MobCompare/Home';
// import Routing from './ContextApi/Routing';
// import Movies from './MoviesWeb/Movies';
// import Routing from './Routing/routing';
// import Cart from './Cart/cart';
// import Axios from './Axios/Axios';
// import {Todo} from "./To-do/Todo"
// import Tesla from "./Tesla/Tesla"
// import Tabs from "./button/tabs"
// import App from './Redux-Counter/App';
// import Store from './Redux-Counter/Store';
// import App from './To-Do-Redux/App';
// import Store from './To-Do-Redux/Store'
// import { Provider } from 'react-redux';





const root = ReactDOM.createRoot(document.getElementById('root'))


root.render(
   // <Todo/>                                   
   // <Tesla/>
   // <Axios/>
   // <Tabs/>
   // <Cart/>
   // <Routing/>
   // <Movies/>
   // <Routing/>
   // <Home/>
   // <Quiz/>
   // <Provider store={Store}>
   //    {/* <App /> */}
   //    <App/>
   // </Provider>
   // <App></App>
   <Memory/>
);




