import {useNavigation} from '@react-navigation/native';
import {Image, StyleSheet, Pressable} from 'react-native';
import {Movie} from '../interfaces';

interface Props {
  movie: Movie;
  width?: number;
  height?: number;
}

const MoviePoster = ({movie, width = 270, height = 400}: Props) => {
  const navigation = useNavigation();
  const posterURL = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  return (
    <Pressable
      onPress={() =>
        navigation.navigate('DetailScreen' as never, movie as never)
      }
      style={{...styles.imageContainer, width, height}}>
      <Image source={{uri: posterURL}} style={styles.image} />
    </Pressable>
  );
};

export const styles = StyleSheet.create({
  imageContainer: {
    alignSelf: 'center',
    marginTop: 5,
    borderRadius: 20,
    marginHorizontal: 7,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
});

export default MoviePoster;
