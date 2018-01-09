import React from 'react'
import Grid from 'material-ui/Grid'

export default function MuiGrid(props) {
  return (
    <Grid container spacing={24}>
      {props.children}
    </Grid>
  )
}