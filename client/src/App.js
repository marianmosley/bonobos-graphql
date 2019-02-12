import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
// combines several packages we need
import { ApolloProvider } from 'react-apollo';
// wraps our app and injects the apolloclient info

import SongList from './SongList';

// apollo client setup

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
  // tell apollo the graphql endpoint
}) 

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div>
          <h1>Marc's Song List</h1>      
          <SongList />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;