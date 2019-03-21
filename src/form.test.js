import React from 'react';
import ReactDOM from 'react-dom';
import FormLogin from './form';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FormLogin />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it('renders with custom style', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FormLogin style={{color:'red'}} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });