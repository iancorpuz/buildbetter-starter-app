import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Text } from 'native-base';

import { COLORS } from '../../themes/default';

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: COLORS.backgroundColor,
  },
});

const LandingScreen = () => (
  <Container style={styles.mainContainer}>
    <Text>Hello, World!</Text>
  </Container>
);

export default LandingScreen;
