const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apikey: "https://api.themoviedb.org/3/",
  originalImage: (imgPath) =>
    `https://image.tmdb.org/t/p/original/${imagePath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${w500Image}`,
};

export default apiConfig;
