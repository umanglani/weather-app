import { Dimensions, StyleSheet, Switch, Text, TouchableOpacity, View, ImageBackground } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { useSelector } from 'react-redux';
import { Colors, DarkColors, globalStyles, LightColors } from '../global-styles';
import { GetCardinalDirection, GetCityBackground } from './common';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const width = Dimensions.get('window').width - 50;
const height = Dimensions.get('window').height;


const renderCity = (item) => {
  const backgroundImage = GetCityBackground();
  return (
    <View style={[styles.cityBox]}>
      <ImageBackground source={backgroundImage} resizeMode='cover' imageStyle={{opacity: 0.2}} style={[globalStyles.flexCenter, {width: width, height: '100%'}]}>
        
        <Text style={[globalStyles.lightBig, globalStyles.textCenter, globalStyles.uppercase, styles.cityName]}>
          {item.item.cityName}
        </Text>

        <Text style={[styles.tempreature, globalStyles.flexCenter]}>
          {item.item.currentTempreature}
          <MaterialCommunityIcons name="temperature-celsius" size={30} color="black" />
        </Text>

        <View style={[globalStyles.flex1, globalStyles.fullWidth, globalStyles.flexRow, styles.stats]}>
          <Text style={[ globalStyles.flex1, globalStyles.flexStart, globalStyles.vCenter, {flexDirection: 'column'}]}>            
          <FontAwesome5 name="temperature-low" size={35} color="black" />
            <Text style={[globalStyles.regularTitle]}>{item.item.minTempreature}
              <MaterialCommunityIcons name="temperature-celsius" size={15} color="black" />
            </Text>
          </Text>
          <Text style={[ globalStyles.flex1, globalStyles.flexStart, globalStyles.vCenter, {flexDirection: 'column'}]}>
            <FontAwesome5 name="temperature-high" size={35} color="black" />
            <Text style={[globalStyles.regularTitle]}>{item.item.maxTempreature}
              <MaterialCommunityIcons name="temperature-celsius" size={15} color="black" />
            </Text>
          </Text>
        </View>

        <View style={[globalStyles.flex1, globalStyles.fullWidth, globalStyles.flexRow, styles.stats]}>
          <Text style={[ globalStyles.flex1, globalStyles.flexStart, globalStyles.vCenter, {flexDirection: 'column'}]}>
            <Feather name="sunrise" size={35} color={Colors.sunrise} />
            <Text style={[globalStyles.regularTitle]}>{item.item.sunrise}</Text>
          </Text>
          <Text style={[ globalStyles.flex1, globalStyles.flexStart, globalStyles.vCenter, {flexDirection: 'column'}]}>
            <Feather name="sunset" size={35} color={Colors.sunset} />
            <Text style={[globalStyles.regularTitle]}>{item.item.sunset}</Text>
          </Text>
        </View>

        <View style={[globalStyles.flex1, globalStyles.fullWidth, globalStyles.flexRow, styles.stats]}>
          <Text style={[ globalStyles.flex1, globalStyles.flexStart, globalStyles.vCenter, {flexDirection: 'column'}]}>            
            <Feather name="wind" size={35} color="black" />
            <Text style={[globalStyles.regularTitle]}>{item.item.windSpeed + ' km/h'}</Text>
          </Text>
          <Text style={[ globalStyles.flex1, globalStyles.flexStart, globalStyles.vCenter, {flexDirection: 'column'}]}>
          <Text style={[globalStyles.regularTitle, {fontSize: 35}]}>{GetCardinalDirection(item.item.windDirection)}</Text>
            <Text style={[globalStyles.regularTitle]}>{item.item.windDirection}</Text>
          </Text>
        </View>

      </ImageBackground>
  </View>
  )
};

const CityCard = props => {

  const cities = useSelector(state => state.cities.cities);

  return (
    <View style={[styles.container, globalStyles.fullWidth, globalStyles.flex1]}>
      <Carousel
                width={width}
                height={height / 1.3}
                autoPlay={false}
                snapEnabled={true}
                data={cities}
                scrollAnimationDuration={1000}
                pagingEnabled={true}
                // onSnapToItem={(index) => console.log('current index:', index)}
                renderItem={renderCity}
            />
    </View>
  );
};

export default CityCard;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 25,
  },

  cityBox: {
    flex: 1,
    borderRadius: 8,
    width: width,
    justifyContent: 'center',
    alignItems: 'center'
  },

  cityName: {
    fontSize: 60,
    paddingTop: 15,
  },
  tempreature: {
    paddingTop: 25,
    fontSize: 65,
    fontFamily: 'Comfortaa_700Bold'
  },

  stats: {
    paddingTop: 15
  }
});
