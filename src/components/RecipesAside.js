import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery } from 'gatsby';
import _ from 'lodash';

const RecipesAside = ({ data }) => {
  const { edges: recipes } = data.allMarkdownRemark;
  if (!recipes) {
    return;
  }
  const grouped = _.groupBy(
    recipes.map(({ node: recipe }) => ({
      id: recipe.id,
      slug: recipe.fields.slug,
      category: recipe.frontmatter.category,
      title: recipe.frontmatter.title,
    })),
    'category',
  );

  return (
    <aside>
      <nav>
        {_.keys(grouped).map((category) => (
          <React.Fragment key={category}>
            <header>{category}</header>
            <div className="content">
              <ul>
                {grouped[category].map(({ id, slug, title }) => (
                  <li key={id}>
                    <Link to={slug}>{title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </React.Fragment>
        ))}
      </nav>
    </aside>
  );
};

RecipesAside.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query RecipesAsideQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "recipe" } } }
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
    render={(data) => <RecipesAside data={data} />}
  />
);
