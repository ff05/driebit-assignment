import React from 'react'
import { MuiThemeProvider } from 'material-ui/styles'
import createMuiTheme from './assets/styles/theme'
import { withStyles } from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card'
import Collapse from 'material-ui/transitions/Collapse'
import Icon from 'material-ui/Icon'
import iconFavo from './assets/icons/ic_favorite_border_white_24dp_1x.png'
import iconMore from './assets/icons/ic_expand_more_white_24dp_2x.png'
import Typography from 'material-ui/Typography'
import { data } from './data/listdata'
import './App.css'

const styles = {
  root: {
    marginTop: 30
  },
  grid: {
    maxWidth: 1200,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  media: {
    height: 200,
  },
  content: {
    background: '#505450',
    
  },
  typoHead: {
    color: '#ffffff',
    paddingTop: 20,
    paddingBottom: 10
  },
  typoBody: {
    color: '#ffffff',
    fontSize: 30
  }
}

function App(props) {
  const { classes } = props
  return (
    <MuiThemeProvider theme={createMuiTheme}>
      <div className={classes.root}>
        <Grid 
          className={classes.grid} 
          container 
          spacing={40}
        >
        {data.map((item, index) => {
          return (
            <Grid key={index} item xs={12} sm={4}>
              <Card>
                <CardMedia
                  className={classes.media}
                  image={item.background}
                  title={item.title}
                />
                <CardContent className={classes.content}>
                  <Typography className={classes.typoHead} type="title">
                    {item.type}
                  </Typography>
                  <Typography className={classes.typoHead} type="display2">
                    {item.title}
                  </Typography>
                  <Typography className={classes.typoBody} type="body1">
                    <img style={{marginRight: 10}} src={iconFavo} alt="iconFavo"/>
                    {item.likes}
                    <img style={{float: 'right'}} src={iconMore} alt="iconMore"/>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          )
        })}
        </Grid>
      </div>
    </MuiThemeProvider>
  )
}

export default withStyles(styles)(App)
