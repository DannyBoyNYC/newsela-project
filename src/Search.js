import React, { useState, useEffect } from 'react';

import useDropDown from './useDropDown';
import Results from './Results';
import { orgQuery, getSessionsByOrg } from './queries/queries';
import options, { endpoint } from './config/config.js';

const Search = () => {
  const [organizations, setOrganizations] = useState([]);
  const [sessions, setSessions] = useState([]);
  const [organization, OrgDropdown] = useDropDown('Class', '', organizations);
  const [session, SessionDropdown] = useDropDown('Session', '', sessions);

  const fetchOrganizations = async () => {
    const response = await fetch(endpoint, {
      ...options,
      body: JSON.stringify({ query: orgQuery })
    });
    response
      .json()
      .then(response =>
        setOrganizations(response.data.user.organizations.edges)
      );
  };

  const fetchSessions = async () => {
    const response = await fetch(endpoint, {
      ...options,
      body: JSON.stringify({ query: getSessionsByOrg(organization) })
    });
    response
      .json()
      .then(response =>
        setSessions(response.data.organization.repositories.edges)
      );
  };

  useEffect(() => {
    setOrganizations([]);
    fetchOrganizations();
  }, []);

  useEffect(() => {
    setSessions([]);
    fetchSessions();
  }, [organization, session, setOrganizations, setSessions]);

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
          <button disabled={session == []}>Submit</button>
        </form>
      </div>
      <Results organization={organization} sessions={sessions} sesh={session} />
    </>
  );
};

export default Search;
