import React, { Component } from 'react'
import { MuiThemeProvider } from 'material-ui/styles'
import createMuiTheme from './assets/styles/theme'
import { withStyles } from 'material-ui/styles'
import classnames from 'classnames'
import { green, white } from './assets/styles/theme'
import Grid from 'material-ui/Grid'
import Card, { CardContent, CardMedia } from 'material-ui/Card'
import Collapse from 'material-ui/transitions/Collapse'
import iconFavo from './assets/icons/ic_favorite_border_white_24dp_1x.png'
import iconMore from './assets/icons/ic_expand_more_white_24dp_2x.png'
import iconComments from './assets/icons/speech-bubbles-comment-option.png'
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
    background: green,
  },
  expand: {
    transform: 'rotate(0deg)'
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  typoHead: {
    color: white,
    paddingTop: 20,
    paddingBottom: 10
  },
  typoBody: {
    color: white,
    fontSize: 30
  },
  typoBody2: {
    fontWeight: 600,
    display: 'flex',
    alignItems: 'center'
  },
  comment: {
    background: green,
    color: white,
    fontSize: 24,
    fontWeight: 600,
    borderRadius: 2,
    marginTop: 10,
    padding: 5
  },
  avatar: {
    borderRadius: '50%',
    width: 40,
    height: 40,
    marginRight: 10
  },
  tooltip: {
    content:'',
    display:'block',
    width:0,
    height:0,
    position: 'absolute',
    borderBottom: '12px solid black',
    borderBottomColor: green,
    borderLeft: '12px solid transparent',
    borderRight: '12px solid transparent',
    left:'50%',
    transform: 'translateX(-50%)',
    top: '-12px'
  },
  commentFooter: {
    marginTop: 20,
    display: 'flex',
    justifyContent: 'space-between'
  }
}

class App extends Component {
  
  state = {     
    expanded: []
  }

  handleExpandClick = (index) => event  => {
    if ( this.state.expanded.includes(index) ) {
      this.setState({
        expanded: this.state.expanded.filter(item => item !== index)
      })
    } else {
      this.setState({ 
        expanded: [
          ...this.state.expanded,
          index
        ]
      })
    }
  }

  generateDate(date) {
    var newDate = new Date(date)
    return (
      date.slice(0,10)
    )
  }

  render() {
    const { classes } = this.props

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
                      <img 
                        className={classnames(classes.expand, {
                          [classes.expandOpen]: this.state.expanded.includes(index),
                        })}
                        onClick={this.handleExpandClick(index)}
                        aria-expanded={this.state.expanded}
                        aria-label="Show more"
                        style={{float: 'right'}} 
                        src={iconMore} alt="iconMore"
                      />
                    </Typography>
                  </CardContent>
                  <Collapse in={this.state.expanded.includes(index)} timeout="auto" unmountOnExit>
                    <CardContent style={{paddingBottom: 5}}>
                      <Typography className={classes.typoBody2} type="body2">
                        <img className={classes.avatar} src={item.author.avatar} alt={item.comments[0].author} />
                        {item.comments[0].author}
                      </Typography>
                      <div style={{position:'relative'}}>
                        <Typography className={classes.comment} type="body1">
                          {item.comments[0].body.slice(0,40)}
                        </Typography>
                        <div className={classes.tooltip}></div>
                      </div>
                      <div className={classes.commentFooter} >
                        <Typography type="body2">
                        { this.generateDate(item.comments[0].post_date) }
                        </Typography>
                        <Typography type="body2">
                          <img style={{height: 16, marginRight: 5}} src={ iconComments } alt="comments icon" />
                          { item.comments.length } reactie
                        </Typography>
                      </div>
                    </CardContent>
                  </Collapse>
                </Card>
              </Grid>
            )
          })}
          </Grid>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default withStyles(styles)(App)
