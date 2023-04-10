import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const express = require('express');
const PORT = 5001;
const app = express();
const router = express.Router();
app.use(express.json());
router.get('/', (req,res) => {
    res.status(200).json({
        message : "Sample Docker Redis Application"
    });
});
app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
});

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
