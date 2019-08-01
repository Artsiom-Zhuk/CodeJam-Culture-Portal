import React, { useState } from 'react';
import { graphql } from 'gatsby';
import { Translation } from 'react-i18next';
import { withI18next } from '@wapps/gatsby-plugin-i18next';
import producers from '../data/producers';
import { Link } from '@wapps/gatsby-plugin-i18next';
import Layout from "../components/layout/layout";
import InputField from '../components/input-field/input-field';
import { titlePlaceOfBirth } from './constants';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';

import searchIcons from '../../public/icons/search-icon.png'

import { placeholderForInputSearch } from './constants';

import './producers.scss';

const blockname = 'select-director-page';

const SelectDirectorPage = () => {

  const [value, changeValue] = useState('');

  return (
    <Layout>
      <Container>
        <Translation>
          {t => (
            <>
            <div className={`${blockname}__container-input-field`}>
              <div className={`${blockname}__container-icon`}>
                <img className={`${blockname}__icon`} src={searchIcons} />
              </div>
              <InputField
                placeholder={t(placeholderForInputSearch)}
                extraClass={`${blockname}__input-field`}
                onChange={(e) => changeValue(e.target.value)}
              />
              </div>
              {producers.map((item, index) => {
                return (
                  ((t(item.name)).toLowerCase().includes(value.toLocaleLowerCase()) ||
                    (t(item.placeOfBirth)).toLowerCase().includes(value.toLocaleLowerCase())) &&
                  <>
                    <Card
                      style={{
                        maxWidth: 500,
                        margin: '2% auto',
                        width: '80vw'
                      }}>
                      <CardActionArea style={{ cursor: 'default' }}>
                        <CardMedia
                          style={{
                            height: '70vw',
                            maxHeight: 500,
                            backgroundPosition: 'top',
                            width: 'auto',
                          }}
                          image={item.photoUrl}
                          title="Photo"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2" style={{ fontSize: '1.5rem' }}>
                            {t(item.name)}
                          </Typography>
                          <Typography variant="body2" color="textSecondary" component="p">
                            {t(item.dates)}
                          </Typography>
                          <Typography variant="body2" color="textSecondary" component="p">
                            {`${t(titlePlaceOfBirth)}: ${t(item.placeOfBirth)}`}
                          </Typography>
                        </CardContent>
                        <CardActions>
                          <Button size="small" color="primary">
                            <Link to={`/producer/`} state={{ id: index }} style={{ color: '#000' }}>Show more</Link>
                          </Button>
                        </CardActions>
                      </CardActionArea>
                    </Card>
                  </>
                )
              })}
            </>
          )}
        </Translation>
      </Container>
    </Layout>
  )
};

export default withI18next()(SelectDirectorPage);

export const query = graphql`
query($lng: String!) {
locales: allLocale(filter: { lng: { eq: $lng }, ns: { eq: "messages" } }) {
...LocaleFragment
}
}
`;