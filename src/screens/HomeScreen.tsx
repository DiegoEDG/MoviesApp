import {useContext, useState, useEffect} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import {GradientBackground, MovieList, MoviePoster} from '../components';
import {useMoviesFetch} from '../hooks';
import {getImageColors} from '../helpers';
import {GradientContext} from '../context';

const {width} = Dimensions.get('window');

const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const {setMainColors} = useContext(GradientContext);
  const {nowPlaying, popular, topRated, upcoming, isLoading} = useMoviesFetch();

  const getUrl = async (idx: number) => {
    const baseImageUrl = 'https://image.tmdb.org/t/p/w500/';
    const posterUrl = `${baseImageUrl}${nowPlaying[idx].poster_path}`;
    const [primary, secondary] = await getImageColors(posterUrl);
    setMainColors({primary, secondary});
  };

  useEffect(() => {
    if (nowPlaying.length > 0) {
      getUrl(0);
    }
  }, [nowPlaying]);

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
      <GradientBackground>
        <ScrollView style={{marginTop: top}}>
          <View style={{height: 470}}>
            <Text style={styles.title}>Playing Now</Text>
            <View>
              <Carousel
                data={nowPlaying}
                renderItem={({item}) => <MoviePoster movie={item} />}
                sliderWidth={width}
                itemWidth={300}
                onSnapToItem={idx => getUrl(idx)}
              />
            </View>
          </View>
          <MovieList data={popular} title="Popular" />
          <MovieList data={topRated} title="Top Rated" />
          <MovieList data={upcoming} title="Upcoming" />
        </ScrollView>
      </GradientBackground>
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
    fontSize: 30,
    marginLeft: 10,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
});

export default HomeScreen;
