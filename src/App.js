import React from 'react';
import ReactDOM from 'react-dom';
import { Link, Router } from '@reach/router';

import Details from './Details';

import Search from './Search';

const App = () => {
  return (
    <React.StrictMode>
      <div>
        <header>
          <Link className='logo' to='/'>
            Courses
          </Link>
          <Link to='/'>Home</Link>
        </header>
        <Router>
          <Search path='/' />
          <Details path='/details/:org/:name' />
        </Router>
      </div>
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
