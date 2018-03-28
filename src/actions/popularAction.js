const apiRoot = "https://api.themoviedb.org/3/";
const apiKey = "720474c3e42189e4e9381b59360765d5";
const imgPath = "https://image.tmdb.org/t/p/w500/";
export const ERROR = "ERROR";
export const PERSON_FOUND = "PERSON_FOUND";
export const PERSON_IMAGE_FOUND="PERSON_IMAGE_FOUND";
export const PERSON_DETAIL_FOUND="PERSON_DETAIL_FOUND";
export const MOVIE_FOUND="MOVIE_FOUND";
export const TV_FOUND="TV_FOUND";
export function popularPeople(lang = "en-US", page = 1) {
  return dispatch => {
    //https://api.themoviedb.org/3/person/popular?api_key=<<api_key>>&language=en-US&page=1
    fetch(
      apiRoot +
        "person/popular?api_key=" +
        apiKey +
        "&language=" +
        lang +
        "&page=" +
        page
    )
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

export function sliderData(person_id) {
  return async dispatch => {
    //https://api.themoviedb.org/3/movie/{movie_id}/images?api_key={api__key}&language=en-US&include_image_language=en
    await fetch(apiRoot + "person/" + person_id + "/images?api_key=" + apiKey)
      .then(response => response.json())
      .then(responseJson => {
        data = generateImages(responseJson.profiles);
        dispatch({ type: PERSON_IMAGE_FOUND, payload: data });
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

export function getDetailedInfo(person_id) {
  return async dispatch => {
    //http://api.themoviedb.org/3/person/118545?api_key=720474c3e42189e4e9381b59360765d5
    await fetch(apiRoot + "person/" + person_id + "?api_key=" + apiKey)
      .then(response => response.json())
      .then(responseJson => {
        data = responseJson;
        dispatch({ type: PERSON_DETAIL_FOUND, payload: data });
      })
      .catch(function(error) {
        dispatch({ type: ERROR, payload: error });
      });
  };
}
export function getTVShowbyPerson(person_id, lang = "en-US",sortBy = "popularity.desc", adlt = "false", video = "false", page = 1){
  return dispatch => {
    //https://api.themoviedb.org/3/discover/movie?api_key=720474c3e42189e4e9381b59360765d5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1
    fetch(apiRoot+"discover/tv?api_key=" +apiKey +"&language=" +lang +"&sort_by=" +sortBy +"&include_adult=" +adlt +"&include_video=" +video +"&page=" +page+"&with_people="+person_id)
      .then(response => response.json())
      .then(responseJson => {
        data = responseJson.results;
        dispatch({ type: TV_FOUND, payload: data });
      })
      .catch(function(error) {
        dispatch({ type: ERROR, payload: error });
      });
  };
}

export function getMoviebyPerson(person_id, lang = "en-US",sortBy = "popularity.desc", adlt = "false", video = "false", page = 1) {
  return dispatch => {
    //https://api.themoviedb.org/3/discover/movie?api_key=720474c3e42189e4e9381b59360765d5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1
    fetch(apiRoot+"discover/movie?api_key=" +apiKey +"&language=" +lang +"&sort_by=" +sortBy +"&include_adult=" +adlt +"&include_video=" +video +"&page=" +page+"&with_people="+person_id)
      .then(response => response.json())
      .then(responseJson => {
        data = responseJson.results;
        dispatch({ type: MOVIE_FOUND, payload: data });
      })
      .catch(function(error) {
        dispatch({ type: ERROR, payload: error });
      });
  };
}