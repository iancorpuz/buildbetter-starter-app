import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthenticatedScreens, PublicScreens } from './navigation';

class AuthenticatedNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      initializing: true,
      authenticated: false,
    };
  }

  render() {
    const { authenticated } = this.state;

    return (
      <NavigationContainer>
        {authenticated ? <AuthenticatedScreens /> : <PublicScreens />}
      </NavigationContainer>
    );
  }
}

export default AuthenticatedNav;
