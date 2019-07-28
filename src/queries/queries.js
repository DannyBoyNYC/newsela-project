export const orgQuery = `
query {
  user(login: "DannyBoyNYC") {
    organizations(last: 3) {
      totalCount
      edges {
        node {
          id
          login
        }
      }
    }
  }
}
`;

export const sessionQuery = `
{
  organization(login: "front-end-summer19") {
    name
    repositories(last:6) {
      edges {
        node {
          url
          updatedAt
          resourcePath
          description
          descriptionHTML
          id
          homepageUrl
        	name
        }
      }
    }
  }
}
`;

export const getSessionsByOrg = organization => `
{
  organization(login: "${organization}") {
    name
    repositories(last:12) {
      edges {
        node {
          url
          updatedAt
          resourcePath
          description
          descriptionHTML
          id
          homepageUrl
        	name
        }
      }
    }
  }
}
`;
