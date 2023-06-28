import {FlatList, Text, View} from 'react-native';
import {Movie} from '../interfaces/movies';
import MoviePoster from './MoviePoster';

interface Props {
  data: Movie[];
  title?: string;
}

const MovieList = ({data, title}: Props) => {
  return (
    <View style={{height: 260}}>
      <Text style={{color: '#FFFFFF', fontSize: 30, marginLeft: 10}}>
        {title}
      </Text>
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={item => (
          <MoviePoster
            imagePath={item.item.poster_path}
            width={140}
            height={200}
          />
        )}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default MovieList;
