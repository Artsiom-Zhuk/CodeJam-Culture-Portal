import React from 'react';
import { Translation } from 'react-i18next';

import "./developers.scss"
import { DeveloperItem } from "./developer-item"
import {developersList} from '../../data/developers-data';

const title = "Наша команда";
const description = "...которая сделала это возможным";

export const Developers = () => (
  <div className="team-section">
  <Translation>
    {t => (
      <>
        <h3 className="team-title">{t(title)}</h3>
        <p className="team-description">{t(description)}</p>
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
      </>
    )}
  </Translation>
  </div>
);
