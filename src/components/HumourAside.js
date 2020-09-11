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

            <li>
              <a
                href="http://www.physlink.com/Fun/IsThereSanta.cfm"
                target="_blank"
              >
                Is there a Santa Claus?
              </a>
            </li>
            <li>
              <a href="http://www.childfree.net/potpourri_prep.html">
                Preparation for Parenthood
              </a>
            </li>
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
