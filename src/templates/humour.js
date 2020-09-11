import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Content, { HTMLContent } from '../components/Content';
import HumourAside from '../components/HumourAside';
import Layout from '../components/Layout';

export const HumourPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="section section--gradient">
      <div className="container content">
        <div className="columns">
          <div className="column is-three-quarters">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <PageContent className="content" content={content} />
            </div>
            <Link to="/humour">Back to humour &hellip;</Link>
          </div>

          <div className="column">
            <HumourAside />
          </div>
        </div>
      </div>
    </section>
  );
};

HumourPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const HumourPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <HumourPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

HumourPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default HumourPage;

export const humourPageQuery = graphql`
  query HumourByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
      }
    }
  }
`;
