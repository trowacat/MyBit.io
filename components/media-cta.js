import React from 'react';
import PropTypes from 'prop-types';
import stylesheet from './media-cta.scss';

export const MediaCTA = ({ title, content, button }) => (
  <article key={title} className="MediaCTA__card">
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    <h2 className="MediaCTA__card-title">{title}</h2>
    <div dangerouslySetInnerHTML={{ __html: content }} />
    {button}
  </article>
)

MediaCTA.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  button: PropTypes.arrayOf(PropTypes.element)
}

MediaCTA.defaultProps = [];