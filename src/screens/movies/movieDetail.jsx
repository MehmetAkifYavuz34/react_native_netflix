import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from 'react-native';
import React, {useEffect} from 'react';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import {useDispatch, useSelector} from 'react-redux';
import {getMovieData} from '../../store/actions/movieActions';
import {IMAGE_BASE_URL} from '../../service/url';

const MovieDetail = ({route}) => {
  // movieId'nin her zaman route.params içinde geldiğini varsayıyoruz.
  // Eğer gelmeme ihtimali varsa, route?.params?.movieId şeklinde kontrol ekleyebilirsiniz.
  const {movieId} = route.params;
  const dispatch = useDispatch();
  const {
    pendingDetailData,
    movieDetailData,
    error, // Hata state'ini useSelector'dan alıyoruz
  } = useSelector(state => state.movie);

  useEffect(() => {
    if (movieId) {
      dispatch(getMovieData({movieId: movieId}));
    }
    // İsteğe bağlı temizleme fonksiyonu
    // return () => {
    //   dispatch(clearMovieDetail()); // moviesSlice'da böyle bir eylem tanımlamanız gerekir
    // };
  }, [dispatch, movieId]);

  const renderGenres = genres => {
    if (!genres || genres.length === 0) {
      return null;
    }
    return (
      <View style={styles.genresContainer}>
        {genres.map((genre, index) => (
          <View key={genre.id || index} style={styles.genreTag}>
            <Text style={styles.genreText}>{genre.name}</Text>
          </View>
        ))}
      </View>
    );
  };

  if (pendingDetailData) {
    return (
      <View style={[defaultScreenStyle.detailScreen, styles.centerAlign]}>
        <ActivityIndicator size="large" color="#FF0000" />
      </View>
    );
  }

  // `error` state'ini ve `movieDetailData`'nın varlığını kontrol ediyoruz.
  if (error || !movieDetailData) {
    return (
      <View style={[defaultScreenStyle.detailScreen, styles.centerAlign]}>
        <Text style={styles.errorText}>
          {error?.message ||
            error ||
            'Film detayları yüklenirken bir hata oluştu.'}
        </Text>
      </View>
    );
  }

  // movieDetailData kesinlikle var olduğu için artık güvenle özelliklerine erişebiliriz.
  const backdropUrl = movieDetailData.backdrop_path
    ? `${IMAGE_BASE_URL}${movieDetailData.backdrop_path}` // TMDB için boyut ekleyebilirsiniz, örn: `${IMAGE_BASE_URL}w780${movieDetailData.backdrop_path}`
    : null;

  const posterUrl = movieDetailData.poster_path
    ? `${IMAGE_BASE_URL}${movieDetailData.poster_path}` // TMDB için boyut ekleyebilirsiniz, örn: `${IMAGE_BASE_URL}w500${movieDetailData.poster_path}`
    : null;

  return (
    <ScrollView style={defaultScreenStyle.detailScreen}>
      {backdropUrl ? (
        <ImageBackground source={{uri: backdropUrl}} style={styles.backdrop}>
          {/* ImageBackground'un doğrudan çocukları arasında metin olmadığından emin olun */}
          <View>
            <View style={styles.backdropOverlay} />
            <Text style={[styles.title, styles.titleOnBackdrop]}>
              {movieDetailData.title || movieDetailData.original_title}
            </Text>
          </View>
        </ImageBackground>
      ) : posterUrl ? (
        <Image source={{uri: posterUrl}} style={styles.posterAsHeader} />
      ) : null}

      <View style={styles.contentContainer}>
        {!backdropUrl &&
          (movieDetailData.title || movieDetailData.original_title) && (
            <Text style={styles.title}>
              {movieDetailData.title || movieDetailData.original_title}
            </Text>
          )}

        {movieDetailData.tagline ? (
          <Text style={styles.tagline}>{movieDetailData.tagline}</Text>
        ) : null}

        <View style={styles.statsContainer}>
          {movieDetailData.release_date ? (
            <Text style={styles.statText}>
              Yayın Tarihi:{' '}
              {new Date(movieDetailData.release_date).toLocaleDateString(
                'tr-TR',
              )}
            </Text>
          ) : null}
          {movieDetailData.vote_average ? (
            <Text style={styles.statText}>
              Puan: {movieDetailData.vote_average.toFixed(1)} / 10
            </Text>
          ) : null}
        </View>

        {renderGenres(movieDetailData.genres)}

        {movieDetailData.overview && ( // Özet varsa başlığını ve kendisini göster
          <>
            <Text style={styles.subHeader}>Özet</Text>
            <Text style={styles.overview}>{movieDetailData.overview}</Text>
          </>
        )}

        {/* Buraya oyuncu listesi, benzer filmler vb. eklenebilir */}
      </View>
    </ScrollView>
  );
};

export default MovieDetail;

const styles = StyleSheet.create({
  centerAlign: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: '#808080', // Gri
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  backdrop: {
    width: '100%',
    height: 250,
    justifyContent: 'flex-end', // İçeriği (başlığı) alta yaslar
  },
  backdropOverlay: {
    ...StyleSheet.absoluteFillObject, // Tüm alanı kaplar
    backgroundColor: 'rgba(0,0,0,0.4)', // Hafif karartma efekti
  },
  posterAsHeader: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    marginBottom: 15,
  },
  contentContainer: {
    padding: 15,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FFFFFF', // Beyaz
    marginBottom: 8,
  },
  titleOnBackdrop: {
    // position: 'relative', // ImageBackground içindeki View zaten relative gibi davranır
    // zIndex: 1, // Gerekli değilse kaldırılabilir, overlay zaten arkada
    marginHorizontal: 15,
    marginBottom: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
  tagline: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#A0A0A0', // Açık Gri
    marginBottom: 15,
    textAlign: 'center',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', // Dikeyde hizalama için
    marginBottom: 15,
    flexWrap: 'wrap',
  },
  statText: {
    fontSize: 14,
    color: '#CCCCCC', // Çok Açık Gri
    marginVertical: 2, // Alt alta geldiğinde biraz boşluk
  },
  genresContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 15,
  },
  genreTag: {
    backgroundColor: '#333333', // Koyu Gri
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginRight: 8,
    marginBottom: 8,
  },
  genreText: {
    color: '#FFFFFF', // Beyaz
    fontSize: 12,
  },
  subHeader: {
    fontSize: 20,
    fontWeight: '600',
    color: '#FFFFFF', // Beyaz
    marginTop: 10,
    marginBottom: 8,
  },
  overview: {
    fontSize: 15,
    color: '#E0E0E0', // Neredeyse Beyaz
    lineHeight: 22,
  },
});
