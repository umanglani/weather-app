import * as React from 'react';
import { View, StyleSheet, Animated, Easing } from 'react-native';
import { Feather } from '@expo/vector-icons';
// import Animated, { useAnimatedStyle, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated';
import { useEffect } from 'react';
import { useState } from 'react';
import { SafeAreaView, Image } from 'react-native';
import { globalStyles } from '../global-styles';


const LoadingIcon = () => {

    return (
      <View accessibilityRole='progressbar' style={[styles.loadingContainer, globalStyles.flex1, globalStyles.flexCenter, globalStyles.vCenter]}>
        <SafeAreaView>
            <Image style={[styles.img]} source={require('../../assets/loader.gif')}/>
        </SafeAreaView>
      </View>
  )
};

export default LoadingIcon;

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1
    },
    img: {
        width: 150,
        height: 150
    }
});
