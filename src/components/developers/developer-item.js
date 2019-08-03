import React from 'react';
import ImageAvatars from './developer-image';
import PropTypes from 'prop-types';
import "./developers.scss"

export const DeveloperItem = (props) => (
  <div className="d-flex align-self-center">
    <ImageAvatars src={props.image} />
    <div className="developers-info">
      {props.name}
      <div>
        <a className="github-link"
          href={props.github}
          target="_blank"
          rel="noopener noreferrer">
          {props.githubName}
        </a>
      </div>
    </div>
  </div>
);

DeveloperItem.propTypes = {
  githubName: PropTypes.string,
  image: PropTypes.string,
  github: PropTypes.string,
  name: PropTypes.string,
};
