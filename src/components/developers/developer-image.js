import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';

export default function ImageAvatars(props) {
  return (
    <Avatar alt="faf" src={props.src} />
  );
}

ImageAvatars.propTypes = {
  src: PropTypes.string,
};
