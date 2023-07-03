import {
  SafeAreaView,
  View,
  Image,
  StyleSheet,
  Dimensions,
  Text,
  ActivityIndicator,
  ScrollView,
  FlatList,
  Pressable,
} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import {RootStackParams} from '../navigation/StackNavigation';
import {useMovieDetails} from '../hooks';

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {}

const height = Dimensions.get('screen').height;

const DetailScreen = ({route, navigation}: Props) => {
  const movie = route.params;
  const {isLoading, movieDetails, cast} = useMovieDetails(movie.id);
  const baseImageUrl = 'https://image.tmdb.org/t/p/w500/';
  const posterURL = `${baseImageUrl}${movie.poster_path}`;

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{...styles.imageContainer}}>
          <Pressable
            onPress={() => navigation.goBack()}
            style={{
              position: 'absolute',
              zIndex: 1,
              marginTop: 10,
              marginLeft: 10,
            }}>
            <Icon name="arrow-back-outline" size={40} color="#FFFFFF" />
          </Pressable>
          <Image source={{uri: posterURL}} style={styles.image} />
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{movie.title}</Text>
          {isLoading ? (
            <ActivityIndicator size={30} color="#FFF" />
          ) : (
            <View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  marginBottom: 5,
                }}>
                <Text style={{color: '#B7B6AF', fontSize: 18}}>
                  {`${movie.release_date.slice(0, 4)} - `}
                </Text>
                <Icon
                  name="star-outline"
                  size={15}
                  color="#B7B6AF"
                  style={{marginTop: 2}}
                />
                <Text
                  style={{
                    ...styles.textColor,
                    color: '#B7B6AF',
                  }}>{` ${movie.vote_average}`}</Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  flexShrink: 1,
                  flexWrap: 'wrap',
                }}>
                {movieDetails?.genres.map((genre, idx) => (
                  <Text
                    style={{...styles.textColor, color: '#B7B6AF'}}
                    key={genre.id}>
                    {`${genre.name} ${
                      idx === movieDetails.genres.length - 1 ? '' : '- '
                    }`}
                  </Text>
                ))}
              </View>
              <View>
                <Text
                  style={{
                    ...styles.textColor,
                    fontSize: 20,
                    marginTop: 20,
                    marginBottom: 10,
                  }}>
                  Overview
                </Text>
                <Text style={styles.textColor}>{movie.overview}</Text>
              </View>
              <FlatList
                data={cast}
                keyExtractor={item => `${item.id}`}
                style={{marginTop: 20, display: 'flex', flexDirection: 'row'}}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={actor => (
                  <View style={styles.card}>
                    {actor.item.profile_path ? (
                      <Image
                        source={{
                          uri: `${baseImageUrl}${actor.item.profile_path}`,
                        }}
                        style={styles.actorImg}
                      />
                    ) : (
                      <Icon name="happy-outline" size={90} color="#FFF" />
                    )}

                    <View style={styles.actorInfo}>
                      <Text
                        style={{
                          ...styles.textColor,
                          marginBottom: 5,
                          fontSize: 20,
                        }}>
                        {actor.item.name}
                      </Text>
                      <Text style={styles.textColor}>
                        {actor.item.character}
                      </Text>
                    </View>
                  </View>
                )}
              />
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export const styles = StyleSheet.create({
  imageContainer: {
    alignSelf: 'center',
    width: '100%',
    height: height * 0.7,
  },
  image: {
    width: '100%',
    height: '100%',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  detailsContainer: {
    padding: 15,
  },
  card: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#651952',
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
    width: 270,
    height: 120,
    overflow: 'hidden',
  },
  actorImg: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
  },
  actorInfo: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    marginLeft: 10,
    alignSelf: 'center',
    flexShrink: 1,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 26,
    marginBottom: 5,
  },
  textColor: {
    color: '#FFFFFF',
    fontSize: 17,
  },
});

export default DetailScreen;
