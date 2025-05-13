import {createAsyncThunk} from '@reduxjs/toolkit';
import {getRequest} from '../../service/verbs';
import {
  CATEGORIES_URL,
  MOVIE_URL,
  POPULER_MOVIE_URL,
  TOP_RATED_MOVIE_URL,
  UPCOMING_MOVIE_URL,
} from '../../service/url';

const getTopRatedMovies = createAsyncThunk(
  'movies/getTopRatedMovies',

  async params => {
    try {
      console.log(
        'API İsteği Başlatılıyor - URL:',
        TOP_RATED_MOVIE_URL,
        'Params:',
        params,
      );
      const response = await getRequest(TOP_RATED_MOVIE_URL, params);

      // API'den gelen tüm yanıtı logla
      console.log('API Yanıtı (response):', response);
      // Özellikle response.data'yı ve response.data.results'ı logla
      console.log('API Yanıtı (response.data):', response.data);
      console.log('API Yanıtı (response.data.results):', response.data.results);

      // Eğer response.data.results gerçekten bir dizi değilse veya tanımsızsa,
      // güvenli bir şekilde boş bir dizi döndür
      return response.data && Array.isArray(response.data.results)
        ? response.data.results
        : [];
    } catch (error) {
      // Hata durumunda da loglama yap
      console.error(
        'API İsteğinde Hata Oluştu:',
        error.response || error.message || error,
      );
      // Hata durumunda thunk'ın reject etmesi için hatayı fırlat
      // createAsyncThunk bunu yakalayıp rejected eylemini dispatch edecektir.
      throw error;
    }
  },
);
const getPopulerMovies = createAsyncThunk(
  'movies/getPopulerMovies',

  async params => {
    try {
      console.log(
        'API İsteği Başlatılıyor - URL:',
        POPULER_MOVIE_URL,
        'Params:',
        params,
      );
      const response = await getRequest(POPULER_MOVIE_URL, params);

      // API'den gelen tüm yanıtı logla
      console.log('API Yanıtı (response):', response);
      // Özellikle response.data'yı ve response.data.results'ı logla
      console.log('API Yanıtı (response.data):', response.data);
      console.log(
        'API Yanıtı POPULAR (response.data.results):',
        response.data.results,
      );

      // Eğer response.data.results gerçekten bir dizi değilse veya tanımsızsa,
      // güvenli bir şekilde boş bir dizi döndür
      return response.data && Array.isArray(response.data.results)
        ? response.data.results
        : [];
    } catch (error) {
      // Hata durumunda da loglama yap
      console.error(
        'API İsteğinde Hata Oluştu:',
        error.response || error.message || error,
      );
      // Hata durumunda thunk'ın reject etmesi için hatayı fırlat
      // createAsyncThunk bunu yakalayıp rejected eylemini dispatch edecektir.
      throw error;
    }
  },
);
const getCategories = createAsyncThunk(
  'movies/getCategories',

  async params => {
    try {
      console.log(
        'API İsteği Başlatılıyor - URL:',
        CATEGORIES_URL,
        'Params:',
        params,
      );
      const response = await getRequest(CATEGORIES_URL, params);

      // API'den gelen tüm yanıtı logla
      console.log('API Yanıtı (response):', response);
      // Özellikle response.data'yı ve response.data.results'ı logla
      console.log('API Yanıtı (response.data):', response.data);
      console.log('API Yanıtı (response.data.results):', response.data.genres);

      // Eğer response.data.results gerçekten bir dizi değilse veya tanımsızsa,
      // güvenli bir şekilde boş bir dizi döndür
      return response.data && Array.isArray(response.data.genres)
        ? response.data.genres
        : [];
    } catch (error) {
      // Hata durumunda da loglama yap
      console.error(
        'API İsteğinde Hata Oluştu:',
        error.response || error.message || error,
      );
      // Hata durumunda thunk'ın reject etmesi için hatayı fırlat
      // createAsyncThunk bunu yakalayıp rejected eylemini dispatch edecektir.
      throw error;
    }
  },
);
const getUpcomingMovies = createAsyncThunk(
  'movies/getUpcomingMovies',

  async params => {
    try {
      console.log(
        'API İsteği Başlatılıyor - URL:',
        UPCOMING_MOVIE_URL,
        'Params:',
        params,
      );
      const response = await getRequest(UPCOMING_MOVIE_URL, params);

      // API'den gelen tüm yanıtı logla
      console.log('API Yanıtı (response):', response);
      // Özellikle response.data'yı ve response.data.results'ı logla
      console.log('API Yanıtı (response.data):', response.data);
      console.log('API Yanıtı (response.data.results):', response.data.results);

      // Eğer response.data.results gerçekten bir dizi değilse veya tanımsızsa,
      // güvenli bir şekilde boş bir dizi döndür
      return response.data && Array.isArray(response.data.results)
        ? response.data.results
        : [];
    } catch (error) {
      // Hata durumunda da loglama yap
      console.error(
        'API İsteğinde Hata Oluştu:',
        error.response || error.message || error,
      );
      // Hata durumunda thunk'ın reject etmesi için hatayı fırlat
      // createAsyncThunk bunu yakalayıp rejected eylemini dispatch edecektir.
      throw error;
    }
  },
);
const getMovieData = createAsyncThunk(
  'movies/getMovieData',

  async params => {
    try {
      console.log(
        'API İsteği Başlatılıyor - URL:',
        MOVIE_URL,
        'Params:',
        params,
      );
      const response = await getRequest(MOVIE_URL + params.movieId, params);

      // API'den gelen tüm yanıtı logla
      console.log('API Yanıtı (response):', response);
      // Özellikle response.data'yı ve response.data.results'ı logla
      console.log('API Yanıtı (response.data):', response.data);

      // Eğer response.data gerçekten bir dizi değilse veya tanımsızsa,
      // güvenli bir şekilde boş bir dizi döndür
      return response.data;
    } catch (error) {
      // Hata durumunda da loglama yap
      console.error(
        'API İsteğinde Hata Oluştu:',
        error.response || error.message || error,
      );
      // Hata durumunda thunk'ın reject etmesi için hatayı fırlat
      // createAsyncThunk bunu yakalayıp rejected eylemini dispatch edecektir.
      throw error;
    }
  },
);

export {
  getTopRatedMovies,
  getCategories,
  getPopulerMovies,
  getUpcomingMovies,
  getMovieData,
};
