export const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    authorization: `Bearer ${process.env.NON_MUTATING}`
  }
};

export const endpoint = `https://api.github.com/graphql`;

export const readmeEndpoint = `http://api.github.com/repos/front-end-summer19/ExpressJS/readme`;

export default options;
