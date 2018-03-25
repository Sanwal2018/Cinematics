const apiRoot = 'https://api.themoviedb.org/3/';
const apiKey = '720474c3e42189e4e9381b59360765d5';
const imgPath = "https://image.tmdb.org/t/p/w500/";
export const ERROR = 'ERROR';
export const DISCOVER='DISCOVER';
export function discover(lang = 'en-US',sortBy='popularity.desc',adlt='false',video='false', page = 1) {
      return (dispatch) => {
          //https://api.themoviedb.org/3/discover/movie?api_key=<<api_key>>&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1
          fetch(apiRoot + 'discover/movie?api_key=' + apiKey + '&language=' + lang +'&sort_by='+sortBy+'&include_adult='+adlt+'&include_video='+video+'&page=' + page)
              .then((response) => response.json())
              .then((responseJson) => {
                  data = responseJson.results;
                  dispatch({ type: DISCOVER, payload: data })
              })
              .catch(function (error) {
                  dispatch({ type: ERROR, payload: error });
              });
      }
  }

//https://api.themoviedb.org/3/discover/movie?api_key=<<api_key>>&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1