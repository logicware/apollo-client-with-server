import React, { Component } from 'react';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import logo from './logo.svg';
import './App.css';
import ChannelsList from './components/ChannelList';

const client = new ApolloClient({
  link: new HttpLink(),
  cache: new InMemoryCache()
});


class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to Apollo</h2>
          </div>
          <ChannelsList />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
