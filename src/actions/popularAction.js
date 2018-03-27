const apiRoot = "https://api.themoviedb.org/3/";
const apiKey = "720474c3e42189e4e9381b59360765d5";
const imgPath = "https://image.tmdb.org/t/p/w500/";
export const ERROR = "ERROR";
export const PERSON_FOUND = "PERSON_FOUND";
export function popularPeople(lang = "en-US", page = 1) {
  return dispatch => {
    //https://api.themoviedb.org/3/person/popular?api_key=<<api_key>>&language=en-US&page=1
    fetch(
      apiRoot +"person/popular?api_key=" +apiKey +"&language=" +lang +"&page=" + page)
      .then(response => response.json())
      .then(responseJson => {
        data = responseJson.results;
        dispatch({ type: PERSON_FOUND, payload: data });
      })
      .catch(function(error) {
        dispatch({ type: ERROR, payload: error });
      });
  };
}
//https://api.themoviedb.org/3/person/popular?api_key=<<api_key>>&language=en-US&page=1
