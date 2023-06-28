import React from 'react';
import {
  ActivityIndicator,
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {MovieList, MoviePoster} from '../components';
import {useMoviesFetch} from '../hooks';
import {Text} from 'react-native';

const {width} = Dimensions.get('window');

const HomeScreen = () => {
  const {nowPlaying, popular, topRated, upcoming, isLoading} = useMoviesFetch();

  if (isLoading) {
    return (
      <SafeAreaView>
        <View style={styles.loader}>
          <ActivityIndicator color="white" size={60} />
        </View>
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView>
        <ScrollView>
          <View style={{height: 470}}>
            <Text style={styles.title}>Playing Now</Text>
            <Carousel
              data={nowPlaying}
              renderItem={({item}) => (
                <MoviePoster imagePath={item.poster_path} />
              )}
              sliderWidth={width}
              itemWidth={300}
            />
          </View>
          <MovieList data={popular} title="Popular" />
          <MovieList data={topRated} title="Top Rated" />
          <MovieList data={upcoming} title="Upcoming" />
        </ScrollView>
      </SafeAreaView>
    );
  }
};

export const styles = StyleSheet.create({
  loader: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    width: '100%',
    height: '100%',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 30,
    marginLeft: 10,
    alignSelf: 'center',
  },
});

export default HomeScreen;
