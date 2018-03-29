import { Actions } from "react-native-router-flux";
const apiRoot = "https://api.themoviedb.org/3/";
const apiKey = "720474c3e42189e4e9381b59360765d5";
const imgPath = "https://image.tmdb.org/t/p/w500/";
export const ERROR = "ERROR";
export const NOWPLAYING = "NOWPLAYING";
export const LAUNCH = "LAUNCH";
export const SEARCH_RESULTS = "SEARCH_RESULTS";
export const IMAGE_FOUND = "IMAGE_FOUND";
export const INFO_FOUND = "INFO_FOUND";
export const CAST_FOUND = "CAST_FOUND";
export const REVIEW_FOUND = "REVIEW_FOUND";
export const TOP_RATED = "TOP_RATED";
export const ANTICIPATED = "ANTICIPATED";
export const UPCOMING = "UPCOMING";
export const LISTVIEWUPDATE = "LISTVIEWUPDATE";
export const FILTER_MOVIES = "FILTER_MOVIES";
export const FILTER_TV = "FILTER_TV";
export const FILTER_PERSON = "FILTER_PERSON";
export const GENRES="GENRES";
export const DISCOVER="DISCOVER";
export const FILTER="FILTER";
export function launch() {
  return dispatch => {
    setTimeout(() => {
      dispatch({ type: LAUNCH, payload: [] });
    }, 1);
  };
}

export function updateListView() {
  return dispatch => {
    dispatch({ type: LISTVIEWUPDATE });
  };
}

export function nowPlaying(lang = "en-US", page = 1) {
  return dispatch => {
    //https://api.themoviedb.org/3/movie/now_playing?api_key=720474c3e42189e4e9381b59360765d5&language=en-US&page=5
    fetch(
      apiRoot +
        "movie/now_playing?api_key=" +
        apiKey +
        "&language=" +
        lang +
        "&page=" +
        page
    )
      .then(response => response.json())
      .then(responseJson => {
        data = responseJson.results;
        dispatch({ type: NOWPLAYING, payload: data });
      })
      .catch(function(error) {
        dispatch({ type: ERROR, payload: error });
      });
  };
}

export function topBoxOffice(lang = "en-US", page = 1) {
  return dispatch => {
    //https://api.themoviedb.org/3/movie/top_rated?api_key=<<api_key>>&language=en-US&page=1
    fetch(
      apiRoot +
        "movie/top_rated?api_key=" +
        apiKey +
        "&language=" +
        lang +
        "&page=" +
        page
    )
      .then(response => response.json())
      .then(responseJson => {
        data = responseJson.results;
        dispatch({ type: TOP_RATED, payload: data });
      })
      .catch(function(error) {
        dispatch({ type: ERROR, payload: error });
      });
  };
}

export function getAnticipated(lang = "en-US", page = 1) {
  return dispatch => {
    //https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1
    fetch(
      apiRoot +
        "movie/popular?api_key=" +
        apiKey +
        "&language=" +
        lang +
        "&page=" +
        page
    )
      .then(response => response.json())
      .then(responseJson => {
        data = responseJson.results;
        dispatch({ type: ANTICIPATED, payload: data });
      })
      .catch(function(error) {
        dispatch({ type: ERROR, payload: error });
      });
  };
}

export function getUpcoming(lang = "en-US", page = 1) {
  return dispatch => {
    //https://api.themoviedb.org/3/movie/upcoming?api_key=<<api_key>>&language=en-US&page=1
    fetch(
      apiRoot +
        "movie/upcoming?api_key=" +
        apiKey +
        "&language=" +
        lang +
        "&page=" +
        page
    )
      .then(response => response.json())
      .then(responseJson => {
        data = responseJson.results;
        dispatch({ type: UPCOMING, payload: data });
      })
      .catch(function(error) {
        dispatch({ type: ERROR, payload: error });
      });
  };
}

export function search(query, lang = "en-US", page = 1, include_adult = false) {
  return dispatch => {
    //https://api.themoviedb.org/3/search/multi?api_key=<<api_key>>&language=en-US&page=1&include_adult=false
    fetch(
      apiRoot +
        "search/multi?api_key=" +
        apiKey +
        "&language=" +
        lang +
        "&page=" +
        page +
        "&include_adult=" +
        include_adult +
        "&query=" +
        query
    )
      .then(response => response.json())
      .then(responseJson => {
        data = responseJson.results;
        dispatch({ type: SEARCH_RESULTS, payload: data });
      })
      .catch(function(error) {
        dispatch({ type: ERROR, payload: error });
      });
  };
}

export function sliderData(
  movie_id,
  lang = "en-US",
  page = 1,
  include_adult = false
) {
  return async dispatch => {
    //https://api.themoviedb.org/3/movie/{movie_id}/images?api_key={api__key}&language=en-US&include_image_language=en
    await fetch(
      apiRoot +
        "movie/" +
        movie_id +
        "/images?api_key=" +
        apiKey +
        "&language=" +
        lang +
        "&include_image_language=en"
    )
      .then(response => response.json())
      .then(responseJson => {
        data = generateImages(responseJson.posters);
        dispatch({ type: IMAGE_FOUND, payload: data });
      })
      .catch(function(error) {
        dispatch({ type: ERROR, payload: error });
      });
  };
}

