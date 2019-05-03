import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from '../Components/SearchBar/SearchBar';

it('SearchBar renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SearchBar />, div);
  ReactDOM.unmountComponentAtNode(div);
});