import React from 'react';
import PropTypes from 'prop-types';
import remark from 'remark';
import remarkHtml from 'remark-html';

export const MarkdownContent = ({ content, className }) => {
  const html = remark().use(remarkHtml).processSync(content).toString();
  return (
    <div className={className} dangerouslySetInnerHTML={{ __html: html }} />
  );
};

export const HTMLContent = ({ content, className }) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
);

const Content = ({ content, className }) => (
  <div className={className}>{content}</div>
);

Content.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string,
};

HTMLContent.propTypes = Content.propTypes;

export default Content;
