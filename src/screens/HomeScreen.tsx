import React from 'react';
import {ActivityIndicator, SafeAreaView, StyleSheet, View} from 'react-native';
import {MoviePoster} from '../components';
import {useMoviesFetch} from '../hooks';

const HomeScreen = () => {
  const {moviesNowPlaying, isLoading} = useMoviesFetch();

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
        <MoviePoster imagePath={moviesNowPlaying[2]?.poster_path} />
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
});

export default HomeScreen;
