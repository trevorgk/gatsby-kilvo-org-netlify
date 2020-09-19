import React from 'react';
import { Helmet } from 'react-helmet';

import Layout from '../../components/Layout';
import RecipesAside from '../../components/RecipesAside';

export default class RecipeIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet titleTemplate="%s | Grant Kilvington's Website">
          <title>Food and Recipes</title>
          <meta
            name="description"
            content="I have a keen interest in food, as testified to by my girth. Many of these recipes come from Barbara Sonand, who was my mother-in-law and a really wonderful cook and person."
          />
        </Helmet>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/recipes-index.jpg')`,
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
              backgroundColor: '#f40',
              color: 'white',
              padding: '1rem',
            }}
          >
            Recipes
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <div className="columns">
                <div className="column is-three-quarters">
                  <p>
                    I have a keen interest in food, as testified to by my girth.
                    Beware of skinny coooks! This was an unintentional typo but
                    it seemed right to leave it.
                  </p>
                  <p>
                    Actually I'm surrounded by people who like preparing and
                    eating yummy food, and feel sorry for those who eat as a
                    form of fuel stop only.
                  </p>
                  <p>
                    Many of these recipes come from Barbara Sonand, who was my
                    mother-in-law and a really wonderful cook and person. One of
                    the motivations for building a web site (apart from sussing
                    out how to do it) was to record for posterity some of her
                    recipes. And I'm sick of scrap pieces of paper! There will
                    more of her recipes when I sort my filing system out.
                  </p>
                </div>
                <div className="column">
                  <RecipesAside />
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
