import React from 'react'
import Paper from 'material-ui/Paper'

export default function MuiPaper(props) {
  return (
    <div className="MuiPaper">
      <Paper>
        {props.children}
      </Paper>
    </div>
  )
}