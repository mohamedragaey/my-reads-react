import React from 'react';
import ReactDOM from 'react-dom';
import BookGroup from '../Components/BookGroup/BookGroup';

it('BookGroup renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BookGroup />, div);
  ReactDOM.unmountComponentAtNode(div);
});