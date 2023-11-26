import React, { Component } from 'react';


class GetRequest extends Component {
  componentDidMount() {
    const apiUrl = 'http://strongallalong.coach/api/'; //changed 'https://jsonplaceholder.typicode.com/posts'
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => console.log('This is your data', data))
      .catch((error) => console.error('Error fetching data:', error));
  }

  render() {
    
  }
}

export default GetRequest;
