import React from 'react';
import ReactDOM from 'react-dom';
import Shelf from '../Components/Shelf/Shelf';

it('Shelf renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Shelf />, div);
  ReactDOM.unmountComponentAtNode(div);
});