export function getDetailedInfo(
  movie_id,
  lang = "en-US",
  page = 1,
  include_adult = false
) {
  return dispatch => {
    //https://api.themoviedb.org/3/movie/337167?api_key=720474c3e42189e4e9381b59360765d5&language=en-US
    fetch(
      apiRoot + "movie/" + movie_id + "?api_key=" + apiKey + "&language=" + lang
    )
      .then(response => response.json())
      .then(responseJson => {
        data = responseJson;
        dispatch({ type: INFO_FOUND, payload: data });
      })
      .catch(function(error) {
        dispatch({ type: ERROR, payload: error });
      });
  };
}

generateImages = src => {
  imageSource = [];
  let id = 1;
  src.forEach(item => {
    if (id <= 5) {
      myObj = {
        id: id,
        imagePath: imgPath + item.file_path
      };
      id = id + 1;
      imageSource.push(myObj);
    }
  });
  return imageSource;
};

export function getCasts(movie_id) {
  return dispatch => {
    //http://api.themoviedb.org/3/movie/tt0213847/casts?api_key=720474c3e42189e4e9381b59360765d
    fetch(apiRoot + "movie/" + movie_id + "/casts?api_key=" + apiKey)
      .then(response => response.json())
      .then(responseJson => {
        data = responseJson;
        dispatch({ type: CAST_FOUND, payload: data });
      })
      .catch(function(error) {
        dispatch({ type: ERROR, payload: error });
      });
  };
}
export function getReview(movie_id, lang = "en-US", page = 1) {
  return dispatch => {
    //  https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US&page=1
    fetch(
      apiRoot +
        "movie/" +
        movie_id +
        "/reviews?api_key=" +
        apiKey +
        "&language=" +
        lang +
        "&page=" +
        page
    )
      .then(response => response.json())
      .then(responseJson => {
        data = responseJson.results;
        dispatch({ type: REVIEW_FOUND, payload: data });
      })
      .catch(function(error) {
        dispatch({ type: ERROR, payload: error });
      });
  };
}

export function filter(arr, filter) {
  return dispatch => {
    let obj = [];
    _.filter(arr, item => {
      if (item.media_type == filter) obj.push(item);
    });
    filter == "movie"
      ? dispatch({
          type: FILTER_MOVIES,
          payload: obj
        })
      : filter == "tv"
        ? dispatch({
            type: FILTER_TV,
            payload: obj
          })
        : dispatch({
            type: FILTER_PERSON,
            payload: obj
          });
  };
}

export function getGenre() {
  //https://api.themoviedb.org/3/genre/movie/list?api_key=9a2955322d7a5fbef5b01d4e52abc0ff&language=en-US
  return dispatch => {
    fetch(apiRoot +"genre/movie/list?api_key=" +apiKey +"&language=en-US")
      .then(response => response.json())
      .then(responseJson => {
        data=getForPicker(responseJson.genres);
        dispatch({ type: GENRES, payload: data });
      })
      .catch(function(error) {
        dispatch({ type: ERROR, payload: error });
      });
  };
}

var getForPicker=(data)=>{
  let d=[];
  data.forEach((item)=>{
    d.push({
      id:item.id,
      value:item.name
    });
  })
  return d;
}

export function applyFilter(selectedGenre, from=new Date().getFullYear(),to=new Date().getFullYear(),sortBy = "popularity.desc",lang = "en-US", adlt = 'false', video = 'false', page = 1){
  return dispatch => {
   //https://api.themoviedb.org/3/discover/movie?api_key=720474c3e42189e4e9381b59360765d5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1
    fetch(apiRoot+"discover/movie?api_key=" +apiKey +"&language=" +lang +"&sort_by=" +sortBy +"&include_adult=" +adlt +"&include_video=" +video +"&page="+page+"&primary_release_date.gte="+from+"&primary_release_date.lte="+to+"&with_genres="+selectedGenre)
      .then(response => response.json())
      .then(responseJson => {
        data = responseJson.results;
        dispatch({ type: FILTER, payload:{data:data, genre:selectedGenre,  from:from,  to:to} });
        Actions.discover();
      })
      .catch(function(error) {
        dispatch({ type: ERROR, payload: error });
      });
  };
}
/*


    the movie db data:
    API Key (v3 auth):  720474c3e42189e4e9381b59360765d5

    API Read Access Token (v4 auth) : eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MjA0NzRjM2U0MjE4OWU0ZTkzODFiNTkzNjA3NjVkNSIsInN1YiI6IjVhYWI0Yjc4MGUwYTI2MWU0OTAwYTYwYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Hvj7Hdmh0vrD00gf-LVV8rByVOqt_1VqxkcE2pBdOS4

   Example API Request : https://api.themoviedb.org/3/movie/550?api_key=720474c3e42189e4e9381b59360765d5
   
   images Api::

   https://api.themoviedb.org/3/movie/{movie_id}/images?api_key={api__key}&language=en-US&include_image_language=en
   
   */
