import {Pressable} from 'react-native';
import {FlatList, Text} from 'react-native';
import {Movie} from '../interfaces';
import MoviePoster from './MoviePoster';

interface Props {
  data: Movie[];
  title?: string;
}

const MovieList = ({data, title}: Props) => {
  return (
    <Pressable style={{height: 260}}>
      <Text style={{fontSize: 30, marginLeft: 10, fontWeight: 'bold'}}>
        {title}
      </Text>
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={item => (
          <MoviePoster movie={item.item} width={140} height={200} />
        )}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </Pressable>
  );
};

export default MovieList;
