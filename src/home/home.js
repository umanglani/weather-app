import { Dimensions, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../global-styles';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CityCard from '../common/citycard';
import Carousel from 'react-native-reanimated-carousel';
import LoadingIcon from '../common/loading-icon';
import { SearchCity } from '../services/weather-service';
import SearchableDropDown from 'react-native-searchable-dropdown';
import { Fragment } from 'react';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const renderCity = (props) => {
  return <CityCard city={props.item}/>
}

const Home = (props) => {

  const dispatch = useDispatch();

  const cities = useSelector(state => state.cities.cities);
  const searchResult = useSelector(state => state.cities.citySearchResult);
  const isSearching = useSelector(state => state.cities.isSearching);

  const [isLoading, setIsLoading] = useState(true);
  // const [isSearching, setIsSearching] = useState(false);
  
  // const [searchText, setSearchText] = useState('');
  const [selectedCity, setSelectedCity] = useState(undefined);

  const searchForCity = (searchText) => {
    if (!isSearching) {
      SearchCity(searchText, dispatch);
    }
  }

  return (
    <View style={styles.container}>
        
        <View style={[globalStyles.flex1]}>
          <Text style={[globalStyles.bigTitle]}>Weather</Text>
        </View>

        <View style={[globalStyles.flex6]}>
        <Fragment >
        <SearchableDropDown
            onItemSelect={(item) => {
              console.log(item);
              setSelectedCity(item)
            }}
            containerStyle={{ padding: 5 }}
            itemStyle={{
              padding: 10,
              marginTop: 2,
              backgroundColor: '#ddd',
              borderColor: '#bbb',
              borderWidth: 1,
              borderRadius: 5,
            }}
            itemTextStyle={{ color: '#222' }}
            itemsContainerStyle={{ maxHeight: 140 }}
            items={searchResult}
            selectedItem={selectedCity}
            defaultIndex={2}
            resetValue={false}
            textInputProps={
              {
                placeholder: "search for a city",
                underlineColorAndroid: "transparent",
                style: {
                    padding: 12,
                    borderWidth: 1,
                    borderColor: '#ccc',
                    borderRadius: 5,
                },
                onTextChange: text => {
                  if (text && text.length > 3) {
                    searchForCity(text);
                  }
                }
              }
            }
            listProps={
              {
                nestedScrollEnabled: true,
              }
            }
        />
        </Fragment>
        </View>

          {/* {isLoading && <LoadingIcon/>} */}

            {/* {!isLoading && <SafeAreaView>
            <Carousel
              width={width}
              height={height }
              autoPlay={false}
              data={cities}
              // mode='parallax'
              // modeConfig={{
              //   parallaxScrollingScale: 0.9,
              //   parallaxScrollingOffset: 50,
              // }}
              // useScrollView={false}
              scrollAnimationDuration={1000}
              
              // onSnapToItem={(index) => console.log('current index:', index)}
              renderItem={renderCity}
            />
            </SafeAreaView>} */}

    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: 35,
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start'
  }
});
