import { StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';
import { DarkColors, globalStyles, LightColors } from '../global-styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { isEnabled } from 'react-native/Libraries/Performance/Systrace';
import { GetThemeForeColor, GetThemeForeColorClass } from './common';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../reducers/appthemeSlice';

const Header = props => {

  const dispatch = useDispatch();
  const { isDarkMode } = useSelector(state => state.appTheme);

  const switchTheme = () => {
    dispatch(toggleTheme());
  }

  return (
    <View style={[styles.container, globalStyles.fullWidth, globalStyles.flexRow, globalStyles.flex1]}>

      <View style={[globalStyles.flex1]}>
        <MaterialCommunityIcons name="menu" size={21}
          color={GetThemeForeColor(isDarkMode)} />
      </View>
      <View style={[globalStyles.flex4, globalStyles.textCenter]}>
        <Text style={[globalStyles.mediumTitle, GetThemeForeColorClass(isDarkMode)]}>Weather App</Text>
      </View>
      <View style={[globalStyles.flex1, globalStyles.vEnd]}>
        <Switch
          trackColor={{true: LightColors.GrdientColor1, false: LightColors.GrdientColor2}}
          thumbColor={isEnabled ? DarkColors.GrdientColor2 : DarkColors.GrdientColor1}
          ios_backgroundColor='#3e3e3e'
          value={isDarkMode}
          onValueChange={switchTheme}>
          </Switch>
      </View>
      
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 25,
    paddingLeft: 25,
    paddingRight: 25,
  },
});
