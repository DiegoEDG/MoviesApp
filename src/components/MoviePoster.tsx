import {Image, StyleSheet, Text, View} from 'react-native';

interface Props {
  imagePath: string;
  width?: number;
  height?: number;
}

const MoviePoster = ({imagePath, width = 270, height = 400}: Props) => {
  const posterURL = `https://image.tmdb.org/t/p/w500/${imagePath}`;

  return (
    <View
      style={{
        width,
        height,
        alignSelf: 'center',
        marginTop: 5,
        borderRadius: 20,
        marginHorizontal: 7,
      }}>
      <Image source={{uri: posterURL}} style={styles.image} />
    </View>
  );
};

export const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
});

export default MoviePoster;
