import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/all.css';
import App from './components/app/app';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// creating element
// const elem1 = <h2>Hello world</h2>
// const elem2 = React.createElement('h2', {className: 'green'}, "Hello worlds")
// const str = "Hello saepal"
// const elem_big = (
//     <div>
//         <h2>Hello {str}</h2>
//         <input type="text"/>
//         <button className={'Hello'}>Submit</button>
//     </div>
// )
// root.render(elem_big)
//
