import React from 'react';

import "./developers.css"
import { Developeritem } from "./developer-item"
import {developersList} from '../../data/developers-data'

export const Developers = () => (

<div className="developers-container">
  <div>Title</div>
  {developersList.map(item => (
  <div className="developers-item">  
    <Developeritem 
      name={item.name}
      image={item.photoUrl}
      github={item.github}
      githubName={item.githubName}

    />    
  </div>))}
</div>
);
