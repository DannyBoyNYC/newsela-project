import React, { useState, useEffect } from 'react';
import Article from './Article';

const Details = props => {
  const [readme, setReadme] = useState('');
  const { org, name } = props;

  useEffect(() => {
    fetch(
      `http://api.github.com/repos/${org}/${name}/readme?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`
    )
      .then(response => response.json())
      .then(readme => setReadme(atob(readme.content)));
  }, []);

  return <Article readme={readme} />;
};

export default Details;
