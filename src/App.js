import React, { Component } from 'react';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import AppBody from './components/AppBody';

class App extends Component {
  render() {
    return (
      <div>
        <AppHeader />
        <AppBody />
        <AppFooter />
      </div>
    );
  }
}
export default App;
