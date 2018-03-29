import {API,POPULAR} from '../const/const';
export function popularPeople(lang = "en-US", page = 1) {
  return dispatch => {
    //https://api.themoviedb.org/3/person/popular?api_key=<<api_key>>&language=en-US&page=1
    fetch(
      API.ROOT +
        "person/popular?api_key=" +
        API.KEY +
        "&language=" +
        lang +
        "&page=" +
        page
    )
      .then(response => response.json())
      .then(responseJson => {
        data = responseJson.results;
        dispatch({ type:POPULAR.PERSON_FOUND, payload: data });
      })
      .catch(function(error) {
        dispatch({ type:POPULAR.ERROR, payload: error });
      });
  };
}
//https://api.themoviedb.org/3/person/popular?api_key=<<api_key>>&language=en-US&page=1

export function sliderData(person_id) {
  return async dispatch => {
    //https://api.themoviedb.org/3/movie/{movie_id}/images?api_key={api__key}&language=en-US&include_image_language=en
    await fetch(API.ROOT + "person/" + person_id + "/images?api_key=" + API.KEY)
      .then(response => response.json())
      .then(responseJson => {
        data = generateImages(responseJson.profiles);
        dispatch({ type:POPULAR.PERSON_IMAGE_FOUND, payload: data });
      })
      .catch(function(error) {
        dispatch({ type:POPULAR.ERROR, payload: error });
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
    await fetch(API.ROOT + "person/" + person_id + "?api_key=" + API.KEY)
      .then(response => response.json())
      .then(responseJson => {
        data = responseJson;
        dispatch({ type:POPULAR.PERSON_DETAIL_FOUND, payload: data });
      })
      .catch(function(error) {
        dispatch({ type:POPULAR.ERROR, payload: error });
      });
  };
}
export function getTVShowbyPerson(person_id, lang = "en-US",sortBy = "popularity.desc", adlt = "false", video = "false", page = 1){
  return dispatch => {
    //https://api.themoviedb.org/3/discover/movie?api_key=720474c3e42189e4e9381b59360765d5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1
    fetch(API.ROOT+"discover/tv?api_key=" +API.KEY +"&language=" +lang +"&sort_by=" +sortBy +"&include_adult=" +adlt +"&include_video=" +video +"&page=" +page+"&with_people="+person_id)
      .then(response => response.json())
      .then(responseJson => {
        data = responseJson.results;
        dispatch({ type:POPULAR.TV_FOUND, payload: data });
      })
      .catch(function(error) {
        dispatch({ type:POPULAR.ERROR, payload: error });
      });
  };
}

export function getMoviebyPerson(person_id, lang = "en-US",sortBy = "popularity.desc", adlt = "false", video = "false", page = 1) {
  return dispatch => {
    //https://api.themoviedb.org/3/discover/movie?api_key=720474c3e42189e4e9381b59360765d5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1
    fetch(API.ROOT+"discover/movie?api_key=" +API.KEY +"&language=" +lang +"&sort_by=" +sortBy +"&include_adult=" +adlt +"&include_video=" +video +"&page=" +page+"&with_people="+person_id)
      .then(response => response.json())
      .then(responseJson => {
        data = responseJson.results;
        dispatch({ type:POPULAR.MOVIE_FOUND, payload: data });
      })
      .catch(function(error) {
        dispatch({ type:POPULAR.ERROR, payload: error });
      });
  };
}