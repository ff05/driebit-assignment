import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import './App.css';

const theme = createMuiTheme()

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
