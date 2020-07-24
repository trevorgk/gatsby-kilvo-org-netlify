import React from 'react';
import PropTypes from 'prop-types';
import { kebabCase } from 'lodash';
import { Helmet } from 'react-helmet';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';

export const RecipeTemplate = ({
  content,
  contentComponent,
  tags,
  title,
  blurb,
  featuredimage,
  recipes,
  helmet,
}) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <PageContent content={content} />
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map((tag) => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

RecipeTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
};

const RecipePage = ({ data }) => {
  const { markdownRemark: recipe } = data;

  return (
    <Layout>
      <RecipeTemplate
        content={recipe.html}
        contentComponent={HTMLContent}
        description={recipe.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Recipe">
            <title>{`${recipe.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${recipe.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={recipe.frontmatter.tags}
        title={recipe.frontmatter.title}
        blurb={recipe.frontmatter.blurb}
        featuredImage={recipe.frontmatter.featuredImage}
        recipes={recipe.frontmatter.recipes}
      />
    </Layout>
  );
};

RecipePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default RecipePage;

export const pageQuery = graphql`
  query RecipeByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        blurb
        category
        featuredimage {
          publicURL
        }
        recipes {
          recipeTitle
          recipeDescription
          ingredients
          method
          recipeCssClass
        }
      }
    }
  }
`;
