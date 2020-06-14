import React from 'react';

import Layout from '../../components/Layout';

export default class RecipeIndexPage extends React.Component {
  render() {
    return (
      <Layout>
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
            Top Recipes
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <p>
                I have a keen interest in food, as testified to by my girth.
                Beware of skinny coooks! This was an unintentional typo but it
                seemed right to leave it.
              </p>

              <p>
                Actually I'm surrounded by people who like preparing and eating
                yummy food, and feel sorry for those who eat as a form of fuel
                stop only.
              </p>

              <p>
                I am in the process of tidying up this site — it's been a cobweb
                for a long time!.
              </p>

              <p>
                To start with the individual recipes will have their own file —
                what this means is that when you want to print it out you get
                what you want and not a large file with lots of recipes! This
                also makes the use of a printer-friendly version of the
                cascading style sheet work sensibly - you get black ink on a
                white background and not much else - which is what you want I
                hope.
              </p>

              <p>
                Try the Spanakopita link to see what I mean, and try the File |
                Print Preview on your browser Press Close to return to normal
                browsing). Then the back button on your browser (or the left
                mouse button) can get you back to this page.
              </p>

              <p>
                Many of these recipes come from Barbara Sonand, who was my
                mother-in-law and a really wonderful cook and person. One of the
                motivations for building a web site (apart from sussing out how
                to do it) was to record for posterity some of her recipes. And
                I'm sick of scrap pieces of paper! There will more of her
                recipes when I sort my filing system out.
              </p>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
