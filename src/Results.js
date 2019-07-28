import React from 'react';
import { Link } from '@reach/router';

const Results = ({ organization, sessions, sesh }) => {
  console.log('sesh', sesh);
  if (sesh == '' && !sessions.length) {
    return (
      <div className='results'>
        <h2>Select a class and session</h2>
      </div>
    );
  }

  return (
    <div className='results'>
      <pre>
        <code>{JSON.stringify(sesh, null, 2)}</code>
      </pre>
      {!sessions.length ? (
        <h2>Select a class and session.</h2>
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
