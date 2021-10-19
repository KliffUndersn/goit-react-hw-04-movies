import axios from "axios";
//https://developers.themoviedb.org/3

//trending/get-trending // - список самых популярных фильмов на сегодня для создания коллекции на главной странице.
//search/search-movies // - поиск кинофильма по ключевому слову на странице фильмов.
//movies/get-movie-details // - запрос полной информации о фильме для страницы кинофильма.
//movies/get-movie-credits // - запрос информации о актёрском составе для страницы кинофильма.
//movies/get-movie-reviews // - запрос обзоров для страницы кинофильма.




const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: "339fd6919ca70eae9b795e3800d9b2f5"
    }
    
});

const createParams = params => {
    return {
      params,
    };
  };
  
  export const fetchGetHomeTrending = () => {
    return instance.get('/trending/all/day?');
  };
  
  export const fetchSearchMoviesPage = (query) => {
    return instance.get(
      'search/movie?&language=en-US&',
      createParams({ query}),
    );
  };
  
  export const fetchMovieDetailsPage = id => {
    return instance.get(`/movie/${id}`);
  };
  
  export const fetchMovieCasts = id => {
    return instance.get(`/movie/${id}/credits?&language=en-US`);
  };
  
  export const fetchMovieReviws = id => {
    return instance.get(`/movie/${id}/reviews?&language=en-US`);
  };