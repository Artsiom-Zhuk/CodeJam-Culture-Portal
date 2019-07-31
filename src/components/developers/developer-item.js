import React from 'react';

import ImageAvatars from './developer-image';
import "./developers.scss"

export const DeveloperItem = (props) => (
  <>
    <div className="developers-img">
    <ImageAvatars src={props.image} />
    </div>
    <div className="developers-info">
      <h3 className="developers-name">{props.name}</h3>
      <div>
        <span className="github-logo"></span>
        <a className="github-link"
          href={props.github} 
          target="_blank"> 
          {props.githubName}
        </a>
      </div>
    </div>    
  </>
);