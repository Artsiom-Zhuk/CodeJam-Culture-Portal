import React from 'react';
import "./developers.css"
import ImageAvatars from './developer-image';

export const Developeritem = (props) => (
  <>
    <div className="developers-img">
    <ImageAvatars src={props.image} />
    </div>
    <div className="developers-info">
      <h3>{props.name}</h3>
      <div>
        <span className="github-logo"></span>
        <a 
          href={props.github} 
          target="_blank">: 
          {props.githubName}
        </a>
      </div>
    </div>    
  </>
);