import React from 'react';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';

const Article = props => {
  const flatten = (text, child) => {
    return typeof child === 'string'
      ? text + child
      : React.Children.toArray(child.props.children).reduce(flatten, text);
  };

  const HeadingRenderer = props => {
    const children = React.Children.toArray(props.children);
    const text = children.reduce(flatten, '');
    const slug = text.toLowerCase().replace(/\W/g, '-');
    return React.createElement('h' + props.level, { id: slug }, props.children);
  };

  return (
    <article>
      <ReactMarkdown
        source={props.readme}
        escapeHtml={false}
        className={'readme'}
        renderers={{ heading: HeadingRenderer }}
      />
    </article>
  );
};

Article.propTypes = {
  readme: PropTypes.string.isRequired
};

export default Article;
