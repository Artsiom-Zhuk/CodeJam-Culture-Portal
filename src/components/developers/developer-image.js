import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles({
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    margin: "0.5rem",
    width: "5rem",
    height: "5rem",
  },
});

export default function ImageAvatars(props) {
  const classes = useStyles();
  return (    
    <Avatar alt="faf" src={props.src} className={classes.bigAvatar} />
  );
}