import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from '@reach/router';

import Search from './Search';

const App = () => {
  return (
    <div>
      <header>
        <Link to='/'>Courses</Link>
      </header>
      <Search path='/' />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
