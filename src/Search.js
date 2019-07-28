import React, { useEffect, useContext } from 'react';
import GithubContext from './context/github/githubContext';

import useDropDown from './hooks/useDropDown';
import Results from './Results';
import Spinner from './layout/Spinner';

const Search = () => {
  const githubContext = useContext(GithubContext);
  const { organizations, sessions, loading } = githubContext;

  const [organization, OrgDropdown] = useDropDown('Class', '', organizations);
  const [session, SessionDropdown] = useDropDown('Session', '', sessions);

  useEffect(() => {
    githubContext.fetchOrganizations();
  }, []);

  useEffect(() => {
    organization !== '' && githubContext.fetchSessions(organization);
  }, [organization]);

  if (loading) return <Spinner />;

  return (
    <>
      <div className='searchbox'>
        <form
          onSubmit={e => {
            e.preventDefault();
            // functionTBD();
          }}
        >
          <OrgDropdown />
          <SessionDropdown />
          <button>View on Github</button>
        </form>
      </div>
      <Results organization={organization} session={session} />
    </>
  );
};

export default Search;
