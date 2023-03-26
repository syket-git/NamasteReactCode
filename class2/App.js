import React from 'react';
import ReactDOM from 'react-dom/client';

const spDiv = React.createElement(
  'div',
  { className: 'super_parent' },
  React.createElement(
    'div',
    { className: 'immediate_parent' },
    React.createElement(
      'h1',
      { className: 'title' },
      React.createElement('p', {}, 'Syket Bhattachergee')
    )
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(spDiv);
