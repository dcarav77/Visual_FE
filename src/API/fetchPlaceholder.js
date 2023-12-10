import React, { Component } from 'react';

// UPDATE FOR HTTPS

class GetRequest extends Component {
  componentDidMount() {
    const apiUrl = 'http://strongallalong.coach/api/'; 
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => console.log('This is your data', data))
      .catch((error) => console.error('Error fetching data:', error));
  }

  render() {
    
  }
}

export default GetRequest;
