import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import BooksApp from './App';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';


// loads the Icon plugin
UIkit.use(Icons);

ReactDOM.render(<BrowserRouter><BooksApp /></BrowserRouter>, document.getElementById('root'));
