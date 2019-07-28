import React from 'react';
import ReactDOM from 'react-dom';
import { Link, Router } from '@reach/router';
import GithubState from './context/github/GithubState';

import Details from './Details';
import Search from './Search';

const App = () => {
  return (
    <React.StrictMode>
      <GithubState>
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
      </GithubState>
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
