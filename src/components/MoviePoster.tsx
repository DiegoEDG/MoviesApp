import {Image, StyleSheet, View} from 'react-native';

interface Props {
  imagePath: string;
}

const MoviePoster = ({imagePath}: Props) => {
  const posterURL = `https://image.tmdb.org/t/p/w500/${imagePath}`;

  return (
    <View style={styles.movieContainer}>
      <Image source={{uri: posterURL}} style={styles.image} />
    </View>
  );
};

export const styles = StyleSheet.create({
  movieContainer: {
    width: 270,
    height: 400,
    alignSelf: 'center',
    marginTop: 15,
    borderRadius: 20,
    shadowColor: '#ffffff',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.19,
    shadowRadius: 5.62,
    elevation: 6,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
});

export default MoviePoster;
