import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


    //Lo que aparece luego de app ya no lo considera la app. Si comentamos la parte <app /> en la pagina mostrará HTML puro, porque index.js está conectado con index.HTML en un div con id root. A esta constante le pedimos que tome el elemento root, este index va a renderizar todo lo que esté dentro de la función, en este caso con etiquetas typescript. 
    //Este index se conecta con la app mediante el import
    
    //const root .... <React.StrictMode>
    //<App /> 
    //<p>
    //  Edit <code>src/App.js</code>and save to reload.
    //</p>
  //</React.StrictMode>

 
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
