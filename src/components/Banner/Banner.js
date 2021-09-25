import React, { useState, useEffect } from "react";
import requests from "../../utils/requests";
import axios from "../../utils/axios";
import "./banner.css";

function Banner() {
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function fetchMovieData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchMovieData();
  }, []);
  console.log(movie);
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      }}
    >
      <div className="banner-content">
        <h1 className="banner-title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner-buttons">
          <button className="banner-btn">Play</button>
          <button className="banner-btn">My List</button>
        </div>
        <h1 className="banner-desc">
          {truncate(`this is movie desc`, 100)}
          {movie?.overview}
        </h1>
      </div>
      <div className="banner-fadeBottom"></div>
    </header>
  );
}

export default Banner;
