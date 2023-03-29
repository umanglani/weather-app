import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { DarkColors, globalStyles, LightColors } from '../global-styles';
import Header from '../common/header';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { useSelector } from 'react-redux';
import CityCard from '../common/citycard';
import { GetThemeForeColor, GetThemeForeColorClass } from '../common/common';

const Home = (props) => {

  const { isDarkMode } = useSelector(state => state.appTheme);

  const [colors, setColors] = useState([LightColors.GrdientColor1, LightColors.GrdientColor2]);

    useEffect(() => {
        if (isDarkMode) {
            setColors([DarkColors.GrdientColor1, DarkColors.GrdientColor2]);
        } else {
            setColors([LightColors.GrdientColor1, LightColors.GrdientColor2]);
        }
    }, [isDarkMode]);

  return (
    <View style={[styles.container, {color: isDarkMode ? DarkColors.AppForeColor : LightColors.AppForeColor}]}>
      <LinearGradient
        colors={colors}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={styles.box}>

        <Header/>

        <View style={[globalStyles.flex6]}>
            
            {/* today's date and time */}
            {/* <View style={[globalStyles.fullWidth, globalStyles.flexCenter]}>
                <Text style={[globalStyles.regularTitle, GetThemeForeColorClass(isDarkMode)]}>{ dayjs().format('DD MMM YYYY') }</Text>
            </View> */}

            <CityCard city='Paris'/>
            
        </View>

      </LinearGradient>

    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: '100%',
    height: '100%',
    flex: 1
  }
});
