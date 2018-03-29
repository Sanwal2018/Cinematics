import {API,TVCONST} from '../const/const'
export function onTheAir() {
  return dispatch => {
    //https://api.themoviedb.org/3/tv/on_the_air?api_key=55032e2af54d05c1326b26b0bf830b60
    fetch(API.ROOT + "tv/on_the_air?api_key=" + API.KEY)
      .then(response => response.json())
      .then(responseJson => {
        data = responseJson.results;
        dispatch({ type: TVCONST.ONTHEAIR, payload: data });
      })
      .catch(function(error) {
        dispatch({ type: TVCONST.ERROR, payload: error });
      });
  };
}
export function airingToday() {
  return dispatch => {
    //https://api.themoviedb.org/3/tv/on_the_air?api_key=55032e2af54d05c1326b26b0bf830b60
    fetch(API.ROOT + "tv/airing_today?api_key=" + API.KEY)
      .then(response => response.json())
      .then(responseJson => {
        data = responseJson.results;
        dispatch({ type: TVCONST.AIRINGTODAY, payload: data });
      })
      .catch(function(error) {
        dispatch({ type: TVCONST.ERROR, payload: error });
      });
  };
}

export function popular() {
  return dispatch => {
    //https://api.themoviedb.org/3/tv/on_the_air?api_key=55032e2af54d05c1326b26b0bf830b60
    fetch(API.ROOT + "tv/popular?api_key=" + API.KEY)
      .then(response => response.json())
      .then(responseJson => {
        data = responseJson.results;
        dispatch({ type: TVCONST.POPULAR, payload: data });
      })
      .catch(function(error) {
        dispatch({ type: TVCONST.ERROR, payload: error });
      });
  };
}
export function topRated() {
  return dispatch => {
    //https://api.themoviedb.org/3/tv/on_the_air?api_key=55032e2af54d05c1326b26b0bf830b60
    fetch(API.ROOT + "tv/popular?api_key=" + API.KEY)
      .then(response => response.json())
      .then(responseJson => {
        data = responseJson.results;
        dispatch({ type: TVCONST.TOP_RATED, payload: data });
      })
      .catch(function(error) {
        dispatch({ type: TVCONST.ERROR, payload: error });
      });
  };
}

export function sliderData(tv_id, lang = "en-US", page = 1) {
  return async dispatch => {
    //https://api.themoviedb.org/3/movie/{movie_id}/images?api_key={api__key}&language=en-US&include_image_language=en
    await fetch(
      API.ROOT +
        "tv/" +
        tv_id +
        "/images?api_key=" +
        API.KEY +
        "&language=" +
        lang +
        "&include_image_language=en"
    )
      .then(response => response.json())
      .then(responseJson => {
        data = generateImages(responseJson.posters);
        dispatch({ type: TVCONST.IMAGE_FOUND, payload: data });
      })
      .catch(function(error) {
        dispatch({ type: TVCONST.ERROR, payload: error });
      });
  };
}

export function getDetailedInfo(tv_id, lang = "en-US") {
  return dispatch => {
    //https://api.themoviedb.org/3/tv/{tv_id}?api_key=<<api_key>>&language=en-US
    fetch(API.ROOT + "tv/" + tv_id + "?api_key=" + API.KEY + "&language=" + lang)
      .then(response => response.json())
      .then(responseJson => {
        data = responseJson;
        dispatch({ type: TVCONST.INFO_FOUND, payload: data });
      })
      .catch(function(error) {
        dispatch({ type: TVCONST.ERROR, payload: error });
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

export function getCasts(tv_id, lang = "en-US") {
  return dispatch => {
    //https://api.themoviedb.org/3/tv/{tv_id}/credits?api_key=<<api_key>>&language=en-US
    fetch(
      API.ROOT +
        "tv/" +
        tv_id +
        "/credits?api_key=" +
        API.KEY +
        "&language=" +
        lang
    )
      .then(response => response.json())
      .then(responseJson => {
        data = responseJson;
        dispatch({ type: TVCONST.CAST_FOUND, payload: data });
      })
      .catch(function(error) {
        dispatch({ type: TVCONST.ERROR, payload: error });
      });
  };
}
export function getReview(tv_id, lang = "en-US", page = 1) {
  return dispatch => {
    // https://api.themoviedb.org/3/tv/{tv_id}/reviews?api_key=<<api_key>>&language=en-US&page=1
    fetch(
      API.ROOT +
        "tv/" +
        tv_id +
        "/reviews?api_key=" +
        API.KEY +
        "&language=" +
        lang +
        "&page=" +
        page
    )
      .then(response => response.json())
      .then(responseJson => {
        data = responseJson.results;
        dispatch({ type: TVCONST.REVIEW_FOUND, payload: data });
      })
      .catch(function(error) {
        dispatch({ type: TVCONST.ERROR, payload: error });
      });
  };
}
