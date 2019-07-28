export const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    authorization: `Bearer ${process.env.NON_MUTATING}`
  }
};

export const endpoint = `https://api.github.com/graphql`;

export const readmeEndpoint = `http://api.github.com/repos/front-end-summer19/ExpressJS/readme`;

// .then(res => console.log(res.data.user.organizations.edges[0]));

// .then(res => console.log(res.data.organization.repositories.edges));

{
  /* <pre>
          <code>{JSON.stringify(props, null, 2)}</code>
        </pre> */
}

export default options;
