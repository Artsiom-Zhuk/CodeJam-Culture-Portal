import React from 'react';
import { Link } from "gatsby";
import ImageAvatars from './developer-image';
import "./developers.scss"

export const DeveloperItem = (props) => (
  <div className="d-flex align-self-center">
    <ImageAvatars src={props.image} />
    <div className="developers-info">
      {props.name}
      <div>
        <a className="github-link"
          href={props.github} 
          target="_blank"> 
          {props.githubName}
        </a>
      </div>
    </div>    
  </div>
);