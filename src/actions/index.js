const apiRoot = ' https://api.themoviedb.org/3/movie/';
const apiKey = '720474c3e42189e4e9381b59360765d5';

export const LAUNCH = 'LAUNCH';

export function launch() {
    return (dispatch) => {
        setTimeout(() => {
            dispatch({ type: LAUNCH, data: [] })
        }, 1);
    }
}

export function nowPlaying() {
    alert('fetching now Playing');
    return (dispatch) => {
        fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=720474c3e42189e4e9381b59360765d5&language=en-US&page=1")
            .then((resJSON) => {
                console.log("data : ", resJSON);
            })
            .catch(function (error) {
                console.log('There has been a problem with your fetch operation: ' + error);
                // ADD THIS THROW error
                throw error;
            });;


        // fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=9f1d732826e84e62b27ccd198877e6d9&language=en-US&page=1`)
        //     .then(res => res.json())
        //     .then(list => {
        //         console.log(list);
        //     })
        //     .catch(function (error) {
        //         console.log('There has been a problem with your fetch operation: ' + error.message);
        //         // ADD THIS THROW error
        //         throw error;
        //     });

        // fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=720474c3e42189e4e9381b59360765d5&language=en-US&page=1")
        //     .then((response) => {
        //         console.log(response);
        //     })
        //     .catch(error => {
        //         console.error(error);
        //     });
    }
}


   /*

    the movie db data:
    API Key (v3 auth):  720474c3e42189e4e9381b59360765d5

    API Read Access Token (v4 auth) : eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MjA0NzRjM2U0MjE4OWU0ZTkzODFiNTkzNjA3NjVkNSIsInN1YiI6IjVhYWI0Yjc4MGUwYTI2MWU0OTAwYTYwYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Hvj7Hdmh0vrD00gf-LVV8rByVOqt_1VqxkcE2pBdOS4

   Example API Request : https://api.themoviedb.org/3/movie/550?api_key=720474c3e42189e4e9381b59360765d5
   */