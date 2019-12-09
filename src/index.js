import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
// import App from '@/pages/App';
import FaceCheck from '@/pages/FaceCheck';
import * as serviceWorker from './serviceWorker';

// 增加cordova文件
// if (window.location.protocol === 'file:') {
//   const cordovaScript = document.createElement('script');
//   cordovaScript.setAttribute('type', 'text/javascript');
//   cordovaScript.setAttribute('src', 'cordova.js');
//   document.body.appendChild(cordovaScript);
// }

document.addEventListener('deviceready', () => {
  ReactDOM.render(<FaceCheck />, document.getElementById('root'));
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
