const BASE_URL = "https://api.themoviedb.org/3";
const ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzJjOTVjZmNjNGY2MWQyMTljODJjZDM5ZjU3YTJhNCIsIm5iZiI6MTc2MTIzOTIzOS4xMzc5OTk4LCJzdWIiOiI2OGZhNjBjN2VlMzdhZDY1MzM4NTMzZmEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.6X3aUIvWh2uBQ-BPDsfPBuvvf5jGvVpS36fNUfdfTy8";
const API_KEY = "732c95cfcc4f61d219c82cd39f57a2a4";


export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?language=en-US&page=1`, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${ACCESS_TOKEN}`
    }
  });

  const data = await response.json();
  return data.results;
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${encodeURIComponent(query)}&page=1&include_adult=false`
  );

  const data = await response.json();
  return data.results;
};



// we use async + await + fetch to make an asynchronous network request 

