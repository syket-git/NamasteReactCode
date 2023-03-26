import React from 'react';
import ReactDOM from 'react-dom/client';

const Title = () => {
  return <h1>Syket Bhattachergee</h1>;
};

const Header = () => (
  <div>
    {<Title />}
    <h1>Header</h1>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Header />);
