import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Colors } from '../global-styles';

export default function Footer() {

  return (
      <View style={styles.footer}>
      </View>
  )
}

const styles = StyleSheet.create({
    footer: {
      paddingTop: 15,
      paddingLeft: 25,
      paddingRight: 25,
      paddingBottom: 15,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: 'white',
      height: 60,
      width: '100%',
      borderTopColor: 'rgb(237,241,244)',
      borderTopWidth: 1
    },
    footerIcon: {
      fontSize: 22,
    },
    activeIcon: {
      color: '#000'
    },
    inactiveIcon: {
    }
});
