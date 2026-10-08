import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';

import {C} from '../constants/theme';

type Props = {children: React.ReactNode};

export function AppShell({children}: Props) {
  return (
    <View style={styles.root}>
      <StatusBar
        barStyle="light-content"
        translucent={true}
        backgroundColor="transparent"
      />
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: C.bgDeep,
  },
});

export default AppShell;
