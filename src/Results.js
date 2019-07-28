import React, { useContext } from 'react';
import GithubContext from './context/github/githubContext';
import { Link } from '@reach/router';

import Spinner from './layout/Spinner';

const Results = props => {
  const githubContext = useContext(GithubContext);
  const { sessions, loading } = githubContext;
  const { organization } = props;

  if (loading) return <Spinner />;

  return (
    <div className='results'>
      {organization == '' ? (
        <h2>Select a class.</h2>
      ) : (
        sessions.map(session => {
          return (
            <ul key={session.node.id}>
              <li>
                <h3>
                  <Link to={`/details/${organization}/${session.node.name}`}>
                    {session.node.name}
                  </Link>
                </h3>
              </li>
              <li>{session.node.description}</li>
            </ul>
          );
        })
      )}
    </div>
  );
};

export default Results;
