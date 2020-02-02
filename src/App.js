import React, { Component } from 'react';
import CarList from './components/CarList';
import './App.css';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';

class App extends Component {
  render() {
    return (
      <div className="App">
       <AppBar position="static">
        <Toolbar>
         
          <Typography variant="h6" color="inherit">
          Carlist 
          </Typography>
        </Toolbar>
      </AppBar>
      <CarList />
      </div>
    );
  }
}

export default App;
