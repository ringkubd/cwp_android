import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {theme} from '../utils/theme';

const Header = ({children}: Props) => (
  <Text style={styles.header}>{children}</Text>
);

const styles = StyleSheet.create({
  header: {
    fontSize: 18,
    color: theme.colors.primary,
    fontWeight: 'bold',
    paddingVertical: 14,
  },
});

export default Header;
