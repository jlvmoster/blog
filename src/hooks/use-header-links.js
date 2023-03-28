import { graphql, useStaticQuery } from 'gatsby';

const useHeaderLinks = () => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          headerLinks {
            name
            path
          }
        }
      }
    }
  `);

  return site.siteMetadata;
};

export default useHeaderLinks;
