const apiRoot = 'https://api.themoviedb.org/3/';
const apiKey = '720474c3e42189e4e9381b59360765d5';
export const ERROR = 'ERROR';
export const NOWPLAYING = 'NOWPLAYING';
export const LAUNCH = 'LAUNCH';
export const SEARCH_RESULTS = 'SEARCH_RESULTS';
export const IMAGE_FOUND = 'IMAGE_FOUND';
export function launch() {
    return (dispatch) => {
        setTimeout(() => {
            dispatch({ type: LAUNCH, payload: [] })
        }, 1);
    }
}

export function nowPlaying(lang = 'en-US', page = 1) {
    return (dispatch) => {
        //https://api.themoviedb.org/3/movie/now_playing?api_key=720474c3e42189e4e9381b59360765d5&language=en-US&page=5
        url = apiRoot + 'movie/now_playing?api_key=' + apiKey + '&language=' + lang + '&page=' + page;
        fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                // console.log("data : ", responseJson.results);
                data = responseJson.results;
                dispatch({ type: NOWPLAYING, payload: data })
            })
            .catch(function (error) {
                // console.log('There has been a problem with your fetch operation: ' + error);
                dispatch({ type: ERROR, payload: error });
            });
    }
}

export function search(query, lang = 'en-US', page = 1, include_adult = false) {
    return (dispatch) => {
        //https://api.themoviedb.org/3/search/multi?api_key=<<api_key>>&language=en-US&page=1&include_adult=false
        url = apiRoot + 'search/multi?api_key=' + apiKey + '&language=' + lang + '&page=' + page + '&include_adult=' + include_adult + '&query=' + query;
        fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                // console.log("data : ", responseJson.results);
                data = responseJson.results;
                console.log("response : ", data);
                dispatch({ type: SEARCH_RESULTS, payload: data })
            })
            .catch(function (error) {
                // console.log('There has been a problem with your fetch operation: ' + error);
                dispatch({ type: ERROR, payload: error });
            });
    }
}

export function sliderData(movie_id, lang = 'en-US', page = 1, include_adult = false) {
    return (dispatch) => {
        https://api.themoviedb.org/3/movie/{movie_id}/images?api_key={api__key}&language=en-US&include_image_language=en
        url = apiRoot + 'movie/' + movie_id + '/images?api_key=' + apiKey + '&language=' + lang + '&include_image_language=en';
        fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                data = responseJson.posters;
                console.log("response : ", data);
                dispatch({ type: IMAGE_FOUND, payload: data })
            })
            .catch(function (error) {
                dispatch({ type: ERROR, payload: error });
            });
    }
}

   /*

    the movie db data:
    API Key (v3 auth):  720474c3e42189e4e9381b59360765d5

    API Read Access Token (v4 auth) : eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MjA0NzRjM2U0MjE4OWU0ZTkzODFiNTkzNjA3NjVkNSIsInN1YiI6IjVhYWI0Yjc4MGUwYTI2MWU0OTAwYTYwYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Hvj7Hdmh0vrD00gf-LVV8rByVOqt_1VqxkcE2pBdOS4

   Example API Request : https://api.themoviedb.org/3/movie/550?api_key=720474c3e42189e4e9381b59360765d5
   
   images Api::

   https://api.themoviedb.org/3/movie/{movie_id}/images?api_key={api__key}&language=en-US&include_image_language=en
   
   */