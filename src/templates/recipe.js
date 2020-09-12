import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import { MarkdownContent } from '../components/Content';
import RecipesAside from '../components/RecipesAside';

export const RecipeTemplate = ({ title, blurb, recipes, helmet }) => (
  <section className="section">
    {helmet || ''}
    <div className="container content">
      <div className="columns">
        <div className="column is-three-quarters">
          <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
            {title}
          </h1>
          <p className="blurb">{MarkdownContent({ content: blurb })}</p>
          {recipes.map(({ ingredients, method, recipeTitle }) => (
            <>
              <h2>{recipeTitle}</h2>
              <ul>
                {ingredients.map((ingredient) => (
                  <li key={ingredient}>{ingredient}</li>
                ))}
              </ul>
              <div>{MarkdownContent({ content: method })}</div>
            </>
          ))}
          <Link to="/recipes">Back to Food &amp; Recipes &hellip;</Link>
        </div>
        <div className="column">
          <RecipesAside />
        </div>
      </div>
    </div>
  </section>
);

RecipeTemplate.propTypes = {
  content: PropTypes.node.isRequired,
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
