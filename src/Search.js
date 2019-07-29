import React, { useState, useEffect, useContext } from 'react';
import GithubContext from './context/github/githubContext';
import { navigate } from '@reach/router';
import Modal from './layout/Modal';
import useDropDown from './hooks/useDropDown';
import Results from './Results';
import Spinner from './layout/Spinner';

const Search = () => {
  const githubContext = useContext(GithubContext);
  const { organizations, sessions, loading } = githubContext;

  const [modal, setModal] = useState(false);
  // const [githubUrl, setGithubUrl] = useState('');

  const [organization, OrgDropdown] = useDropDown('Class', '', organizations);
  const [session, SessionDropdown] = useDropDown('Session', '', sessions);

  useEffect(() => {
    githubContext.fetchOrganizations();
  }, []);

  useEffect(() => {
    organization !== '' && githubContext.fetchSessions(organization);
  }, [organization]);

  const toggleModal = () => {
    setModal(!modal);
  };

  const view = () => navigate(githubUrl);

  if (loading) return <Spinner />;

  return (
    <>
      <div className='searchbox'>
        <form
          onSubmit={e => {
            e.preventDefault();
            toggleModal();
          }}
        >
          <OrgDropdown />
          <SessionDropdown />
          <button disabled={session == []}>View on Github</button>
        </form>
      </div>
      <Results organization={organization} session={session} />
      {modal ? (
        <Modal>
          <h3>This modal would normally take you to the repo on Github.</h3>
          <p>(I dislike modals too.)</p>
          <div className='buttons'>
            <button onClick={toggleModal}>Close</button>
          </div>
        </Modal>
      ) : null}
    </>
  );
};

export default Search;
