import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import HeaderCard from "./HeaderCard";
import { useEffect, useState } from "react";
import requests from "../apiRequest";

const Header = () => {
  const [relatedMovies, setRelatedMovies] = useState([]);

  useEffect(() => {
    getRelatedMovies();
  }, []);

  const getRelatedMovies = async () => {
    const response = await fetch(requests.requestPopular);
    const data = await response.json();
    setRelatedMovies(data.results);
  };

  return (
    <section className="">
      <Splide
        options={{
          type: "loop",
          arrows: false,
          autoplay: true,
          interval: 2000,
        }}
      >
        {relatedMovies.map((movie) => {
          return (
            <SplideSlide key={movie.id}>
              <HeaderCard movie={movie} />
            </SplideSlide>
          );
        })}
      </Splide>
    </section>
  );
};

export default Header;
