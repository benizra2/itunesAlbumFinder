import React, { Component } from 'react';
import { render } from 'react-dom';
import axios from 'axios';
import myStyles from './css/style.css';

// 1. Create a github Repo or Click 'Fork' from the top menu and generate your own JSFiddle link. 
// Be sure to click 'Update' when your work is done.

// 4. When the Search button is clicked, 
//make a call to the API and display the list of albums, 
//including the album name and album cover inside #albums-container in a grid. 
//Use any CSS technique you are comfortable with 
//(Note: The API will return a list of albums based on the search result. 
//Use your skills to find out what the iTunes API data structure looks 
//like and extract the relevant data from it).

class Hello extends React.Component {
  constructor() {
    super();
    this.state = {
      query: '',
      artistName: '',
      artistId: '',
      artistViewUrl: '',
      genre: '',
      albumResults: '',
    };
  }
  render() {
  	const { name } = this.props;
    return (
      <div id="container">
      </div>
    );
  }
}

render(
  <Hello name="World"/>, 
  document.getElementById('albums-container')
);


