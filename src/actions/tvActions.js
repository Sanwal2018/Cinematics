const apiRoot = 'https://api.themoviedb.org/3/';
const apiKey = '720474c3e42189e4e9381b59360765d5';
const imgPath = "https://image.tmdb.org/t/p/w500/";
export const ERROR = 'ERROR';
export const ONTHEAIR = 'ONTHEAIR';
export const AIRINGTODAY = 'AIRINGTODAY';
export const POPULAR = 'POPULAR';
export const TOP_RATED = 'TOP_RATED';
export const IMAGE_FOUND = 'IMAGE_FOUND';
export const INFO_FOUND = 'INFO_FOUND';
export const CAST_FOUND = 'CAST_FOUND';
export const REVIEW_FOUND = 'REVIEW_FOUND';
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

export function sliderData(tv_id, lang = 'en-US', page = 1) {
      return async (dispatch) => {
            //https://api.themoviedb.org/3/movie/{movie_id}/images?api_key={api__key}&language=en-US&include_image_language=en
            await fetch(apiRoot + 'tv/' + tv_id + '/images?api_key=' + apiKey + '&language=' + lang + '&include_image_language=en')
                  .then((response) => response.json())
                  .then((responseJson) => {
                        data = generateImages(responseJson.posters);
                        dispatch({ type: IMAGE_FOUND, payload: data })
                  })
                  .catch(function (error) {
                        dispatch({ type: ERROR, payload: error });
                  });
      }
}


export function getDetailedInfo(tv_id, lang = 'en-US') {
      return (dispatch) => {
            //https://api.themoviedb.org/3/tv/{tv_id}?api_key=<<api_key>>&language=en-US
            fetch(apiRoot + 'tv/' + tv_id + '?api_key=' + apiKey + '&language=' + lang)
                  .then((response) => response.json())
                  .then((responseJson) => {
                        data = responseJson;
                        dispatch({ type: INFO_FOUND, payload: data })
                  })
                  .catch(function (error) {
                        dispatch({ type: ERROR, payload: error });
                  });
      }
}

generateImages = (src) => {
      imageSource = [];
      let id = 1;
      src.forEach((item) => {
            if (id <= 5) {
                  myObj = {
                        id: id,
                        imagePath: imgPath + item.file_path
                  };
                  id = id + 1;
                  imageSource.push(myObj);
            }
      })
      return imageSource;
}

export function getCasts(tv_id, lang = 'en-US') {
      return (dispatch) => {
            //https://api.themoviedb.org/3/tv/{tv_id}/credits?api_key=<<api_key>>&language=en-US
            fetch(apiRoot + 'tv/' + tv_id + '/credits?api_key=' + apiKey + '&language=' + lang)
                  .then((response) => response.json())
                  .then((responseJson) => {
                        data = responseJson;
                        dispatch({ type: CAST_FOUND, payload: data })
                  })
                  .catch(function (error) {
                        dispatch({ type: ERROR, payload: error });
                  });
      }
};
export function getReview(tv_id, lang = 'en-US', page = 1) {
      return (dispatch) => {
            // https://api.themoviedb.org/3/tv/{tv_id}/reviews?api_key=<<api_key>>&language=en-US&page=1
            fetch(apiRoot + 'tv/' + tv_id + '/reviews?api_key=' + apiKey + '&language=' + lang + '&page=' + page)
                  .then((response) => response.json())
                  .then((responseJson) => {
                        data = responseJson.results;
                        dispatch({ type: REVIEW_FOUND, payload: data })
                  })
                  .catch(function (error) {
                        dispatch({ type: ERROR, payload: error });
                  });
      }
};