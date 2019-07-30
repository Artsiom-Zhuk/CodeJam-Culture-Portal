import React from 'react';

import "./developers.scss"
import { DeveloperItem } from "./developer-item"
import {developersList} from '../../data/developers-data'

export const Developers = () => (
<div className="team-section">
  <h3>Our Team</h3>
  <p>...that made it possible</p>
  <div className="developers-container">  
    {developersList.map(item => (
      <div className="developers-item">  
        <DeveloperItem 
          name={item.name}
          image={item.photoUrl}
          github={item.github}
          githubName={item.githubName}
        />    
      </div>))}
  </div>
</div>
);
