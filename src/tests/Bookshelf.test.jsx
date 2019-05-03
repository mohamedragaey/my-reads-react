import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import Bookshelf from '../Components/Bookshelf/BookShelf';

it('Bookshelf renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><Bookshelf /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});