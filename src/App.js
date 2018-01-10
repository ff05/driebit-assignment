import React from 'react'
import { MuiThemeProvider } from 'material-ui/styles'
import theme from './assets/styles/theme'
import { withStyles } from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card'
import IconButton from 'material-ui/IconButton'
import FavoriteIcon from 'material-design-icons/Favorite'
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
  typo: {
    color: '#ffffff',
    paddingTop: 20,
    paddingBottom: 10
  }
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
              <Card>
                <CardMedia
                  className={classes.media}
                  image={item.background}
                  title={item.title}
                />
                <CardContent className={classes.content}>
                  <Typography className={classes.typo} type="title">
                    {item.type}
                  </Typography>
                  <Typography className={classes.typo} type="display2">
                    {item.title}
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
