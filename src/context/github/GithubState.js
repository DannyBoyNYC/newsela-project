import React, { useReducer } from 'react';

import GithubContext from './githubContext';
import GithubReducer from './githubReducer';

import options, { endpoint } from '../../config/config.js';
import { orgQuery, GET_SESSIONS_BY_ORG } from '../../queries/queries';

import { GET_ORGANIZATIONS, GET_SESSIONS, SET_LOADING } from '../types';

const GithubState = props => {
  const initialState = {
    organizations: [],
    sessions: [],
    loading: false
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // GET_ORGANIZATIONS
  const fetchOrganizations = async () => {
    setLoading();
    const res = await fetch(endpoint, {
      ...options,
      body: JSON.stringify({
        query: orgQuery
      })
    }).then(res => res.json());
    dispatch({
      type: GET_ORGANIZATIONS,
      payload: res.data.user.organizations.edges
    });
  };

  // GET_SESSIONS
  const fetchSessions = async org => {
    setLoading();
    const res = await fetch(endpoint, {
      ...options,
      body: JSON.stringify({ query: GET_SESSIONS_BY_ORG(org) })
    }).then(res => res.json());
    dispatch({
      type: GET_SESSIONS,
      payload: res.data.organization.repositories.edges
    });
  };

  // set loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <GithubContext.Provider
      value={{
        organizations: state.organizations,
        sessions: state.sessions,
        loading: state.loading,
        fetchOrganizations,
        fetchSessions
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
