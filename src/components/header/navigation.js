import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Translation } from 'react-i18next';
import Button from '@material-ui/core/Button';
import grey from '@material-ui/core/colors/grey';
import Switcher from './../switcher/switcher';
import { Link } from '@wapps/gatsby-plugin-i18next';
import { toMain, toDirectorsList } from '../../pages/constants';


const useStyles = makeStyles(theme => ({
  button: {
    backgroundColor: '#686868',
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

function goToDirectorPage() {
  // to="/selectDirectorPage/selectDirectorPage">{('Select Director Page')
}

export default function Navigation() {
  const classes = useStyles();
  return (
    <Translation>
      {t => (
        <div className='navigation-buttons'>

          <>

            <Link to="/">
              <Button variant="contained" color="grey" className={classes.button}>
                {t(toMain)}
        </Button>
            </Link>

          </>

          <>
            <Link to="/producers">
              <Button variant="contained"
                color="grey"
                className={classes.button}
              >
                {t(toDirectorsList)}
      </Button>
            </Link>
          </>

        </div>
      )}
    </Translation>
  )
}
