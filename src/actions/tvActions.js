const apiRoot = 'https://api.themoviedb.org/3/';
const apiKey = '720474c3e42189e4e9381b59360765d5';
const imgPath = "https://image.tmdb.org/t/p/w500/";
export const ERROR = 'ERROR';
export const ONTHEAIR = 'ONTHEAIR';
export const AIRINGTODAY = 'AIRINGTODAY';
export const POPULAR = 'POPULAR';
export const TOP_RATED = 'TOP_RATED';
export function onTheAir() {
      return (dispatch) => {
            //https://api.themoviedb.org/3/tv/on_the_air?api_key=55032e2af54d05c1326b26b0bf830b60
            fetch(apiRoot + 'tv/on_the_air?api_key=' + apiKey)
                  .then((response) => response.json())
                  .then((responseJson) => {
                        data = responseJson.results;
                        dispatch({ type: ONTHEAIR, payload: data })
                  })
                  .catch(function (error) {
                        dispatch({ type: ERROR, payload: error });
                  });
      }
}
export function airingToday() {
      console.log("inside action");
      return (dispatch) => {
            //https://api.themoviedb.org/3/tv/on_the_air?api_key=55032e2af54d05c1326b26b0bf830b60
            fetch(apiRoot + 'tv/airing_today?api_key=' + apiKey)
                  .then((response) => response.json())
                  .then((responseJson) => {
                        data = responseJson.results;
                        dispatch({ type: AIRINGTODAY, payload: data })
                  })
                  .catch(function (error) {
                        dispatch({ type: ERROR, payload: error });
                  });
      }
}

export function popular() {
      return (dispatch) => {
            //https://api.themoviedb.org/3/tv/on_the_air?api_key=55032e2af54d05c1326b26b0bf830b60
            fetch(apiRoot + 'tv/popular?api_key=' + apiKey)
                  .then((response) => response.json())
                  .then((responseJson) => {
                        data = responseJson.results;
                        dispatch({ type: POPULAR, payload: data })
                  })
                  .catch(function (error) {
                        dispatch({ type: ERROR, payload: error });
                  });
      }
}
export function topRated() {
      return (dispatch) => {
            //https://api.themoviedb.org/3/tv/on_the_air?api_key=55032e2af54d05c1326b26b0bf830b60
            fetch(apiRoot + 'tv/popular?api_key=' + apiKey)
                  .then((response) => response.json())
                  .then((responseJson) => {
                        data = responseJson.results;
                        dispatch({ type: TOP_RATED, payload: data })
                  })
                  .catch(function (error) {
                        dispatch({ type: ERROR, payload: error });
                  });
      }
}