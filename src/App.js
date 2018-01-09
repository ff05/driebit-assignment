import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import { data } from './data/listdata'
import './App.css';

const theme = createMuiTheme()

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
}

function App(props) {
  const { classes } = props
  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <Grid 
          className={classes.grid} 
          container 
          spacing={40}
        >
        {data.map((item, index) => {
          return (
            <Grid key={index} item xs={12} sm={4}>
              <Card key={index}>
              <CardMedia
                className={classes.media}
                image={item.background}
                title={item.title}
              />
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
