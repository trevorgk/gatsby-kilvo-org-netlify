import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery } from 'gatsby';

const HumourAside = ({ data }) => {
  const { edges: pages } = data.allMarkdownRemark;
  if (!pages) {
    return;
  }

  return (
    <aside>
      <nav>
        <div className="content">
          <ul>
            <li>
              <Link to="/humour">Main page</Link>
            </li>
            {pages
              .map(({ node: page }) => ({
                id: page.id,
                slug: page.fields.slug,
                title: page.frontmatter.title,
              }))
              .map(({ id, slug, title }) => (
                <li key={id}>
                  <Link to={slug}>{title}</Link>
                </li>
              ))}
          </ul>
        </div>
      </nav>
    </aside>
  );
};

HumourAside.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query HumourAsideQuery {
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "humour" } } }
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `}
    render={(data) => <HumourAside data={data} />}
  />
);
