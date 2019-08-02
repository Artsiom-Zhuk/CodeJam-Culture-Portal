import React from 'react';
import { Translation } from 'react-i18next';

import "./developers.scss"
import { DeveloperItem } from "./developer-item"
import {developersList} from '../../data/developers-data';

const title = "Наша команда";
const description = "...которая сделала это возможным";

export const Developers = () => (
  
  <Translation>
    {t => (
      <section className="developers">
        <div class="card">
          <div class="card-header">
            <h2>{t('Разработчики')}</h2>
          </div>
          <div class="card-body">
            <div className="row justify-content-center">  
            {developersList.map(item => (
              <div className=" col-md-4">  
                <DeveloperItem 
                  name={item.name}
                  image={item.photoUrl}
                  github={item.github}
                  githubName={item.githubName}
                />    
              </div>))}
           </div>
          </div>
        </div>
      </section>
    )}
  </Translation>
);
